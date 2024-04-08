import { Test, TestingModule } from '@nestjs/testing';
import { AdjutorController } from './adjutor.controller';
import { AdjutorService } from './adjutor.service';

describe('AdjutorController', () => {
  let controller: AdjutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdjutorController],
      providers: [AdjutorService],
    }).compile();

    controller = module.get<AdjutorController>(AdjutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
