import { prisma } from "./prisma.server";

export async function getCategories() {
  const data = await prisma.category.findMany({
    include: {
      tags: {
        include: {
          tags: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  const categories = data.map((category) => {
    return {
      ...category,
      tags: category.tags?.map((tag) => {
        return { ...tag.tags, categoryId: tag.categoryId };
      }),
    };
  });

  return categories as Category[];
}
