import { Module } from '@nestjs/common';
import { CheckWebsiteService } from './check-website.service';
import { CheckWebsiteController } from './check-website.controller';

@Module({
  controllers: [CheckWebsiteController],
  providers: [CheckWebsiteService]
})
export class CheckWebsiteModule {}
