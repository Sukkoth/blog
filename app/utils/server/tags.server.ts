import { prisma } from "./prisma.server";

export async function getTagBlogs(tagId: number) {
  const data = await prisma.tags.findFirst({
    where: {
      id: tagId,
    },
    include: {
      blogs: {
        select: {
          blog: {
            include: {
              author: true,
              category: true,
              tags: {
                select: {
                  tag: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const blogsData = data?.blogs;
  const blogs = blogsData?.map((blogItem) => blogItem.blog) as Blog[];
  return { blogs, tag: { ...data, blogs: undefined } };
}

export async function getTags() {
  const tags = await prisma.tags.findMany({
    include: {
      _count: {
        select: {
          blogs: true,
        },
      },
    },
  });

  return tags;
}
