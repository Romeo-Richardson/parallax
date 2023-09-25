import prisma from "@/prisma";

export const dbconnect = async () => {
  try {
    await prisma.$connect();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
