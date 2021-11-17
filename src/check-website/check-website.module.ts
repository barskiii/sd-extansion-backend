import { Module } from '@nestjs/common';
import { CheckWebsiteService } from './check-website.service';
import { CheckWebsiteController } from './check-website.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scam, ScamSchema } from './entities/scam.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Scam.name, schema: ScamSchema },
  ])],
  controllers: [CheckWebsiteController],
  providers: [CheckWebsiteService]
})
export class CheckWebsiteModule {}
