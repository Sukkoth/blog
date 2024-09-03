import { json, redirect } from "@remix-run/react";
import { prisma } from "./prisma.server";
import bcrypt from "bcryptjs";
import { createCookieSessionStorage } from "@remix-run/node";
const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

export async function login(formData: LoginForm) {
  const user = await prisma.users.findUnique({
    where: { email: formData.email.toLowerCase().trim() },
  });

  if (!user || !bcrypt.compareSync(formData.password, user.password)) {
    return json(
      {
        message: "Invalid email or password",
        status: 401,
      },
      {
        status: 401,
      }
    );
  }

  return createUserSession(user.id.toString(), "/");
}

export async function register(formData: RegisterForm) {
  const emailTaken = await prisma.users.findFirst({
    where: { email: formData.email.toLowerCase().trim() },
  });

  if (emailTaken) {
    return json(
      {
        error: "Email already taken",
      },
      {
        status: 422,
      }
    );
  }

  const hashedPassword = bcrypt.hashSync(formData.password, 10);
  const newUser = await prisma.users.create({
    data: {
      ...formData,
      password: hashedPassword,
      avatarImg: null,
    },
  });

  if (!newUser) {
    return json(
      {
        message: "Could not create user",
      },
      {
        status: 500,
      }
    );
  }
  return createUserSession(newUser.id.toString(), "/");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "bloggy",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

//blocks unauth requests and redirects to login page
export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

//use this in components to get the user
export async function getUser(request: Request): Promise<User | null> {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await prisma.users.findUnique({
      where: { id: parseInt(userId) },
    });

    const userData = { ...user, password: undefined } as User;

    return userData;
  } catch {
    throw logout(request);
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
