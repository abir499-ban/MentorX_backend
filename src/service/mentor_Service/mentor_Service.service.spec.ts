import { Test, TestingModule } from '@nestjs/testing';
import { Mentor_ServiceService } from './mentor_Service.service';

describe('Mentor_ServiceService', () => {
  let service: Mentor_ServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Mentor_ServiceService],
    }).compile();

    service = module.get<Mentor_ServiceService>(Mentor_ServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
