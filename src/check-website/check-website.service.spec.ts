import { Test, TestingModule } from '@nestjs/testing';
import { CheckWebsiteService } from './check-website.service';

describe('CheckWebsiteService', () => {
  let service: CheckWebsiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckWebsiteService],
    }).compile();

    service = module.get<CheckWebsiteService>(CheckWebsiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
