import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"



// Get Request
export async function GET() {
  try {
    const users = await prisma.user.findMany()
    return NextResponse.json({ message: "success", users })
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },)
  }
}
//Post Request
export async function POST(req: any) {
  try {
    let body = await req.json();
    const { email, name } = body;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json({ errror: "email already exist" })
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return NextResponse.json(user, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create user" }, { status: 500 })
  }

}