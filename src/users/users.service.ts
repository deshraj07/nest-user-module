import { Injectable } from '@nestjs/common';
import { UserRole, UserStatus } from '../common/enums';
import { User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        isDelete: false,
      },
    });
  }

  async getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateRole(id: number, role: UserRole): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { role },
    });

    return user;
  }

  async updateStatus(id: number, status: UserStatus): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { status },
    });

    // Side Effects & Audit Logging
    if (status === UserStatus.SUSPENDED) {
      await this.prisma.suspension.create({
        data: {
          userId: id,
          reason: 'Misinformation', // Default reason
          duration: 7, // Default duration
          startDate: new Date(),
        },
      });
      await this.prisma.auditLog.create({
        data: {
          action: 'Suspend',
          studentId: id,
          moderatorId: 1, // Hardcoded moderator
          reason: 'Misinformation',
        },
      });
    } else if (status === UserStatus.BANNED) {
      await this.prisma.ban.create({
        data: {
          userId: id,
          reason: 'Harassment', // Default reason
          bannedAt: new Date(),
        },
      });
      await this.prisma.auditLog.create({
        data: {
          action: 'Ban',
          studentId: id,
          moderatorId: 1, // Hardcoded moderator
          reason: 'Harassment',
        },
      });
    }

    return user;
  }

  async removeUser(id: number): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: { isDelete: true },
    });
  }

  async getSuspended() {
    const suspended = await this.prisma.suspension.findMany({
      include: {
        user: true,
      },
    });

    return suspended.map((s) => ({
      ...s,
      date: this.formatDate(s.startDate),
    }));
  }

  async getBanned() {
    const banned = await this.prisma.ban.findMany({
      include: {
        user: true,
      },
    });

    return banned.map((b) => ({
      ...b,
      date: this.formatDate(b.bannedAt),
    }));
  }

  async getAuditUsers() {
    const logs = await this.prisma.auditLog.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        moderator: true,
        student: true,
      },
    });

    return logs.map((log) => ({
      ...log,
      date: this.formatDate(log.createdAt),
    }));
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  async liftSuspension(id: number): Promise<User> {
    await this.prisma.suspension.deleteMany({
      where: { userId: id },
    });

    await this.prisma.auditLog.create({
      data: {
        action: 'Lift Suspension',
        studentId: id,
        moderatorId: 1,
      },
    });

    return this.updateStatus(id, UserStatus.ACTIVE);
  }

  async reinstate(id: number): Promise<User> {
    await this.prisma.ban.deleteMany({
      where: { userId: id },
    });

    await this.prisma.auditLog.create({
      data: {
        action: 'Reinstate',
        studentId: id,
        moderatorId: 1,
      },
    });

    return this.updateStatus(id, UserStatus.ACTIVE);
  }
}
