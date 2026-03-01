import { NextResponse } from "next/server"
import prisma from "@/lib/prisma";


// DELETE Request
export async function DELETE(req:Request, { params }) {

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
//Update 
export async function PUT(req:Request, { params }) {
     
    try {
    const { id } = await params;
   
        let body = await req.json();
        const { name, email } = body;


        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: { email,name }
        });

    return NextResponse.json(updatedUser);
    } catch (error) {
 return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 },
    );
    }
}