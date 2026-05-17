"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import WeeklyTeaNavbar from "../WeeklyTeaNavbar";
import styles from "../lifeLens.module.css";

type TeaPost = {
    id?: string;
    first_name: string;
    last_name: string;
    post_date: string;
    title: string;
    category: string;
    content: string;
    created_at?: string;
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SpoiledTeaPage() {
    const [view, setView] = useState<"feed" | "submit">("feed");
    const [posts, setPosts] = useState<TeaPost[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<TeaPost>({
        first_name: "",
        last_name: "",
        post_date: "",
        title: "",
        category: "",
        content: "",
    });

    async function loadPosts() {
        const { data, error } = await supabase
            .from("weekly_tea_posts")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error && data) {
            setPosts(data as TeaPost[]);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setIsSubmitting(true);

        const { error } = await supabase.from("weekly_tea_posts").insert([
            {
                first_name: formData.first_name,
                last_name: formData.last_name,
                post_date: formData.post_date,
                title: formData.title,
                category: formData.category,
                content: formData.content,
            },
        ]);

        setIsSubmitting(false);

        if (error) {
            alert("Something went wrong while posting your tea.");
            return;
        }

        setFormData({
            first_name: "",
            last_name: "",
            post_date: "",
            title: "",
            category: "",
            content: "",
        });

        await loadPosts();
        setView("feed");
    }

    return (
        <main className={styles.feedPage}>
            <WeeklyTeaNavbar />

            <section className={styles.feedHero}>
                <p className={styles.eyebrow}>THE WEEKLY TEA</p>

                <h1>
                    {view === "feed"
                        ? "Weekly Tea Feed"
                        : "Spill Your Tea"}
                </h1>

                <p>
                    {view === "feed"
                        ? "Thoughts, feelings, chaos, healing, stories — all poured here weekly."
                        : "Write your weekly tea here. Once posted, it will appear in the feed."}
                </p>

                <div className={styles.teaPageActions}>
                    <button
                        type="button"
                        className={
                            view === "feed"
                                ? styles.teaPageActionActive
                                : ""
                        }
                        onClick={() => setView("feed")}
                    >
                        Tea Feed
                    </button>

                    <button
                        type="button"
                        className={
                            view === "submit"
                                ? styles.teaPageActionActive
                                : ""
                        }
                        onClick={() => setView("submit")}
                    >
                        Submit Tea
                    </button>
                </div>
            </section>

            {view === "feed" ? (
                <section className={styles.feedWrap}>
                    {posts.length === 0 && (
                        <article className={styles.feedCard}>
                            <h2>No tea yet.</h2>

                            <p className={styles.feedContent}>
                                Be the first one to spill the tea this week.
                            </p>
                        </article>
                    )}

                    {posts.map((post) => (
                        <article
                            className={styles.feedCard}
                            key={post.id || `${post.first_name}-${post.last_name}-${post.title}`}
                        >
                            <div className={styles.feedTop}>
                                <div>
                                    <h3>
                                        {post.first_name} {post.last_name}
                                    </h3>

                                    <span>{post.post_date}</span>
                                </div>

                                <p className={styles.feedCategory}>
                                    {post.category}
                                </p>
                            </div>

                            <h2>{post.title}</h2>

                            <p className={styles.feedContent}>
                                {post.content}
                            </p>
                        </article>
                    ))}
                </section>
            ) : (
                <section className={styles.teaFormWrap}>
                    <form
                        className={styles.teaForm}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formGrid}>
                            <label>
                                First Name
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="Your first name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Last Name
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Your last name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <div className={styles.formGrid}>
                            <label>
                                Date
                                <input
                                    type="date"
                                    name="post_date"
                                    value={formData.post_date}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label>
                                Week Title
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Give this tea a title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <label>
                            Category
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Choose a category
                                </option>

                                <option value="Feelings">
                                    Feelings
                                </option>

                                <option value="Life">Life</option>

                                <option value="World">World</option>

                                <option value="Thoughts">
                                    Thoughts
                                </option>

                                <option value="Relationships">
                                    Relationships
                                </option>

                                <option value="Growth">
                                    Growth
                                </option>
                            </select>
                        </label>

                        <label>
                            Your Weekly Tea
                            <textarea
                                name="content"
                                placeholder="Write what you felt, saw, learned, noticed, or want to share this week..."
                                value={formData.content}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Posting..."
                                : "Post Weekly Tea →"}
                        </button>
                    </form>
                </section>
            )}
        </main>
    );
}