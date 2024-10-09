import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Instruction>;

@Schema()
export class Instruction {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  requiredDocuments: string[];

  @Prop({ required: true })
  steps: string[];

  @Prop()
  titleLang: string;

  @Prop()
  requiredDocumentsLang: string[];

  @Prop()
  stepsLang: string[];

  @Prop()
  tags: string[];

  // ADD LANGUAGE HEADERS
  @Prop()
  titleHeaderLang: string;

  @Prop()
  requiredDocumentsHeaderLang: string;

  @Prop()
  stepsHeaderLang: string;
}

export const InstructionSchema = SchemaFactory.createForClass(Instruction);
