import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const GET = async () => {
  try {
    const shoes = await prisma.shoe.findMany();
    return new NextResponse(JSON.stringify({ shoes }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went worg" }),
      { status: 500 }
    );
  }
};
