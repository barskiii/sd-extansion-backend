import { IsUrl } from "class-validator";

export class CheckWebsiteDto {
    @IsUrl()
    url: string
}