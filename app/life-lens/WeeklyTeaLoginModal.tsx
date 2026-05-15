"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import styles from "./lifeLens.module.css";

type LoginType = "read" | "write" | null;

type WeeklyTeaLoginModalProps = {
    type: LoginType;
    onClose: () => void;
};

type WeeklyTeaUser = {
    firstName: string;
    lastName: string;
    location: string;
    contact: string;
    email: string;
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function WeeklyTeaLoginModal({
    type,
    onClose,
}: WeeklyTeaLoginModalProps) {
    const [formData, setFormData] = useState<WeeklyTeaUser>({
        firstName: "",
        lastName: "",
        location: "",
        contact: "",
        email: "",
    });

    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!type) return null;

    const isRead = type === "read";

    function handleChange(
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) {
        setMessage("");

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSubmitting(true);
        setMessage("");

        const cleanEmail = formData.email.trim().toLowerCase();

        try {
            const { data: existingRequests } = await supabase
                .from("weekly_tea_access_requests")
                .select("*")
                .eq("email", cleanEmail)
                .eq("access_type", type)
                .order("created_at", { ascending: false })
                .limit(1);

            const existingRequest = existingRequests?.[0];

            if (existingRequest?.status === "approved") {
                const user = {
                    ...formData,
                    email: cleanEmail,
                };

                window.localStorage.setItem(
                    "weeklyTeaUser",
                    JSON.stringify(user)
                );

                window.dispatchEvent(
                    new Event("weeklyTeaUserUpdated")
                );

                window.location.href = isRead
                    ? "/life-lens/chapters"
                    : "/life-lens/spoiled-tea";

                return;
            }

            if (!existingRequest) {
                const { error } = await supabase
                    .from("weekly_tea_access_requests")
                    .insert([
                        {
                            first_name: formData.firstName,
                            last_name: formData.lastName,
                            location: formData.location,
                            contact: formData.contact,
                            email: cleanEmail,
                            access_type: type,
                            status: "pending",
                        },
                    ]);

                if (error) {
                    console.error(error);

                    setIsSubmitting(false);

                    setMessage(
                        "Something went wrong. Please try again."
                    );

                    return;
                }

                await fetch("/api/send-approval-email", {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: cleanEmail,
                        location: formData.location,
                        accessType: type,
                    }),
                });
            }

            setIsSubmitting(false);

            setMessage(
                "Your request has been submitted. You can access this after approval."
            );
        } catch (error) {
            console.error(error);

            setIsSubmitting(false);

            setMessage(
                "Something went wrong. Please try again."
            );
        }
    }

    return (
        <div
            className={styles.weeklyTeaModalOverlay}
            onClick={onClose}
        >
            <div
                className={styles.weeklyTeaModalCard}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.weeklyTeaModalClose}
                    onClick={onClose}
                >
                    ×
                </button>

                <img
                    src="/logo1.png"
                    alt="The Weekly Tea Logo"
                    className={styles.weeklyTeaModalLogo}
                />

                <p className={styles.weeklyTeaModalEyebrow}>
                    {isRead
                        ? "Reader Access"
                        : "Writer Access"}
                </p>

                <h2 className={styles.weeklyTeaModalTitle}>
                    {isRead
                        ? "Subscribe to Read"
                        : "Subscribe to Write"}
                </h2>

                <p className={styles.weeklyTeaModalText}>
                    {isRead
                        ? "Log in or subscribe to read weekly stories, reflections, and personal essays."
                        : "Tell us a little about your writing world before you begin publishing on The Weekly Tea."}
                </p>

                <form
                    className={styles.weeklyTeaModalForm}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Where are you located?"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />

                    {!isRead && (
                        <>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                            />

                            <select defaultValue="">
                                <option value="" disabled>
                                    What genre do you want to write in?
                                </option>

                                <option value="personal-essay">
                                    Personal Essay
                                </option>

                                <option value="fiction">
                                    Fiction
                                </option>

                                <option value="poetry">
                                    Poetry
                                </option>

                                <option value="romance">
                                    Romance
                                </option>

                                <option value="self-growth">
                                    Self Growth
                                </option>

                                <option value="journal">
                                    Journal / Diary
                                </option>

                                <option value="other">
                                    Other
                                </option>
                            </select>

                            <select defaultValue="">
                                <option value="" disabled>
                                    What are you creating?
                                </option>

                                <option value="weekly-book">
                                    Weekly Book
                                </option>

                                <option value="weekly-diary">
                                    Weekly Diary
                                </option>

                                <option value="weekly-column">
                                    Weekly Column
                                </option>

                                <option value="short-stories">
                                    Short Stories
                                </option>

                                <option value="life-notes">
                                    Life Notes
                                </option>
                            </select>

                            <textarea placeholder="What motivated you to write?" />
                        </>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Submitting..."
                            : isRead
                                ? "Request to Read"
                                : "Request to Write"}
                    </button>
                </form>

                {message && (
                    <p className={styles.approvalMessage}>
                        {message}
                    </p>
                )}

                <p className={styles.weeklyTeaLoginPrompt}>
                    Already approved? Submit again with the same email.
                </p>
            </div>
        </div>
    );
}