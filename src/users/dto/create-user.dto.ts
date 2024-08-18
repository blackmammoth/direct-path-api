import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  readonly user_id: number;

  @IsNotEmpty()
  readonly first_name: string;

  @IsOptional()
  readonly last_name?: string;

  @IsPhoneNumber(null)
  @IsNotEmpty()
  readonly phone_number: string;
}
