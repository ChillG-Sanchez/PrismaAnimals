import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class ZooService {
    constructor(private prisma: PrismaService) {}

    create(createAnimalDto: CreateAnimalDto) {
        return this.prisma.animal.create({ data: createAnimalDto });
    }

    findAll() {
        return this.prisma.animal.findMany();
    }

    async findOne(id: number) {
        const animal = await this.prisma.animal.findUnique({
            where: { id },
        });
        if (!animal) {
            throw new NotFoundException(`Animal with id ${id} not found`);
        }
        return animal;
    }

    async update(id: number, updateAnimalDto: UpdateAnimalDto) {
        await this.findOne(id);
        return this.prisma.animal.update({
            where: { id },
            data: updateAnimalDto,
        });
    }
    async remove(id: number) {
        await this.findOne(id);
        return this.prisma.animal.delete({
            where: { id },
        });
    }
}
