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
}

declare interface Blog extends TIME_STAMPS {
  id: number;
  title: string;
  body: string;
}

interface TIME_STAMPS {
  createdAt: string;
  updatedAt: string;
}
