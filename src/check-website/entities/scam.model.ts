import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScamDocument = Scam & Document;

@Schema()
export class Scam {
  @Prop({type: String, required: true})
  url: string

  @Prop({type: Boolean, required: true})
  isItScam: boolean

  @Prop({type: String})
  category: string

  @Prop({type: String})
  description: string

  @Prop({type: String})
  article: string
}

export const ScamSchema = SchemaFactory.createForClass(Scam);
