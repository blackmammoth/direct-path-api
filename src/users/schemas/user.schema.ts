// src/users/schemas/user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  user_id: number;

  @Prop({ required: true })
  first_name: string;

  @Prop()
  last_name?: string;

  // @Prop({ required: true })
  @Prop()
  phone_number: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
