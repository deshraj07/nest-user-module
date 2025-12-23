import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Injectable()
export class AuditLogService {
  constructor(private prisma: PrismaService) { }

  create(data: CreateAuditLogDto) {
    return this.prisma.auditLog.create({
      data,
    });
  }

  findAll() {
    return this.prisma.auditLog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        moderator: true,
        student: true,
      },
    });
  }

  // findByUser(userId: number) {
  //   return this.prisma.auditLog.findMany({
  //     where: { userId },
  //     orderBy: {
  //       createdAt: 'desc',
  //     },
  //   });
  // }
}
