import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function hashPassword(password: string) {
    return createHash("sha256")
        .update(password)
        .digest("hex");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const email = String(body.email || "").trim().toLowerCase();
        const password = String(body.password || "");
        const accessType = body.accessType;

        if (!email || !password || !accessType) {
            return NextResponse.json(
                { error: "Email, password, and access type are required." },
                { status: 400 }
            );
        }

        const { data, error } = await supabaseAdmin
            .from("weekly_tea_access_requests")
            .select("*")
            .eq("email", email)
            .eq("access_type", accessType)
            .order("created_at", { ascending: false })
            .limit(1)
            .single();

        if (error || !data) {
            return NextResponse.json(
                { error: "No account found. Please request access first." },
                { status: 404 }
            );
        }

        if (data.status !== "approved") {
            return NextResponse.json(
                { error: "Your access request is still pending approval." },
                { status: 403 }
            );
        }

        if (!data.password_hash) {
            return NextResponse.json(
                { error: "Password not found. Please submit a new request once, then approve it." },
                { status: 400 }
            );
        }

        const enteredPasswordHash = hashPassword(password);

        if (enteredPasswordHash !== data.password_hash) {
            return NextResponse.json(
                { error: "Incorrect password." },
                { status: 401 }
            );
        }

        return NextResponse.json({
            user: {
                firstName: data.first_name,
                lastName: data.last_name,
                location: data.location || "",
                contact: data.contact || "",
                email: data.email,
                accessType: data.access_type,
            },
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}