import { Test, TestingModule } from '@nestjs/testing';
import { ZooController } from './zoo.controller';

describe('ZooController', () => {
  let controller: ZooController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZooController],
    }).compile();

    controller = module.get<ZooController>(ZooController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
