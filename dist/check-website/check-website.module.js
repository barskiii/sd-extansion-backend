"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckWebsiteModule = void 0;
const common_1 = require("@nestjs/common");
const check_website_service_1 = require("./check-website.service");
const check_website_controller_1 = require("./check-website.controller");
const mongoose_1 = require("@nestjs/mongoose");
const scam_model_1 = require("./entities/scam.model");
let CheckWebsiteModule = class CheckWebsiteModule {
};
CheckWebsiteModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: scam_model_1.Scam.name, schema: scam_model_1.ScamSchema },
            ])],
        controllers: [check_website_controller_1.CheckWebsiteController],
        providers: [check_website_service_1.CheckWebsiteService]
    })
], CheckWebsiteModule);
exports.CheckWebsiteModule = CheckWebsiteModule;
//# sourceMappingURL=check-website.module.js.map