"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../travelLocation.module.css";

type TexasKey =
    | "austin"
    | "houston"
    | "dallas"
    | "galveston"
    | "corpus"
    | "southPadre"
    | "newBraunfels"
    | "sanAntonio";

type StorySection = {
    label: string;
    title: string;
    images: string[];
    text: string;
};

const texasContent: Record<
    TexasKey,
    {
        navLabel: string;
        title: string;
        description: string;
        photos: string[];
        video: string;
        sections: StorySection[];
    }
> = {
    austin: {
        navLabel: "Austin",
        title: "Austin",
        description:
            "Easy city days, lake views, coffee stops, downtown walks, and a relaxed Texas mood that feels familiar and warm.",
        photos: [
            "/travel/Texas/austin1.jpeg",
            "/travel/Texas/austin2.jpeg",
            "/travel/Texas/austin3.jpeg",
            "/travel/Texas/austin4.jpeg",
            "/travel/Texas/austin5.jpeg",
            "/travel/Texas/austin6.jpeg",
        ],
        video: "/travel/Texas/austin.mp4",
        sections: [
            {
                label: "CITY DAYS",
                title: "A familiar city with soft little corners.",
                images: ["/travel/Texas/austin1.jpeg", "/travel/Texas/austin2.jpeg"],
                text:
                    "Austin feels easy to move through. It has city energy, but still leaves room for quiet coffee stops, pretty views, and casual walks.",
            },
            {
                label: "AUSTIN MOOD",
                title: "Relaxed, warm, and a little creative.",
                images: ["/travel/Texas/austin3.jpeg", "/travel/Texas/austin4.jpeg"],
                text:
                    "The city has a casual charm. Between the food, music, lakeside areas, and sunny streets, Austin feels simple but personal.",
            },
        ],
    },

    houston: {
        navLabel: "Houston",
        title: "Houston",
        description:
            "A city stop with NASA, space stories, science corners, and that big Texas energy mixed with something curious and futuristic.",
        photos: [
            "/travel/Texas/houston1.jpeg",
            "/travel/Texas/houston2.jpeg",
            "/travel/Texas/houston3.jpeg",
            "/travel/Texas/houston4.jpeg",
            "/travel/Texas/houston5.jpeg",
            "/travel/Texas/houston6.jpeg",
        ],
        video: "/travel/Texas/houston.mp4",
        sections: [
            {
                label: "NASA",
                title: "A space stop that actually feels special.",
                images: ["/travel/Texas/houston1.jpeg", "/travel/Texas/houston2.jpeg"],
                text:
                    "NASA was the main highlight in Houston. It felt different from a regular city visit because there was history, science, and that quiet excitement of seeing something connected to space.",
            },
            {
                label: "SPACE CENTER",
                title: "Rockets, exhibits, and a curious kind of calm.",
                images: ["/travel/Texas/houston3.jpeg", "/travel/Texas/houston4.jpeg"],
                text:
                    "The space center had a steady, interesting pace. It was easy to walk through, take photos, and feel like the visit had more meaning than just sightseeing.",
            },
        ],
    },

    dallas: {
        navLabel: "Dallas",
        title: "Dallas",
        description:
            "A city day with zoo walks, downtown corners, warm weather, and a clean urban Texas feel.",
        photos: [
            "/travel/Texas/dallas1.jpeg",
            "/travel/Texas/dallas2.jpeg",
            "/travel/Texas/dallas3.jpeg",
            "/travel/Texas/dallas4.jpeg",
            "/travel/Texas/dallas5.jpeg",
            "/travel/Texas/dallas6.jpeg",
        ],
        video: "/travel/Texas/dallas.mp4",
        sections: [
            {
                label: "DALLAS ZOO",
                title: "Animals, walking paths, and a slower city break.",
                images: ["/travel/Texas/dallas1.jpeg", "/travel/Texas/dallas2.jpeg"],
                text:
                    "The zoo made Dallas feel softer for the day. It was a nice change from the usual city mood, with open paths, animals, and easy photo moments.",
            },
            {
                label: "CITY STOP",
                title: "Simple, warm, and easy to explore.",
                images: ["/travel/Texas/dallas3.jpeg", "/travel/Texas/dallas4.jpeg"],
                text:
                    "Dallas has a more polished city feel. It works well for casual exploring, food stops, and short day plans without needing too much structure.",
            },
        ],
    },

    galveston: {
        navLabel: "Galveston",
        title: "Galveston",
        description:
            "Beach air, shells, drinks, sunsets, snorkeling, parasailing, and that classic Texas coast feeling.",
        photos: [
            "/travel/Texas/galveston1.jpeg",
            "/travel/Texas/galveston2.jpeg",
            "/travel/Texas/galveston3.jpeg",
            "/travel/Texas/galveston4.jpeg",
            "/travel/Texas/galveston5.jpeg",
            "/travel/Texas/galveston6.jpeg",
        ],
        video: "/travel/Texas/galveston.mp4",
        sections: [
            {
                label: "BEACH",
                title: "Shells, waves, and slow coastal walks.",
                images: ["/travel/Texas/galveston1.jpeg", "/travel/Texas/galveston2.jpeg"],
                text:
                    "Galveston had that simple beach mood — walking near the water, looking for shells, and letting the day move slowly.",
            },
            {
                label: "SUNSET & DRINKS",
                title: "A soft evening by the coast.",
                images: ["/travel/Texas/galveston3.jpeg", "/travel/Texas/galveston4.jpeg"],
                text:
                    "The sunset made the coast feel warmer. Drinks, beach air, and open water gave the evening an easy vacation mood.",
            },
            {
                label: "WATER FUN",
                title: "Snorkeling, parasailing, and a little adventure.",
                images: ["/travel/Texas/galveston5.jpeg", "/travel/Texas/galveston6.jpeg"],
                text:
                    "The water activities added more energy to the trip. It was still relaxed, but with enough adventure to make the day feel memorable.",
            },
        ],
    },

    corpus: {
        navLabel: "Corpus Christi",
        title: "Corpus Christi",
        description:
            "Beach roads, shells, drinks, sunsets, snorkeling, parasailing, and a breezy coastal escape.",
        photos: [
            "/travel/Texas/corpus1.jpeg",
            "/travel/Texas/corpus2.jpeg",
            "/travel/Texas/corpus3.jpeg",
            "/travel/Texas/corpus4.jpeg",
            "/travel/Texas/corpus5.jpeg",
            "/travel/Texas/corpus6.jpeg",
        ],
        video: "/travel/Texas/corpus.mp4",
        sections: [
            {
                label: "COASTAL DAY",
                title: "Beach, shells, and open sky.",
                images: ["/travel/Texas/corpus1.jpeg", "/travel/Texas/corpus2.jpeg"],
                text:
                    "Corpus Christi felt open and breezy. The beach, shells, and wide coastal views made it a simple and refreshing stop.",
            },
            {
                label: "SUNSET",
                title: "Golden light over the water.",
                images: ["/travel/Texas/corpus3.jpeg", "/travel/Texas/corpus4.jpeg"],
                text:
                    "The sunset gave the whole day a softer ending. It felt calm, pretty, and exactly like a coastal trip should feel.",
            },
            {
                label: "WATER ACTIVITIES",
                title: "A beach trip with a little more movement.",
                images: ["/travel/Texas/corpus5.jpeg", "/travel/Texas/corpus6.jpeg"],
                text:
                    "Snorkeling and parasailing added a fun side to the beach day. It kept the trip from feeling too still while still keeping the coastal mood.",
            },
        ],
    },

    southPadre: {
        navLabel: "South Padre",
        title: "South Padre Island",
        description:
            "Blue water, beach walks, shells, drinks, sunsets, snorkeling, parasailing, and a brighter island-style Texas coast.",
        photos: [
            "/travel/Texas/south-padre1.jpeg",
            "/travel/Texas/south-padre2.jpeg",
            "/travel/Texas/south-padre3.jpeg",
            "/travel/Texas/south-padre4.jpeg",
            "/travel/Texas/south-padre5.jpeg",
            "/travel/Texas/south-padre6.jpeg",
        ],
        video: "/travel/Texas/south-padre.mp4",
        sections: [
            {
                label: "ISLAND BEACH",
                title: "Soft sand, shells, and beach-day energy.",
                images: ["/travel/Texas/south-padre1.jpeg", "/travel/Texas/south-padre2.jpeg"],
                text:
                    "South Padre felt more like a proper beach getaway. The water, sand, and shells made the day feel lighter and more vacation-like.",
            },
            {
                label: "SUNSET & DRINKS",
                title: "A relaxed evening by the water.",
                images: ["/travel/Texas/south-padre3.jpeg", "/travel/Texas/south-padre4.jpeg"],
                text:
                    "The sunset and drinks gave the island a softer mood. It was easy to slow down and enjoy the coast without rushing anything.",
            },
            {
                label: "PARASAILING",
                title: "The adventurous part of the beach day.",
                images: ["/travel/Texas/south-padre5.jpeg", "/travel/Texas/south-padre6.jpeg"],
                text:
                    "Parasailing and snorkeling made South Padre feel more exciting. It had the calm of a beach trip with just enough adventure.",
            },
        ],
    },

    newBraunfels: {
        navLabel: "New Braunfels",
        title: "New Braunfels",
        description:
            "A fun Texas stop with roller coaster energy, summer heat, water-park chaos, and playful weekend memories.",
        photos: [
            "/travel/Texas/new-braunfels1.jpeg",
            "/travel/Texas/new-braunfels2.jpeg",
            "/travel/Texas/new-braunfels3.jpeg",
            "/travel/Texas/new-braunfels4.jpeg",
            "/travel/Texas/new-braunfels5.jpeg",
            "/travel/Texas/new-braunfels6.jpeg",
        ],
        video: "/travel/Texas/new-braunfels.mp4",
        sections: [
            {
                label: "ROLLER COASTER",
                title: "Fast, fun, and a little chaotic.",
                images: ["/travel/Texas/new-braunfels1.jpeg", "/travel/Texas/new-braunfels2.jpeg"],
                text:
                    "New Braunfels felt playful from the start. The roller coaster energy made the day feel less like sightseeing and more like a fun break.",
            },
            {
                label: "WEEKEND FUN",
                title: "A place made for easy summer plans.",
                images: ["/travel/Texas/new-braunfels3.jpeg", "/travel/Texas/new-braunfels4.jpeg"],
                text:
                    "It has that simple weekend-trip feeling — warm weather, rides, water, noise, and the kind of chaos that makes the day memorable.",
            },
        ],
    },

    sanAntonio: {
        navLabel: "San Antonio",
        title: "San Antonio",
        description:
            "River Walk evenings, historic streets, warm lights, food stops, and a slower city mood with classic Texas charm.",
        photos: [
            "/travel/Texas/san-antonio1.jpeg",
            "/travel/Texas/san-antonio2.jpeg",
            "/travel/Texas/san-antonio3.jpeg",
            "/travel/Texas/san-antonio4.jpeg",
            "/travel/Texas/san-antonio5.jpeg",
            "/travel/Texas/san-antonio6.jpeg",
        ],
        video: "/travel/Texas/san-antonio.mp4",
        sections: [
            {
                label: "RIVER WALK",
                title: "Water, lights, and a soft evening mood.",
                images: ["/travel/Texas/san-antonio1.jpeg", "/travel/Texas/san-antonio2.jpeg"],
                text:
                    "The River Walk gives San Antonio its charm. The water, lights, restaurants, and walking paths make it feel relaxed and pretty without needing too much planning.",
            },
            {
                label: "CITY CHARM",
                title: "Historic, warm, and easy to enjoy.",
                images: ["/travel/Texas/san-antonio3.jpeg", "/travel/Texas/san-antonio4.jpeg"],
                text:
                    "San Antonio has a slower city mood. It feels historic, warm, and comfortable, with enough to see without feeling rushed.",
            },
        ],
    },
};

export default function TexasPage() {
    const [activePlace, setActivePlace] = useState<TexasKey>("austin");
    const activeContent = texasContent[activePlace];

    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <span className={styles.navBrand}>Texas</span>
                </div>

                <div className={styles.navCenter}>
                    {Object.entries(texasContent).map(([key, place]) => (
                        <button
                            key={key}
                            type="button"
                            className={`${styles.navLink} ${activePlace === key ? styles.active : ""
                                }`}
                            onClick={() => setActivePlace(key as TexasKey)}
                        >
                            {place.navLabel}
                        </button>
                    ))}
                </div>

                <div className={styles.navRight}>
                    <a href="/travel-diaries" className={`${styles.navBtn} ${styles.back}`}>
                        BACK HOME
                    </a>
                </div>
            </nav>

            <section className={styles.placeHero}>
                <p className={styles.eyebrow}>Texas</p>
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