import { Document } from 'mongoose';
export declare type ScamDocument = Scam & Document;
export declare class Scam {
    url: string;
    isItScam: boolean;
    category: string;
    description: string;
    article: string;
}
export declare const ScamSchema: import("mongoose").Schema<Document<Scam, any, any>, import("mongoose").Model<Document<Scam, any, any>, any, any, any>, {}>;
