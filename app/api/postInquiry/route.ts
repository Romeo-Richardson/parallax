import { dbconnect } from "@/app/helper";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { firstName, lastName, message } = await req.json();
    if (!firstName || !lastName || !message) {
      return NextResponse.json({ error: "Insufficient Data" }, { status: 422 });
    }
    await dbconnect();
    const postInquiry = await prisma.inquiry.create({
      data: { firstName, lastName, message },
    });
    if (!postInquiry) {
      return NextResponse.json(
        { error: "Failed to post inquiry" },
        { status: 403 }
      );
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};
