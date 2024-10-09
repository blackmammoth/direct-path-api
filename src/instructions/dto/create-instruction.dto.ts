import {
  IsString,
  IsArray,
  ArrayNotEmpty,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateInstructionDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @IsArray()
  @ArrayNotEmpty()
  readonly requiredDocuments: string[];

  @IsArray()
  @ArrayNotEmpty()
  readonly steps: string[];

  @IsString()
  @IsOptional()
  readonly titleLang: string;

  @IsArray()
  @IsOptional()
  readonly requiredDocumentsLang: string[];

  @IsArray()
  @IsOptional()
  readonly stepsLang: string[];

  @IsArray()
  @IsOptional()
  readonly tags: string[];

  // ADD LANGUAGE HEADERS
  @IsString()
  @IsOptional()
  readonly titleHeaderLang: string;

  @IsString()
  @IsOptional()
  readonly requiredDocumentsHeaderLang: string;

  @IsString()
  @IsOptional()
  readonly stepsHeaderLang: string;
}
