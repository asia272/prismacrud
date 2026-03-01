import prisma from "../../../lib/prisma"
import { NextResponse } from "next/server"


//Get Data
export async function GET(req: Request) {
    try {
        const blogs = await prisma.blog.findMany()
        return NextResponse.json(blogs)
    } catch (error) {
        return NextResponse.json("faild to fetching blogs")
    }
}
//Post Data
export async function POST(req: Request) {
    try {
        let body = await req.json();
        let { title, content } = body;

        const blog = await prisma.blog.create({ data: { title, content } })
        return NextResponse.json(blog)

    } catch (error) {
        return NextResponse.json("falid to create blog")
    }

}