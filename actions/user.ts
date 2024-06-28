"use server";

import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const updateUser = async (values: Partial<User>) => {
  const self = await getSelf();

  if (!self) {
    throw new Error("No user found");
  }

  const validData = {
    bio: values.bio,
    username: values.username,
    image: values.image,
  };

  const user = await db.user.update({
    where: { id: self.id },
    data: { ...validData }
  });

  revalidatePath("/");
  revalidatePath(`/${self.username}`);
  revalidatePath(`/u/${self.username}`);

  return user;
};
