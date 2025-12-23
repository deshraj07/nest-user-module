import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuditLogDto {
  @IsString()
  @IsNotEmpty()
  action: string;

  @IsString()
  @IsOptional()
  reason?: string;

  @IsInt()
  @IsOptional()
  studentId?: number;

  @IsInt()
  @IsOptional()
  moderatorId?: number;
}
