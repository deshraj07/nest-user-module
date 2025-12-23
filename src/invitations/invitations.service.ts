import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Injectable()
export class InvitationsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateInvitationDto) {
    // return this.prisma.invitation.create({
    //   data,
    // });
  }

  findAll() {
    return this.prisma.invitation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.invitation.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateInvitationDto) {
    return this.prisma.invitation.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.invitation.delete({
      where: { id },
    });
  }
}
