import { IsNotEmpty, IsOptional, IsString, IsInt, Min } from 'class-validator';

export class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  species: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  age: number;

  @IsOptional()
  @IsString()
  adopterName?: string;
}