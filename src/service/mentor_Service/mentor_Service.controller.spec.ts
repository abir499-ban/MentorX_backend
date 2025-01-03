import { Test, TestingModule } from '@nestjs/testing';
import { Mentor_ServiceController } from './mentor_Service.controller';
import { Mentor_ServiceService } from './mentor_Service.service';

describe('Mentor_ServiceController', () => {
  let controller: Mentor_ServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Mentor_ServiceController],
      providers: [Mentor_ServiceService],
    }).compile();

    controller = module.get<Mentor_ServiceController>(Mentor_ServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
