import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            firstName,
            lastName,
            email,
            location,
            accessType,
        } = body;

        await resend.emails.send({
            from: "The Weekly Tea <onboarding@resend.dev>",
            to: process.env.ADMIN_EMAIL!,
            subject: `New Weekly Tea Access Request`,
            html: `
        <h2>New Access Request</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Access Type:</strong> ${accessType}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}