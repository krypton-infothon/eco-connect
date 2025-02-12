import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
        const { userId } = await req.json();
        const user = await currentUser();

        if (!user || user.id !== userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Delete the user from Clerk
        const res = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
            },
        });

        if (!res.ok) throw new Error("Failed to delete user");

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}