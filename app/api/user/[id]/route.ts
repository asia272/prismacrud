import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"


// DELETE Request
export async function DELETE(req, {params}) {

    const { id } = await params;
    const userId = id;
    console.log("User ID:", userId)

    try {
        const deletedUser = await prisma.user.delete({ where: { id: Number(userId) } })
        return NextResponse.json(`${deletedUser.name}  deleted successfully`)
    } catch (error: any) {
        return NextResponse.json("faild to delete user", error)
    }


}