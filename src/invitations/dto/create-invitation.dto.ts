// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateInvitationDto {
  // @IsEmail()
  email: string;

  // @IsString()
  role: string;

  // @IsNotEmpty()
  inviterId: number;
}
