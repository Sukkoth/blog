import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedCategories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      description: "All about the latest in technology and gadgets.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: "Health",
      description: "Tips and advice on living a healthy lifestyle.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: "Travel",
      description: "Guides and tips for travel enthusiasts.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: "Finance",
      description: "Financial advice and news.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      name: "Lifestyle",
      description: "Everything related to lifestyle and well-being.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  try {
    console.log("seeding categories");
    await prisma.category.createMany({
      data: categories,
    });
    console.log("categories populated");
  } catch (error) {
    console.error("Could not create Categories", error);
  }
}

async function seedTags() {
  const tags = [
    // Tags for Technology category
    {
      id: 1,
      name: "AI",
      description: "Posts related to Artificial Intelligence.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: "Blockchain",
      description: "Blockchain technology and cryptocurrencies.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: "Cybersecurity",
      description: "Cybersecurity news and tips.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: "Software Development",
      description: "Articles on software development.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      name: "Gadgets",
      description: "Latest gadgets and reviews.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Tags for Health category
    {
      id: 6,
      name: "Nutrition",
      description: "Articles about healthy eating habits.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      name: "Fitness",
      description: "Fitness tips and workouts.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      name: "Mental Health",
      description: "Mental health and wellness.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      name: "Yoga",
      description: "Yoga practices and benefits.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      name: "Diet",
      description: "Guides on various diets.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Tags for Travel category
    {
      id: 11,
      name: "Adventure",
      description: "Travel stories and tips on adventure trips.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      name: "Budget Travel",
      description: "Tips for traveling on a budget.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 13,
      name: "Luxury Travel",
      description: "Luxury travel experiences.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 14,
      name: "Solo Travel",
      description: "Guides and stories on solo travel.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 15,
      name: "Cultural Travel",
      description: "Exploring cultures through travel.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    // Tags for Finance category
    {
      id: 16,
      name: "Investing",
      description: "Guides and news about investing.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 17,
      name: "Personal Finance",
      description: "Managing personal finances.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 18,
      name: "Cryptocurrency",
      description: "The latest on cryptocurrencies.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 19,
      name: "Real Estate",
      description: "Real estate investment tips.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 20,
      name: "Stock Market",
      description: "News and tips on the stock market.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  try {
    console.log("seeding tags");
    await prisma.tags.createMany({
      data: tags,
    });
    console.log("tags populated");
  } catch (error) {
    console.error("Could not create tags", error);
  }
}

async function seedCategoriesToTags() {
  const categoryTags = [
    // Technology category (id: 1)
    { categoryId: 1, tagId: 1 },
    { categoryId: 1, tagId: 2 },
    { categoryId: 1, tagId: 3 },
    { categoryId: 1, tagId: 4 },
    { categoryId: 1, tagId: 5 },

    // Health category (id: 2)
    { categoryId: 2, tagId: 6 },
    { categoryId: 2, tagId: 7 },
    { categoryId: 2, tagId: 8 },
    { categoryId: 2, tagId: 9 },
    { categoryId: 2, tagId: 10 },

    // Travel category (id: 3)
    { categoryId: 3, tagId: 11 },
    { categoryId: 3, tagId: 12 },
    { categoryId: 3, tagId: 13 },
    { categoryId: 3, tagId: 14 },
    { categoryId: 3, tagId: 15 },

    // Finance category (id: 4)
    { categoryId: 4, tagId: 16 },
    { categoryId: 4, tagId: 17 },
    { categoryId: 4, tagId: 18 },
    { categoryId: 4, tagId: 19 },
    { categoryId: 4, tagId: 20 },

    // You can continue similarly for the Lifestyle category if needed
  ];

  try {
    console.log("seeding categories to tags");
    await prisma.categoryTags.createMany({
      data: categoryTags,
    });
    console.log("categories to tags populated");
  } catch (error) {
    console.error("Could not create CategoryTags", error);
  }
}

async function seedAll() {
  console.log("Seeding started . . . . ");
  //   await seedCategories();
  await seedTags();
  await seedCategoriesToTags();
  console.log("Seeding finished . . . . ");
}

seedAll()
  .then(async () => {
    console.log("Done!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
