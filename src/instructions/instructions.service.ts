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

  async findAll(
    page: number,
    limit: number,
    country?: string,
  ): Promise<{ data: Instruction[]; total: number }> {
    const query = country ? { country } : {};
    const data = await this.instructionModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const total = await this.instructionModel.countDocuments(query).exec();
    return { data, total };
  }

  async findById(id: string): Promise<Instruction> {
    return this.instructionModel.findById(id).exec();
  }

  async search(
    keyword: string,
    page: number,
    limit: number,
    country?: string,
  ): Promise<{ data: Instruction[]; total: number }> {
    const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'i');
    const query: any = {
      $or: [{ title: { $regex: keywordRegex } }, { tags: keyword }],
    };

    if (country) {
      query.country = country;
    }

    const data = await this.instructionModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const total = await this.instructionModel.countDocuments(query).exec();
    return { data, total };
  }

  async filterByCountry(
    country: string,
    page: number,
    limit: number,
  ): Promise<{ data: Instruction[]; total: number }> {
    const query = { country };
    const data = await this.instructionModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const total = await this.instructionModel.countDocuments(query).exec();
    return { data, total };
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
