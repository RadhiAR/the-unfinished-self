"use client";

import { useState } from "react";
import styles from "../lifeLens.module.css";

type TeaPost = {
    firstName: string;
    lastName: string;
    date: string;
    title: string;
    category: string;
    content: string;
};

export default function SpoiledTeaPage() {
    const [showFeed, setShowFeed] = useState(false);

    const [posts, setPosts] = useState<TeaPost[]>([]);

    const [formData, setFormData] = useState<TeaPost>({
        firstName: "",
        lastName: "",
        date: "",
        title: "",
        category: "",
        content: "",
    });

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

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setPosts([formData, ...posts]);

        setShowFeed(true);

        setFormData({
            firstName: "",
            lastName: "",
            date: "",
            title: "",
            category: "",
            content: "",
        });
    }

    if (showFeed) {
        return (
            <main className={styles.feedPage}>
                <section className={styles.feedHero}>
                    <p className={styles.eyebrow}>THE WEEKLY TEA</p>
                    <h1>Weekly Tea Feed</h1>
                    <p>
                        Thoughts, feelings, chaos, healing, stories — all poured here weekly.
                    </p>
                </section>

                <section className={styles.feedWrap}>
                    {posts.map((post, index) => (
                        <article className={styles.feedCard} key={index}>
                            <div className={styles.feedTop}>
                                <div>
                                    <h3>
                                        {post.firstName} {post.lastName}
                                    </h3>

                                    <span>{post.date}</span>
                                </div>

                                <p className={styles.feedCategory}>{post.category}</p>
                            </div>

                            <h2>{post.title}</h2>

                            <p className={styles.feedContent}>{post.content}</p>
                        </article>
                    ))}
                </section>
            </main>
        );
    }

    return (
        <main className={styles.spoiledTeaPage}>
            <section className={styles.teaHero}>
                <p className={styles.eyebrow}>Weekly Diary</p>

                <h1>Spill the Tea</h1>

                <p>
                    A cozy weekly space to write feelings, thoughts, life notes, and
                    everything worth sharing.
                </p>
            </section>

            <section className={styles.teaFormWrap}>
                <form className={styles.teaForm} onSubmit={handleSubmit}>
                    <div className={styles.formGrid}>
                        <label>
                            First Name
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Last Name
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className={styles.formGrid}>
                        <label>
                            Date
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
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
                            />
                        </label>
                    </div>

                    <label>
                        Category
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Choose a category</option>

                            <option value="Feelings">Feelings</option>
                            <option value="Life">Life</option>
                            <option value="World">World</option>
                            <option value="Thoughts">Thoughts</option>
                            <option value="Relationships">Relationships</option>
                            <option value="Growth">Growth</option>
                        </select>
                    </label>

                    <label>
                        Your Weekly Tea
                        <textarea
                            name="content"
                            placeholder="Write what you felt, saw, learned, noticed, or want to share this week..."
                            value={formData.content}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit" className={styles.submitBtn}>
                        Post Weekly Tea →
                    </button>
                </form>
            </section>
        </main>
    );
}