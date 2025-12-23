import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserRoleDto, UpdateUserStatusDto } from './dto/users.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('suspended/all')
  @ApiOperation({ summary: 'Get all suspended users' })
  getSuspended() {
    return this.usersService.getSuspended();
  }

  @Get('banned/all')
  @ApiOperation({ summary: 'Get all banned users' })
  getBanned() {
    return this.usersService.getBanned();
  }

  @Get('auditUsers/all')
  @ApiOperation({ summary: 'Get audit logs for users' })
  getAuditUsers() {
    return this.usersService.getAuditUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  @Patch(':id/role')
  @ApiOperation({ summary: 'Update user role' })
  updateRole(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserRoleDto) {
    return this.usersService.updateRole(id, body.role);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update user status' })
  updateStatus(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserStatusDto) {
    return this.usersService.updateStatus(id, body.status);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft delete a user' })
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.removeUser(id);
  }

  @Patch(':id/lift')
  @ApiOperation({ summary: 'Lift suspension (activate user)' })
  liftSuspension(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.liftSuspension(id);
  }

  @Patch(':id/reinstate')
  @ApiOperation({ summary: 'Reinstate user (activate user)' })
  reinstate(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.reinstate(id);
  }
}
