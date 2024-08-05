import { Test, TestingModule } from '@nestjs/testing';
import { InstructionsService } from './instructions.service';
import { Model } from 'mongoose';
import { Instruction } from './schemas/instruction.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('InstructionsService', () => {
  let service: InstructionsService;
  // let model: Model<Instruction>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InstructionsService,
        {
          provide: getModelToken(Instruction.name),
          useValue: {
            new: jest.fn().mockResolvedValue({}),
            constructor: jest.fn().mockResolvedValue({}),
            find: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<InstructionsService>(InstructionsService);
    module.get<Model<Instruction>>(getModelToken(Instruction.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
