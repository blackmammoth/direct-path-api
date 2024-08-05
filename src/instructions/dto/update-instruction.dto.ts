import {
  IsString,
  IsArray,
  IsOptional,
  ArrayNotEmpty,
  IsNotEmpty,
} from 'class-validator';

export class UpdateInstructionDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  country?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  requiredDocuments?: string[];

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  steps?: string[];

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  titleAmharic?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  requiredDocumentsAmharic?: string[];

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  stepsAmharic?: string[];

  @IsOptional()
  @IsArray()
  tags?: string[];
}
