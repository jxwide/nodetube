import {Body, Controller, Get, Param, Post, Render} from '@nestjs/common';
import {VideosService} from "./videos.service";
import {NewVideoDto} from "./dto/new-video.dto";
import {Videos} from "./schemas/videos.schema";

@Controller('videos')
export class VideosController {
    constructor(
        private videosService: VideosService
    ) {}

    @Get('testtt')
    @Render('video_page')
    testtt() {
        return {}
    }

    @Get()
    @Render('videos')
    async main_videos_page() {
        let v;
        let allvideos = this.videosService.GetAllVideos();
        await allvideos.then((value => {
            v = value;
        }), () => {})
        return {mainpagevideos: v}
    }

    @Get('/id/:video_id')
    @Render('video_page')
    async open_video_by_id(@Param('video_id') v_id) {
        let vidd, vid = this.videosService.GetVideoById(v_id)
        await vid.then(value => {
            vidd = value
            //console.log(vidd)
        })
        //console.log(vidd)
        return {
            video_src: vidd.video_src,
            video_title: vidd.title,
            video_views: vidd.views
        }
    }

    @Post('/testuploadvideo')
    test_upload_video(@Body() newVideoDto: NewVideoDto) {
        return this.videosService.UploadNewVideo(newVideoDto)
    }
}
