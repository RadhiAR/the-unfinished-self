import Image from "next/image";
import styles from "../travelLocation.module.css";

const seattlePhotos = [
    "/travel/Washington/seattle1.jpeg",
    "/travel/Washington/seattle2.jpeg",
    "/travel/Washington/seattle3.jpeg",
    "/travel/Washington/seattle4.jpeg",
    "/travel/Washington/seattle5.jpeg",
    "/travel/Washington/seattle6.jpeg",
    "/travel/Washington/seattle7.jpeg",
    "/travel/Washington/seattle8.jpeg",
    "/travel/Washington/seattle9.jpeg",
    "/travel/Washington/seattle10.jpeg",
    "/travel/Washington/seattle11.jpeg",
    "/travel/Washington/seattle12.jpeg",
];

export default function WashingtonPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a href="/travel-diaries" className={styles.navBrand}>
                        Washington
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a href="#seattle" className={`${styles.navLink} ${styles.active}`}>
                        Seattle
                    </a>
                    <a href="#amazon" className={styles.navLink}>
                        Amazon
                    </a>
                    <a href="#rainier" className={styles.navLink}>
                        Mount Rainier
                    </a>
                    <a href="#bars" className={styles.navLink}>
                        Bars
                    </a>
                    <a href="#gallery" className={styles.navLink}>
                        Gallery
                    </a>
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

            <section className={styles.placeHero} id="seattle">
                <p className={styles.eyebrow}>Washington</p>
                <h1>Seattle</h1>
                <p>
                    Nine months of work, rain, coffee, Amazon office days, city walks,
                    Mount Rainier views, bar nights, and a Seattle chapter that felt grown-up,
                    moody, and unforgettable.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="amazon">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle1.jpeg" alt="Amazon office Seattle" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle2.jpeg" alt="Seattle office life" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>AMAZON ERA</span>
                        <h2>Nine months of work, learning, and city life.</h2>
                        <p>
                            Seattle was not just a trip. It was a work chapter. Living there
                            while working at Amazon made the city feel tied to growth,
                            independence, office routines, and that version of life where
                            everything felt fast, serious, and new.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="rainier">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle3.jpeg" alt="Mount Rainier view" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle4.jpeg" alt="Mount Rainier Washington" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>MOUNT RAINIER</span>
                        <h2>The kind of view that makes the whole state feel magical.</h2>
                        <p>
                            Mount Rainier gave Washington a completely different kind of beauty.
                            It felt calm, huge, and almost unreal. After city days and work
                            routines, the mountain views were the perfect reminder that Seattle
                            has nature sitting right outside the noise.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="bars">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle5.jpeg" alt="Seattle bar night" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle6.jpeg" alt="Seattle nightlife" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>BARS & NIGHTS</span>
                        <h2>Rainy nights, good drinks, and soft city chaos.</h2>
                        <p>
                            The bars added a lighter side to the Seattle chapter. After work
                            and regular routines, those nights felt like small breaks — drinks,
                            conversations, city lights, and that cozy rainy mood Seattle does
                            so well.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="culture">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle7.jpeg" alt="Seattle city culture" width={900} height={650} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Washington/seattle8.jpeg" alt="Seattle coffee and city vibe" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>SEATTLE CULTURE</span>
                        <h2>Coffee, rain, tech, music, and moody charm.</h2>
                        <p>
                            Seattle has its own personality. It feels thoughtful, slightly
                            quiet, creative, and tech-heavy without losing its softness. The
                            rain, coffee shops, waterfront corners, and slower city rhythm made
                            it feel very different from the rest of the country.
                        </p>
                    </div>
                </article>
            </section>

            <section className={styles.travelInfoSection}>
                <h2>Quick notes from this chapter</h2>

                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>Best moments</h3>
                        <ul>
                            <li>Working at Amazon in Seattle</li>
                            <li>Mount Rainier views</li>
                            <li>Rainy bar nights</li>
                            <li>Coffee and city walks</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Chapter mood</h3>
                        <ul>
                            <li>Grown-up and independent</li>
                            <li>Moody but beautiful</li>
                            <li>Tech city energy</li>
                            <li>Rain, coffee, and ambition</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, for nostalgia</li>
                            <li>More Mount Rainier time</li>
                            <li>More cozy cafés</li>
                            <li>Always part of the story</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>Seattle gallery</h2>

                <div className={styles.galleryGrid}>
                    {seattlePhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`Seattle travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>Seattle in motion</h2>

                <video
                    src="/travel/Washington/seattle.mp4"
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