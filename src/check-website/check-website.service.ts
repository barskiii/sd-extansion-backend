import { Injectable } from '@nestjs/common';
import { CreateCheckWebsiteDto } from './dto/create-check-website.dto';
import { UpdateCheckWebsiteDto } from './dto/update-check-website.dto';

@Injectable()
export class CheckWebsiteService {
  create(createCheckWebsiteDto: CreateCheckWebsiteDto) {
    return 'This action adds a new checkWebsite';
  }

  findAll() {
    return `This action returns all checkWebsite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkWebsite`;
  }

  update(id: number, updateCheckWebsiteDto: UpdateCheckWebsiteDto) {
    return `This action updates a #${id} checkWebsite`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkWebsite`;
  }
}
