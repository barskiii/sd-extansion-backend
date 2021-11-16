import { Test, TestingModule } from '@nestjs/testing';
import { CheckWebsiteController } from './check-website.controller';
import { CheckWebsiteService } from './check-website.service';

describe('CheckWebsiteController', () => {
  let controller: CheckWebsiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckWebsiteController],
      providers: [CheckWebsiteService],
    }).compile();

    controller = module.get<CheckWebsiteController>(CheckWebsiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
