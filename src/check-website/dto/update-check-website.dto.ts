import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckWebsiteDto } from './create-check-website.dto';

export class UpdateCheckWebsiteDto extends PartialType(CreateCheckWebsiteDto) {}
