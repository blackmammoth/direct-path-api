import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  readonly user_id: number;

  @IsNotEmpty()
  readonly first_name: string;

  @IsOptional()
  readonly last_name?: string;

  @IsOptional()
  // @IsPhoneNumber(null)
  readonly phone_number?: string;
}
