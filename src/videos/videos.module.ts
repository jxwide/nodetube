import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Videos, VideosSchema } from "./schemas/videos.schema";

@Module({
    controllers: [VideosController],
    providers: [VideosService],
    imports: [MongooseModule.forFeature([{
        name: Videos.name,
        schema: VideosSchema
    }])]
})
export class VideosModule {}
