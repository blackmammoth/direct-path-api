import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { CreateInstructionDto } from './dto/create-instruction.dto';
import { UpdateInstructionDto } from './dto/update-instruction.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('instructions')
export class InstructionsController {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body(ValidationPipe) createInstructionDto: CreateInstructionDto,
  ) {
    return this.instructionsService.create(createInstructionDto);
  }

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('country') country?: string,
  ) {
    const result = await this.instructionsService.findAll(
      Number(page),
      Number(limit),
      country,
    );
    return {
      data: result.data,
      total: result.total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(result.total / Number(limit)),
    };
  }

  @Get('search')
  async search(
    @Query('keyword') keyword: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('country') country?: string,
  ) {
    const result = await this.instructionsService.search(
      keyword,
      Number(page),
      Number(limit),
      country,
    );
    return {
      data: result.data,
      total: result.total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(result.total / Number(limit)),
    };
  }

  @Get('filter')
  async filterByCountry(
    @Query('country') country: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    const result = await this.instructionsService.filterByCountry(
      country,
      Number(page),
      Number(limit),
    );
    return {
      data: result.data,
      total: result.total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(result.total / Number(limit)),
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.instructionsService.findById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body(ValidationPipe) updateInstructionDto: UpdateInstructionDto,
  ) {
    return this.instructionsService.update(id, updateInstructionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.instructionsService.remove(id);
  }
}
