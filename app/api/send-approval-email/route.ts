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

        const siteUrl =
            process.env.NEXT_PUBLIC_SITE_URL ||
            "http://localhost:3000";

        await resend.emails.send({
            from: "The Weekly Tea <onboarding@resend.dev>",
            to: process.env.ADMIN_EMAIL!,
            subject: "New Weekly Tea Access Request",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 24px; color: #222;">
                    <h2>New Access Request</h2>

                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Location:</strong> ${location || "Not provided"}</p>
                    <p><strong>Access Type:</strong> ${accessType}</p>

                    <p style="margin-top: 28px;">
                        <a 
                            href="${siteUrl}/admin/weekly-tea-requests"
                            style="
                                display: inline-block;
                                padding: 12px 18px;
                                background: #d9468c;
                                color: white;
                                text-decoration: none;
                                border-radius: 999px;
                                font-weight: bold;
                            "
                        >
                            Review Request
                        </a>
                    </p>
                </div>
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