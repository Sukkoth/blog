import { z } from "zod";
import { prisma } from "./prisma.server";
import { BlogValidation } from "~/utils/validation/client";

export async function createBlog({
  data,
  authorId,
}: {
  data: z.infer<typeof BlogValidation>;
  authorId: number;
}): Promise<Blog> {
  const dataToInsert = {
    ...data,
    tags: undefined,
    authorId,
    categoryId: parseInt(data.categoryId),
  };

  const blog = await prisma.$transaction(async (ctx) => {
    const blog = await ctx.blogs.create({
      data: dataToInsert,
    });

    await ctx.blogTags.createMany({
      data: data.tags.map((tag) => {
        return {
          blogId: blog.id,
          tagId: tag,
        };
      }),
    });

    return blog;
  });
  return blog as Blog;
}

export async function getBlog(blogId: number) {
  return await prisma.blogs.findUnique({
    where: {
      id: blogId,
    },
    include: {
      author: true,
      category: true,
      tags: {
        select: {
          tag: true,
        },
      },
    },
  });
}

export async function getBlogs() {
  const blogs = await prisma.blogs.findMany({
    include: {
      author: true,
      category: true,
      tags: {
        select: {
          tag: true,
        },
      },
    },
  });
  return blogs as Blog[];
}
