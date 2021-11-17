import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScamDocument = Scam & Document;

@Schema()
export class Scam {
  @Prop({type: String, required: true})
  url: string

  @Prop({type: Boolean, required: true})
  isItScam: boolean

  @Prop({type: String, required: true})
  category: string

  @Prop({type: String, required: true})
  description: string

  @Prop({type: String, required: true})
  article: string
}

export const ScamSchema = SchemaFactory.createForClass(Scam);
