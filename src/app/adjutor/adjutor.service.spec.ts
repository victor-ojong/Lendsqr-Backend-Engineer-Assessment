import { Test, TestingModule } from '@nestjs/testing';
import { AdjutorService } from './adjutor.service';

describe('AdjutorService', () => {
  let service: AdjutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdjutorService],
    }).compile();

    service = module.get<AdjutorService>(AdjutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
