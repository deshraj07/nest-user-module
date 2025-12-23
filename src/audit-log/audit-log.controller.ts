import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Controller('audit-log')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Post()
  create(@Body() dto: CreateAuditLogDto) {
    return this.auditLogService.create(dto);
  }

  @Get()
  findAll() {
    return this.auditLogService.findAll();
  }

  // @Get('user/:id')
  // findForUser(@Param('id') id: string) {
  //   return this.auditLogService.findByUser(+id);
  // }
}
