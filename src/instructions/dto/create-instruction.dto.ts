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
  @IsNotEmpty()
  readonly titleAmharic: string;

  @IsArray()
  @ArrayNotEmpty()
  readonly requiredDocumentsAmharic: string[];

  @IsArray()
  @ArrayNotEmpty()
  readonly stepsAmharic: string[];

  @IsArray()
  @IsOptional()
  readonly tags?: string[];
}
