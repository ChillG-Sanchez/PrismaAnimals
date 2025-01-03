import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZooModule } from './moduleZoo/zoo.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ZooModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
