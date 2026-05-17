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

export async function GET(request: Request) {
    if (!isAuthorized(request)) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const { data, error } = await supabaseAdmin
        .from("weekly_tea_access_requests")
        .select(`
            id,
            first_name,
            last_name,
            location,
            contact,
            email,
            access_type,
            status,
            created_at,
            updated_at
        `)
        .order("created_at", { ascending: false });

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }

    return NextResponse.json({ requests: data || [] });
}