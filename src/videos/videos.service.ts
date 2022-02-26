import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Videos, VideosDocument} from "./schemas/videos.schema";
import {Model} from 'mongoose'
import {NewVideoDto} from "./dto/new-video.dto";

@Injectable()
export class VideosService {
    constructor(
        @InjectModel(Videos.name) private videosModel: Model<VideosDocument>
    ) {}

    async GetAllVideos(): Promise<Videos[]> {
        let r = await this.videosModel.find().exec();
        return r;
    }

    async GetVideoById(id): Promise<Videos> {
        let r = await this.videosModel.findById(id);
        return r
    }

    async UploadNewVideo(newVideoDto: NewVideoDto): Promise<Videos> {
        const uploadedVideo = new this.videosModel(newVideoDto);
        return await uploadedVideo.save();
    }
}
