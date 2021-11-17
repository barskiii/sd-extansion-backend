"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckWebsiteController = void 0;
const common_1 = require("@nestjs/common");
const check_website_service_1 = require("./check-website.service");
const checkWebsite_dto_1 = require("./dto/checkWebsite.dto");
let CheckWebsiteController = class CheckWebsiteController {
    constructor(checkWebsiteService) {
        this.checkWebsiteService = checkWebsiteService;
    }
    async checkWebsite(body) {
        const checkDb = await this.checkWebsiteService.searchCollection(body.url);
        if (checkDb)
            return checkDb;
        const scraped = await this.checkWebsiteService.scrapDirectory(body.url);
        this.checkWebsiteService.saveScrapedData(body.url, scraped);
        return scraped;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkWebsite_dto_1.CheckWebsiteDto]),
    __metadata("design:returntype", Promise)
], CheckWebsiteController.prototype, "checkWebsite", null);
CheckWebsiteController = __decorate([
    (0, common_1.Controller)('check-website'),
    __metadata("design:paramtypes", [check_website_service_1.CheckWebsiteService])
], CheckWebsiteController);
exports.CheckWebsiteController = CheckWebsiteController;
//# sourceMappingURL=check-website.controller.js.map