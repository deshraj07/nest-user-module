import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole, UserStatus } from '../../common/enums';

export class UpdateUserRoleDto {
  @ApiProperty({ enum: UserRole, description: 'The new role for the user' })
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}

export class UpdateUserStatusDto {
  @ApiProperty({ enum: UserStatus, description: 'The new status for the user' })
  @IsNotEmpty()
  @IsEnum(UserStatus)
  status: UserStatus;
}
