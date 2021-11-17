import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckWebsiteModule } from './check-website/check-website.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [ConfigModule.forRoot(),
            MongooseModule.forRootAsync({
              imports: [ConfigModule],
              useFactory: async (configService: ConfigService) => ({
                uri: configService.get('DATABASE_URI'),
                useNewUrlParser: true
              }),
              inject: [ConfigService],
            }),
            ThrottlerModule.forRoot({
              ttl: 60,
              limit: 10,
            }),       

            
            CheckWebsiteModule,
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
