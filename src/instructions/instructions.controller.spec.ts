import { Test, TestingModule } from '@nestjs/testing';
import { InstructionsController } from './instructions.controller';
import { InstructionsService } from './instructions.service';

describe('InstructionsController', () => {
  let controller: InstructionsController;
  // let service: InstructionsService;

  beforeEach(async () => {
    const mockInstructionsService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      search: jest.fn(),
      filterByCountry: jest.fn(),
      update: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstructionsController],
      providers: [
        {
          provide: InstructionsService,
          useValue: mockInstructionsService,
        },
      ],
    }).compile();

    controller = module.get<InstructionsController>(InstructionsController);
    module.get<InstructionsService>(InstructionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
