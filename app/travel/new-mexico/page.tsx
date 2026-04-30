"use client";

import { useState } from "react";
import styles from "../travelLocation.module.css";

type LocationKey = "carlsbad" | "whiteSands" | "sandia";

type StorySection = {
    title: string;
    images: string[];
    text: string;
};

const carlsbadSections: StorySection[] = [
    {
        title: "The entrance into another world",
        images: [
            "/travel/new-mexico/carlsbad-11.jpeg",
            "/travel/new-mexico/carlsbad-9.jpeg",
        ],
        text: "Carlsbad Caverns starts above ground, surrounded by the dry New Mexico landscape and wide open sky. The entrance area feels calm at first, but once you begin going down, the space slowly changes. The light fades, the air gets cooler, and the cave starts to feel much larger than expected. It begins as an easy walk, but quickly turns into a deeper underground experience.",
    },
    {
        title: "Cathedral rooms made by nature",
        images: [
            "/travel/new-mexico/carlsbad-7.jpeg",
            "/travel/new-mexico/carlsbad-1.jpeg",
            "/travel/new-mexico/carlsbad-4.jpeg",
        ],
        text: "The main cavern is expansive, with high ceilings and rock formations in every direction. The lighting helps highlight the shapes without taking away from the natural feel of the cave. Some areas feel open and dramatic, while others are quieter and more enclosed. Moving through it feels less like a typical tourist stop and more like exploring something that has taken thousands of years to form.",
    },
    {
        title: "Textures that look unreal",
        images: [
            "/travel/new-mexico/carlsbad-2.jpeg",
            "/travel/new-mexico/carlsbad-3.jpeg",
        ],
        text: "What stands out most are the details in the rock. The surfaces have layers, ridges, and soft curves that change depending on the angle and light. Some formations look smooth, while others appear almost like they are dripping or folded. It naturally slows you down, because there is always something new to notice.",
    },
    {
        title: "A quiet personal moment",
        images: ["/travel/new-mexico/carlsbad-6.jpeg"],
        text: "One moment that stayed with me was simply stopping and looking up at the cave ceiling. The scale of the formations and the quiet around made it easy to just pause for a bit. It wasn’t overwhelming, just steady and calm. Some places don’t make you feel small — they make you feel like you’re exactly where you’re meant to be.",
    },
    {
        title: "The kind of place that stays with you",
        images: [
            "/travel/new-mexico/carlsbad-5.jpeg",
            "/travel/new-mexico/carlsbad-8.jpeg",
            "/travel/new-mexico/carlsbad-10.jpeg",
        ],
        text: "By the end, it felt like more than just a cave visit. The space, the stillness, and the way everything is naturally formed makes it memorable without needing anything extra. Walking back out into the sunlight feels slightly different, like you’ve just come back from somewhere hidden. It’s a place I would easily recommend for a road trip or a quiet adventure.",
    },
];

const sandiaSections: StorySection[] = [
    {
        title: "The ride above Albuquerque",
        images: [
            "/travel/new-mexico/sandia1.jpeg",
            "/travel/new-mexico/sandia2.jpeg",
        ],
        text: "Sandia Peak starts with the tramway slowly pulling away from the base and rising over the rocky mountains. The city begins to fall behind, the cliffs come closer, and the view keeps opening up with every minute. It is peaceful, scenic, and one of the easiest ways to feel far away from everything.",
    },
    {
        title: "Mountains, cliffs, and endless sky",
        images: [
            "/travel/new-mexico/sandia3.jpeg",
            "/travel/new-mexico/sandia6.jpeg",
            "/travel/new-mexico/sandia8.jpeg",
        ],
        text: "The views from Sandia Peak are wide and dramatic without feeling overwhelming. You get layers of mountains, desert land, pine trees, sharp cliffs, and a sky that feels larger than usual.",
    },
    {
        title: "A cold, sunny pause at the top",
        images: [
            "/travel/new-mexico/sandia4.jpeg",
            "/travel/new-mexico/sandia5.jpeg",
        ],
        text: "At the top, the mood is simple — bright sun, cold air, coffee in hand, and a view that does not need much explanation. It feels like a quiet pause in the middle of the trip.",
    },
];

const whiteSandsSections: StorySection[] = [
    {
        title: "Soft white dunes and open light",
        images: ["/travel/new-mexico/white-sands-1.jpeg"],
        text: "White Sands feels almost unreal at first glance. The dunes are soft, bright, and endless, and the whole place has a quiet, dreamy feel. It is simple, open, and beautiful without needing too much planning.",
    },
];

const content = {
    carlsbad: {
        eyebrow: "New Mexico",
        title: "Carlsbad Caverns National Park",
        description:
            "A desert stop that turned into one of the most magical underground adventures — quiet, ancient, dramatic, and unforgettable.",
        sections: carlsbadSections,
    },
    whiteSands: {
        eyebrow: "New Mexico",
        title: "White Sands National Park",
        description:
            "A bright, peaceful landscape of soft white dunes, open sky, and quiet desert beauty.",
        sections: whiteSandsSections,
    },
    sandia: {
        eyebrow: "New Mexico",
        title: "Sandia Peak Tramway",
        description:
            "A calm mountain ride above Albuquerque with cliffs, cold air, wide views, and a quiet kind of adventure.",
        sections: sandiaSections,
    },
};

export default function NewMexicoTravelPage() {
    const [activeLocation, setActiveLocation] = useState<LocationKey>("carlsbad");
    const activeContent = content[activeLocation];

    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <span className={styles.navBrand}>New Mexico</span>
                </div>

                <div className={styles.navCenter}>
                    <button
                        type="button"
                        className={`${styles.navLink} ${activeLocation === "carlsbad" ? styles.active : ""
                            }`}
                        onClick={() => setActiveLocation("carlsbad")}
                    >
                        Carlsbad
                    </button>

                    <button
                        type="button"
                        className={`${styles.navLink} ${activeLocation === "whiteSands" ? styles.active : ""
                            }`}
                        onClick={() => setActiveLocation("whiteSands")}
                    >
                        White Sands
                    </button>

                    <button
                        type="button"
                        className={`${styles.navLink} ${activeLocation === "sandia" ? styles.active : ""
                            }`}
                        onClick={() => setActiveLocation("sandia")}
                    >
                        Sandia Peak
                    </button>
                </div>

                <div className={styles.navRight}>
                    <a href="/travel">
                        <button type="button" className={`${styles.navBtn} ${styles.explore}`}>
                            EXPLORE
                        </button>
                    </a>

                    <a href="/">
                        <button type="button" className={`${styles.navBtn} ${styles.back}`}>
                            BACK HOME
                        </button>
                    </a>
                </div>
            </nav>

            <section className={styles.placeHero}>
                <p className={styles.eyebrow}>{activeContent.eyebrow}</p>
                <h1>{activeContent.title}</h1>
                <p>{activeContent.description}</p>
            </section>

            <section className={styles.storySection}>
                {activeContent.sections.map((section, index) => (
                    <article key={`${activeLocation}-${section.title}`} className={styles.storyCard}>
                        <div className={styles.imageCollage}>
                            {section.images.map((image) => (
                                <div key={image} className={styles.imageTile}>
                                    <img src={image} alt={section.title} />
                                </div>
                            ))}
                        </div>

                        <div className={styles.storyCopy}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <h2>{section.title}</h2>
                            <p>{section.text}</p>
                        </div>
                    </article>
                ))}
            </section>

            {activeLocation === "carlsbad" && (
                <section className={styles.travelInfoSection}>
                    <h2>Plan Your Visit</h2>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <h3>Trip Duration</h3>
                            <ul>
                                <li>Entrance to bottom: ~1–1.5 hours</li>
                                <li>Big Room exploration: ~1–2 hours</li>
                                <li>Total time: ~2.5–4 hours</li>
                                <li>Elevator ride: ~1 minute</li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Elevator Wait</h3>
                            <ul>
                                <li>Early morning: 0–10 mins</li>
                                <li>Midday: 15–40 mins</li>
                                <li>Peak days: up to 45+ mins</li>
                                <li>Best: go early or late</li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Best Time</h3>
                            <ul>
                                <li>Start: 8:30 AM – 10:00 AM</li>
                                <li>Less crowded + better pace</li>
                                <li>Late entry is quieter but shorter</li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Timings</h3>
                            <ul>
                                <li>Last entry: ~2:30–3:30 PM</li>
                                <li>Closing: ~4:30–5:30 PM</li>
                                <li>Check same-day schedule</li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>What to Carry</h3>
                            <ul>
                                <li>Water bottle</li>
                                <li>Comfortable shoes</li>
                                <li>Light jacket around 56°F</li>
                                <li>Phone / camera</li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Precautions</h3>
                            <ul>
                                <li>Stay on marked paths</li>
                                <li>Watch slippery areas</li>
                                <li>No touching formations</li>
                                <li>Take breaks if needed</li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {activeLocation === "sandia" && (
                <section className={styles.travelInfoSection}>
                    <h2>Plan Your Visit</h2>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <h3>Best Time</h3>
                            <ul>
                                <li>Morning to early afternoon for clear views</li>
                                <li>Sunset is beautiful but can get busier</li>
                                <li>Check tram schedule before driving there</li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>What to Carry</h3>
                            <ul>
                                <li>Warm jacket or hoodie</li>
                                <li>Sunglasses</li>
                                <li>Water bottle</li>
                                <li>Comfortable shoes</li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Precautions</h3>
                            <ul>
                                <li>It can be much colder at the top</li>
                                <li>Wind can be strong near viewpoints</li>
                                <li>Book/check tram availability ahead</li>
                                <li>Give yourself enough time before closing</li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}