import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Instruction } from './schemas/instruction.schema';
import { Model } from 'mongoose';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';

@Injectable()
export class InstructionsService {
  constructor(
    @InjectModel(Instruction.name) private instructionModel: Model<Instruction>,
  ) {}

  async create(
    createInstructionDto: CreateInstructionDto,
  ): Promise<Instruction> {
    const createdInstruction = new this.instructionModel(createInstructionDto);
    return createdInstruction.save();
  }

  async findAll(): Promise<Instruction[]> {
    return this.instructionModel.find().exec();
  }

  async findById(id: string): Promise<Instruction> {
    return this.instructionModel.findById(id).exec();
  }

  async search(keyword: string): Promise<Instruction[]> {
    return this.instructionModel
      .find({
        $or: [
          { title: { $regex: keyword, $options: 'i' } },
          { tags: { $regex: keyword, $options: 'i' } },
        ],
      })
      .exec();
  }

  async filterByCountry(country: string): Promise<Instruction[]> {
    return this.instructionModel.find({ country }).exec();
  }

  async update(
    id: string,
    updateInstructionDto: UpdateInstructionDto,
  ): Promise<Instruction> {
    const updatedInstruction = await this.instructionModel
      .findByIdAndUpdate(
        id,
        { $set: updateInstructionDto },
        { new: true, runValidators: true },
      )
      .exec();

    if (!updatedInstruction) {
      throw new NotFoundException(`Instruction with ID ${id} not found`);
    }
    return updatedInstruction;
  }

  async remove(id: string): Promise<Instruction> {
    const instruction = await this.instructionModel
      .findByIdAndDelete(id)
      .exec();
    if (!instruction) {
      throw new NotFoundException(`Instruction with ID ${id} not found`);
    }
    return instruction;
  }
}
