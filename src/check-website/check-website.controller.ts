import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckWebsiteService } from './check-website.service';
import { CreateCheckWebsiteDto } from './dto/create-check-website.dto';
import { UpdateCheckWebsiteDto } from './dto/update-check-website.dto';

@Controller('check-website')
export class CheckWebsiteController {
  constructor(private readonly checkWebsiteService: CheckWebsiteService) {}

  @Post()
  create(@Body() createCheckWebsiteDto: CreateCheckWebsiteDto) {
    return this.checkWebsiteService.create(createCheckWebsiteDto);
  }

  @Get()
  findAll() {
    return this.checkWebsiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkWebsiteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckWebsiteDto: UpdateCheckWebsiteDto) {
    return this.checkWebsiteService.update(+id, updateCheckWebsiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkWebsiteService.remove(+id);
  }
}
