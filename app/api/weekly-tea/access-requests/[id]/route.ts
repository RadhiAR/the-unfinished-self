import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function isAuthorized(request: Request) {
    return (
        request.headers.get("x-admin-token") ===
        process.env.WEEKLY_TEA_ADMIN_TOKEN
    );
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    if (!isAuthorized(request)) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const body = await request.json();

    const status = body.status;
    const email = String(body.email || "").trim().toLowerCase();
    const accessType = body.accessType;

    if (!["approved", "rejected", "pending"].includes(status)) {
        return NextResponse.json(
            { error: "Invalid status" },
            { status: 400 }
        );
    }

    let query = supabaseAdmin
        .from("weekly_tea_access_requests")
        .update({
            status,
            updated_at: new Date().toISOString(),
        })
        .select();

    if (params.id && params.id !== "undefined" && params.id !== "by-email") {
        query = query.eq("id", params.id);
    } else {
        if (!email || !accessType) {
            return NextResponse.json(
                { error: "Missing email or access type." },
                { status: 400 }
            );
        }

        query = query
            .eq("email", email)
            .eq("access_type", accessType);
    }

    const { data, error } = await query;

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }

    return NextResponse.json({ request: data?.[0] || null });
}