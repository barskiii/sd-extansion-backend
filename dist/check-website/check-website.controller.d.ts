import { CheckWebsiteService } from './check-website.service';
import { CheckWebsiteDto } from './dto/checkWebsite.dto';
export declare class CheckWebsiteController {
    private readonly checkWebsiteService;
    constructor(checkWebsiteService: CheckWebsiteService);
    checkWebsite(body: CheckWebsiteDto): Promise<any>;
}
