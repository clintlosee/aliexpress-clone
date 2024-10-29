import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const product = await prisma.products.findFirst({
    where: {
      id: Number(event.context.params.id),
    },
  });

  return product;
});
