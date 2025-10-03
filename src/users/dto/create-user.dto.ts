import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'Email tidak valid' })
  email: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password minimal 8 karakter' })
  password: string;
}
