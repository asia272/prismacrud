import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//Delete req

export async function DELETE(req: Request, { params }) {
    try {
        const { id } = await params;
        const blogId = id;

        let deletedBlog = await prisma.blog.delete({ where: { id: Number(blogId) } });
        return NextResponse.json(deletedBlog)
    } catch (error) {
        return NextResponse.json("faild to delete blog")
    }
}
//update req
export async function PUT(req: Request, { params }) {
    try {
        const { id } =await params;
        let body =await req.json();
        let { title, content } = body;

        let updatedBlog = await prisma.blog.update(
            {
                where: { id: Number(id) },
                data: { title, content }
            })
        return NextResponse.json(updatedBlog)
    } catch (error) {
        return NextResponse.json("Faild to update blog")
    }
}