import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZooService } from './zoo.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('zoo')
export class ZooController {
    constructor(private readonly zooService: ZooService) {}

    @Post()
    create(@Body() createAnimalDto: CreateAnimalDto) {
        return this.zooService.create(createAnimalDto);
    }

    @Get()
    findAll() {
        return this.zooService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.zooService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
        return this.zooService.update(+id, updateAnimalDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.zooService.remove(+id);
    }
}
