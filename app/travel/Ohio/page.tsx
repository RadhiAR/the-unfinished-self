"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../travelLocation.module.css";

type OhioKey = "cincinnati" | "dayton";

type StorySection = {
    label: string;
    title: string;
    images: string[];
    text: string;
};

const ohioContent: Record<
    OhioKey,
    {
        navLabel: string;
        title: string;
        description: string;
        photos: string[];
        video: string;
        sections: StorySection[];
    }
> = {
    cincinnati: {
        navLabel: "Cincinnati",
        title: "University of Cincinnati",
        description:
            "The college chapter — campus walks, late-night assignments, new friendships, coffee-fueled deadlines, big dreams, tiny breakdowns, and the place that turned survival mode into a whole era.",
        photos: [
            "/travel/Ohio/cincinnati1.jpeg",
            "/travel/Ohio/cincinnati2.jpeg",
            "/travel/Ohio/cincinnati3.jpeg",
            "/travel/Ohio/cincinnati4.jpeg",
            "/travel/Ohio/cincinnati5.jpeg",
            "/travel/Ohio/cincinnati6.jpeg",
            "/travel/Ohio/cincinnati7.jpeg",
            "/travel/Ohio/cincinnati8.jpeg",
        ],
        video: "/travel/Ohio/cincinnati.mp4",
        sections: [
            {
                label: "COLLEGE ERA",
                title: "A campus, a dream, and a lot of character development.",
                images: [
                    "/travel/Ohio/cincinnati1.jpeg",
                    "/travel/Ohio/cincinnati2.jpeg",
                ],
                text:
                    "Cincinnati was not just a city stop. It was the college chapter — the place where everything felt new, confusing, exciting, and slightly dramatic all at once. The University of Cincinnati became part classroom, part comfort zone, part chaos, and part beginning.",
            },
            {
                label: "UNIVERSITY OF CINCINNATI",
                title: "Assignments, ambition, and walking like you had life figured out.",
                images: [
                    "/travel/Ohio/cincinnati3.jpeg",
                    "/travel/Ohio/cincinnati4.jpeg",
                ],
                text:
                    "Campus life had its own rhythm. Classes, projects, group work, coffee runs, cold walks, deadlines, and those random moments where the whole future felt both scary and possible. UC became the place where discipline, independence, and dreams all started getting real.",
            },
            {
                label: "STUDENT LIFE",
                title: "Soft chaos, hard lessons, and memories that stayed.",
                images: [
                    "/travel/Ohio/cincinnati5.jpeg",
                    "/travel/Ohio/cincinnati6.jpeg",
                ],
                text:
                    "Some days were productive. Some days were messy. Some days were just about getting through one more assignment, one more exam, one more week. But that is what made it special — Cincinnati holds the version of me that was still figuring things out but refused to stop moving.",
            },
            {
                label: "BEARCAT ENERGY",
                title: "A little crazy, a little emotional, fully unforgettable.",
                images: [
                    "/travel/Ohio/cincinnati7.jpeg",
                    "/travel/Ohio/cincinnati8.jpeg",
                ],
                text:
                    "The University of Cincinnati chapter deserves its own page because it was not just travel. It was growth. It was independence. It was becoming louder, stronger, softer, and more sure of myself in ways I did not fully understand back then.",
            },
        ],
    },

    dayton: {
        navLabel: "Dayton",
        title: "Dayton Aviation Museum",
        description:
            "A calm Ohio day filled with aircraft, aviation history, museum halls, old engines, giant planes, and the quiet wonder of standing next to machines that once touched the sky.",
        photos: [
            "/travel/Ohio/dayton1.jpeg",
            "/travel/Ohio/dayton2.jpeg",
            "/travel/Ohio/dayton3.jpeg",
            "/travel/Ohio/dayton4.jpeg",
            "/travel/Ohio/dayton5.jpeg",
            "/travel/Ohio/dayton6.jpeg",
            "/travel/Ohio/dayton7.jpeg",
            "/travel/Ohio/dayton8.jpeg",
        ],
        video: "/travel/Ohio/dayton.mp4",
        sections: [
            {
                label: "AVIATION MUSEUM",
                title: "Planes, history, and a surprisingly peaceful museum day.",
                images: ["/travel/Ohio/dayton1.jpeg", "/travel/Ohio/dayton2.jpeg"],
                text:
                    "Dayton was a different kind of stop. The aviation museum had that quiet, curious energy — rows of aircraft, huge hangars, stories from different eras, and the feeling that every plane had lived a full life before becoming part of the museum.",
            },
            {
                label: "AIRCRAFT HALLS",
                title: "Standing next to machines that made history.",
                images: ["/travel/Ohio/dayton3.jpeg", "/travel/Ohio/dayton4.jpeg"],
                text:
                    "The scale of the aircraft was the best part. Some were massive, some were sleek, and some looked like they belonged to another time entirely. Walking through the halls felt like moving through different chapters of aviation history.",
            },
            {
                label: "MUSEUM MOOD",
                title: "Slow, curious, and full of little details.",
                images: ["/travel/Ohio/dayton5.jpeg", "/travel/Ohio/dayton6.jpeg"],
                text:
                    "It was not a rushed place. The museum worked best slowly — reading small details, looking at engines and wings, stopping for photos, and realizing how much design, risk, and imagination went into every aircraft.",
            },
            {
                label: "DAYTON MEMORY",
                title: "A simple trip that felt unexpectedly meaningful.",
                images: ["/travel/Ohio/dayton7.jpeg", "/travel/Ohio/dayton8.jpeg"],
                text:
                    "Dayton became one of those quiet memories that is easy to underestimate. It was calm, interesting, and different from the usual city or beach trip — a good reminder that travel does not always need noise to stay with you.",
            },
        ],
    },
};

export default function OhioPage() {
    const [activePlace, setActivePlace] = useState<OhioKey>("cincinnati");

    const navRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    const activeContent = ohioContent[activePlace];

    useEffect(() => {
        const nav = navRef.current;
        const activeEl = itemRefs.current[activePlace];

        if (nav && activeEl) {
            const navRect = nav.getBoundingClientRect();
            const elRect = activeEl.getBoundingClientRect();

            const offset =
                elRect.left - navRect.left - navRect.width / 2 + elRect.width / 2;

            nav.scrollBy({
                left: offset,
                behavior: "smooth",
            });
        }
    }, [activePlace]);

    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <span className={styles.navBrand}>Ohio</span>
                </div>

                <div className={styles.navCenter} ref={navRef}>
                    {Object.entries(ohioContent).map(([key, place]) => (
                        <button
                            key={key}
                            ref={(el) => {
                                itemRefs.current[key] = el;
                            }}
                            type="button"
                            className={`${styles.navLink} ${activePlace === key ? styles.active : ""
                                }`}
                            onClick={() => setActivePlace(key as OhioKey)}
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
                <p className={styles.eyebrow}>Ohio</p>
                <h1>{activeContent.title}</h1>
                <p>{activeContent.description}</p>
            </section>

            <section className={styles.storySection}>
                {activeContent.sections.map((section) => (
                    <article key={section.title} className={styles.storyCard}>
                        <div className={styles.imageCollage}>
                            {section.images.map((image) => (
                                <div key={image} className={styles.imageTile}>
                                    <Image
                                        src={image}
                                        alt={section.title}
                                        width={700}
                                        height={900}
                                    />
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

            <section className={styles.travelInfoSection}>
                <h2>Quick notes from this chapter</h2>

                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>Best moments</h3>
                        <ul>
                            {activePlace === "cincinnati" ? (
                                <>
                                    <li>University of Cincinnati campus memories</li>
                                    <li>College-life chaos and growth</li>
                                    <li>Late-night study energy</li>
                                    <li>That “new life” feeling</li>
                                </>
                            ) : (
                                <>
                                    <li>Aviation museum halls</li>
                                    <li>Historic aircraft displays</li>
                                    <li>Quiet museum walks</li>
                                    <li>Seeing planes up close</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            {activePlace === "cincinnati" ? (
                                <>
                                    <li>Crazy college chapter</li>
                                    <li>Emotional and ambitious</li>
                                    <li>Soft chaos with purpose</li>
                                    <li>Bearcat energy</li>
                                </>
                            ) : (
                                <>
                                    <li>Calm and curious</li>
                                    <li>Historic and thoughtful</li>
                                    <li>Slow museum-day energy</li>
                                    <li>Unexpectedly peaceful</li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            {activePlace === "cincinnati" ? (
                                <>
                                    <li>Yes, for nostalgia</li>
                                    <li>Would revisit campus</li>
                                    <li>Perfect memory chapter</li>
                                    <li>Always part of the story</li>
                                </>
                            ) : (
                                <>
                                    <li>Yes, for a calm day trip</li>
                                    <li>Good for aviation lovers</li>
                                    <li>Great museum photo stop</li>
                                    <li>Worth taking time slowly</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
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