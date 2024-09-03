declare interface RegisterForm {
  firstName: string;
  lastName?: string;
  password: string;
  email: string;
}

declare interface LoginForm {
  email: string;
  password: string;
}

declare interface User extends TIME_STAMPS {
  id: number;
  firstName: string;
  lastName?: string;
  avatarImg?: string;
  about?: string;
}

declare interface Blog extends TIME_STAMPS {
  id: number;
  title: string;
  body: string;
  authorId: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  categoryId: number;
  tags?: {
    tag: Tag;
  }[];
  author: User;
  category: Category;
}

declare interface Tag extends TIME_STAMPS {
  id: number;
  name: string;
  desciption?: string;
  _count?: {
    blogs: number;
  };
}

declare interface Category extends TIME_STAMPS {
  id: number;
  name: string;
  description: string;
  tags?: {
    id: number;
    categoryId: number;
    name: string;
  }[];
}

interface TIME_STAMPS {
  createdAt: string | Date;
  updatedAt: string | Date;
}
