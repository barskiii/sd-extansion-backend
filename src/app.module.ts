import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckWebsiteModule } from './check-website/check-website.module';

@Module({
  imports: [CheckWebsiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
