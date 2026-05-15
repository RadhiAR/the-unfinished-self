"use client";

import { useState } from "react";
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

    if (!type) return null;

    const isRead = type === "read";

    function handleChange(
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const user: WeeklyTeaUser = {
            firstName: formData.firstName || "Weekly",
            lastName: formData.lastName || "Reader",
            location: formData.location || "Not added",
            contact: formData.contact || "Not added",
            email: formData.email || "Not added",
        };

        window.localStorage.setItem("weeklyTeaUser", JSON.stringify(user));
        window.dispatchEvent(new Event("weeklyTeaUserUpdated"));

        window.location.href = isRead
            ? "/life-lens/chapters"
            : "/life-lens/spoiled-tea";
    }

    return (
        <div className={styles.weeklyTeaModalOverlay} onClick={onClose}>
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
                    {isRead ? "Reader Access" : "Writer Access"}
                </p>

                <h2 className={styles.weeklyTeaModalTitle}>
                    {isRead ? "Subscribe to Read" : "Subscribe to Write"}
                </h2>

                <p className={styles.weeklyTeaModalText}>
                    {isRead
                        ? "Log in or subscribe to read weekly stories, reflections, and personal essays."
                        : "Tell us a little about your writing world before you begin publishing on The Weekly Tea."}
                </p>

                <form className={styles.weeklyTeaModalForm} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
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
                    />

                    <input type="password" placeholder="Password" />

                    {!isRead && (
                        <>
                            <input type="password" placeholder="Confirm Password" />

                            <select defaultValue="">
                                <option value="" disabled>
                                    What genre do you want to write in?
                                </option>
                                <option value="personal-essay">Personal Essay</option>
                                <option value="fiction">Fiction</option>
                                <option value="poetry">Poetry</option>
                                <option value="romance">Romance</option>
                                <option value="self-growth">Self Growth</option>
                                <option value="journal">Journal / Diary</option>
                                <option value="other">Other</option>
                            </select>

                            <select defaultValue="">
                                <option value="" disabled>
                                    What are you creating?
                                </option>
                                <option value="weekly-book">Weekly Book</option>
                                <option value="weekly-diary">Weekly Diary</option>
                                <option value="weekly-column">Weekly Column</option>
                                <option value="short-stories">Short Stories</option>
                                <option value="life-notes">Life Notes</option>
                            </select>

                            <textarea placeholder="What motivated you to write?" />
                        </>
                    )}

                    <button type="submit">
                        {isRead ? "Continue to Read" : "Continue to Write"}
                    </button>
                </form>

                <p className={styles.weeklyTeaLoginPrompt}>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
}