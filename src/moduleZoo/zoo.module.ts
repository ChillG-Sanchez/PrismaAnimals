import { Module } from '@nestjs/common';
import { ZooService } from './zoo.service';
import { ZooController } from './zoo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ZooService, PrismaService],
  controllers: [ZooController]
})
export class ZooModule {}
