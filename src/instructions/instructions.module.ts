import { Module } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Instruction, InstructionSchema } from './schemas/instruction.schema';
import { InstructionsController } from './instructions.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Instruction.name, schema: InstructionSchema },
    ]),
  ],
  controllers: [InstructionsController],
  providers: [InstructionsService],
})
export class InstructionsModule {}
