import { Model } from 'mongoose';
import { ScamDocument } from './entities/scam.model';
export declare class CheckWebsiteService {
    private scamModel;
    constructor(scamModel: Model<ScamDocument>);
    searchCollection(url: any): Promise<{
        isItScam: boolean;
        details: {
            url: string;
            category: string;
            description: string;
            article: string;
        };
    } | {
        isItScam: boolean;
        details: {
            url?: undefined;
            category?: undefined;
            description?: undefined;
            article?: undefined;
        };
    }>;
    scrapDirectory(url: any): Promise<any>;
    saveScrapedData(url: any, scam: any): Promise<void>;
}
