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
exports.CheckWebsiteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const scam_model_1 = require("./entities/scam.model");
const scam_directory_scraper_1 = require("scam-directory-scraper");
let CheckWebsiteService = class CheckWebsiteService {
    constructor(scamModel) {
        this.scamModel = scamModel;
    }
    async searchCollection(url) {
        const scam = await this.scamModel.findOne({ url: url });
        if (scam && scam.isItScam == true) {
            return {
                isItScam: true,
                details: {
                    url: scam.url,
                    category: scam.category,
                    description: scam.description,
                    article: scam.article
                }
            };
        }
        else if (scam && scam.isItScam == false) {
            return {
                isItScam: false,
                details: {}
            };
        }
        return null;
    }
    async scrapDirectory(url) {
        const scam = await (0, scam_directory_scraper_1.isItScam)(url);
        return scam;
    }
    async saveScrapedData(url, scam) {
        let data = {};
        if (scam.IsItScam) {
            data = {
                url: url,
                isItScam: scam.IsItScam,
                category: scam.details.category,
                description: scam.details.description,
                article: scam.details.article
            };
        }
        else {
            data = {
                url: url,
                isItScam: scam.isItScam
            };
        }
        const document = new this.scamModel(data);
        await document.save();
    }
};
CheckWebsiteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(scam_model_1.Scam.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CheckWebsiteService);
exports.CheckWebsiteService = CheckWebsiteService;
//# sourceMappingURL=check-website.service.js.map