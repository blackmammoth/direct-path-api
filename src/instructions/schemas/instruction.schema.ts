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

  @Prop({ required: true })
  titleAmharic: string;

  @Prop({ required: true })
  requiredDocumentsAmharic: string[];

  @Prop({ required: true })
  stepsAmharic: string[];

  @Prop()
  tags: string[];
}

export const InstructionSchema = SchemaFactory.createForClass(Instruction);
