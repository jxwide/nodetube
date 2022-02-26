import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import {NestExpressApplication} from "@nestjs/platform-express";
import { AppModule } from './app.module';
//import hbs from 'hbs'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //hbs
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.set('view options', { layout: 'index' });

  await app.listen(3000);
}
bootstrap();
