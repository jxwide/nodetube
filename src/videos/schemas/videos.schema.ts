import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type VideosDocument = Videos & Document;

@Schema()
export class Videos {
    @Prop()
    preview_url: string;

    @Prop()
    title: string;

    @Prop()
    channel: string;

    @Prop()
    views: number;

    @Prop()
    video_src: string;
}

export const VideosSchema = SchemaFactory.createForClass(Videos);