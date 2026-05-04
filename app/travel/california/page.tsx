"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../travelLocation.module.css";

type CaliforniaKey = "LosAngeles" | "SanFransisco";

type StorySection = {
    label: string;
    title: string;
    images: string[];
    text: string;
};

const californiaContent: Record<
    CaliforniaKey,
    {
        title: string;
        description: string;
        photos: string[];
        video: string;
        sections: StorySection[];
    }
> = {
    LosAngeles: {
        title: "Los Angeles",
        description:
            "Sunlight, palm trees, beach roads, good food, open skies, and a relaxed city vibe that feels warm and effortless.",
        photos: [
            "/travel/California/la1.jpeg",
            "/travel/California/la2.jpeg",
            "/travel/California/la3.jpeg",
            "/travel/California/la4.jpeg",
            "/travel/California/la5.jpeg",
            "/travel/California/la6.jpeg",
            "/travel/California/la7.jpeg",
            "/travel/California/la8.jpeg",
            "/travel/California/la9.jpeg",
            "/travel/California/la10.jpeg",
        ],
        video: "/travel/California/la.mp4",
        sections: [
            {
                label: "BEACH LIFE",
                title: "Sun, sand, and that easy coastal mood.",
                images: ["/travel/California/la1.jpeg", "/travel/California/la2.jpeg"],
                text:
                    "The beach felt like the center of everything. Long walks, open space, and that calm LA energy made it easy to slow down and just enjoy the moment.",
            },
            {
                label: "RESTAURANTS",
                title: "Good food, easy stops, no rush.",
                images: ["/travel/California/la3.jpeg", "/travel/California/la4.jpeg"],
                text:
                    "Food in LA felt casual but really good. Between beach breaks and city drives, the restaurant stops made the whole trip feel more laid-back and complete.",
            },
            {
                label: "CITY & SKY",
                title: "Warm light, soft skies, and open views.",
                images: ["/travel/California/la5.jpeg", "/travel/California/la6.jpeg"],
                text:
                    "LA had this mix of city and space. The sunsets, the wide roads, and the sky made everything feel lighter and more relaxed than most cities.",
            },
        ],
    },

    SanFransisco: {
        title: "San Francisco",
        description:
            "Coastal air, beach walks, good food, soft fog, ocean views, and a city mood that felt relaxed, fresh, and slightly cinematic.",
        photos: [
            "/travel/California/sf1.jpeg",
            "/travel/California/sf2.jpeg",
            "/travel/California/sf3.jpeg",
            "/travel/California/sf4.jpeg",
            "/travel/California/sf5.jpeg",
            "/travel/California/sf6.jpeg",
            "/travel/California/sf7.jpeg",
            "/travel/California/sf8.jpeg",
            "/travel/California/sf9.jpeg",
            "/travel/California/sf10.jpeg",
        ],
        video: "/travel/California/sf.mp4",
        sections: [
            {
                label: "COASTAL VIBE",
                title: "Beach air, soft waves, and slow coastal walks.",
                images: ["/travel/California/sf1.jpeg", "/travel/California/sf2.jpeg"],
                text:
                    "The coast gave San Francisco a softer mood. The beach, the breeze, and the open water made this part of the trip feel calm without losing that city energy.",
            },
            {
                label: "RESTAURANTS",
                title: "Good food made the city feel warmer.",
                images: ["/travel/California/sf3.jpeg", "/travel/California/sf4.jpeg"],
                text:
                    "The restaurant stops added a cozy break between the beach and city moments. It felt easy to slow down, sit for a bit, and enjoy the trip without rushing through everything.",
            },
            {
                label: "OCEAN VIEWS",
                title: "The city looked better with the ocean beside it.",
                images: ["/travel/California/sf5.jpeg", "/travel/California/sf6.jpeg"],
                text:
                    "San Francisco had that mix of city movement and coastal calm. The ocean views, the cloudy light, and the open air made the whole day feel simple, pretty, and refreshing.",
            },
        ],
    },
};

export default function CaliforniaPage() {
    const [activeCity, setActiveCity] = useState<CaliforniaKey>("LosAngeles");
    const activeContent = californiaContent[activeCity];

    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <span className={styles.navBrand}>California</span>
                </div>

                <div className={styles.navCenter}>
                    <button
                        type="button"
                        className={`${styles.navLink} ${activeCity === "LosAngeles" ? styles.active : ""}`}
                        onClick={() => setActiveCity("LosAngeles")}
                    >
                        Los Angeles
                    </button>

                    <button
                        type="button"
                        className={`${styles.navLink} ${activeCity === "SanFransisco" ? styles.active : ""}`}
                        onClick={() => setActiveCity("SanFransisco")}
                    >
                        San Fransisco
                    </button>
                </div>

                <div className={styles.navRight}>
                    <a href="#gallery" className={`${styles.navBtn} ${styles.explore}`}>
                        EXPLORE
                    </a>
                    <a href="/travel-diaries" className={`${styles.navBtn} ${styles.back}`}>
                        BACK HOME
                    </a>
                </div>
            </nav>

            <section className={styles.placeHero}>
                <p className={styles.eyebrow}>California</p>
                <h1>{activeContent.title}</h1>
                <p>{activeContent.description}</p>
            </section>

            <section className={styles.storySection}>
                {activeContent.sections.map((section) => (
                    <article key={section.title} className={styles.storyCard}>
                        <div className={styles.imageCollage}>
                            {section.images.map((image) => (
                                <div key={image} className={styles.imageTile}>
                                    <Image src={image} alt={section.title} width={700} height={900} />
                                </div>
                            ))}
                        </div>

                        <div className={styles.storyCopy}>
                            <span>{section.label}</span>
                            <h2>{section.title}</h2>
                            <p>{section.text}</p>
                        </div>
                    </article>
                ))}
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>{activeContent.title} gallery</h2>

                <div className={styles.galleryGrid}>
                    {activeContent.photos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`${activeContent.title} travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>{activeContent.title} in motion</h2>

                <video
                    src={activeContent.video}
                    controls
                    playsInline
                    style={{
                        width: "100%",
                        borderRadius: "28px",
                        background: "#000",
                        boxShadow: "0 18px 40px rgba(54, 39, 48, 0.16)",
                    }}
                />
            </section>
        </main>
    );
}