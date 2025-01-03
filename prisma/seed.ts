import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const animals = [];

  for (let i = 0; i < 10; i++) {
    animals.push({
      name: faker.animal.type(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 20 }),
      adopterName: faker.datatype.boolean() ? faker.person.fullName() : null,
    });
  }

  for (const animal of animals) {
    await prisma.animal.create({ data: animal });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });