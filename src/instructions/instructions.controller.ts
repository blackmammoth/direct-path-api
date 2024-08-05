import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import { ParseMongoIdPipe } from './pipes/parse-mongo-id.pipe';

@Controller('instructions')
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Post()
  async create(
    @Body(ValidationPipe) createInstructionDto: CreateInstructionDto,
  ) {
    return this.instructionsService.create(createInstructionDto);
  }

  @Get()
  async findAll() {
    return this.instructionsService.findAll();
  }

  @Get('search')
  async search(@Query('keyword') keyword: string) {
    return this.instructionsService.search(keyword);
  }

  @Get('filter')
  async filterByCountry(@Query('country') country: string) {
    return this.instructionsService.filterByCountry(country);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.instructionsService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body(ValidationPipe) updateInstructionDto: UpdateInstructionDto,
  ) {
    return this.instructionsService.update(id, updateInstructionDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.instructionsService.remove(id);
  }
}
