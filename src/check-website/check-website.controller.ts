import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckWebsiteService } from './check-website.service';
import { CheckWebsiteDto } from './dto/checkWebsite.dto';

@Controller('check-website')
export class CheckWebsiteController {
  constructor(private readonly checkWebsiteService: CheckWebsiteService) {}

  @Post()
  async checkWebsite(@Body() body: CheckWebsiteDto) {
    const checkDb = await this.checkWebsiteService.searchCollection(body.url)
    if (checkDb) return checkDb

    const scraped = await this.checkWebsiteService.scrapDirectory(body.url)

    this.checkWebsiteService.saveScrapedData(body.url, scraped)

    return scraped
  }
}
