import Image from "next/image";
import styles from "../travelLocation.module.css";

const utahPhotos = [
    "/travel/Utah/utah1.jpeg",
    "/travel/Utah/utah2.jpeg",
    "/travel/Utah/utah3.jpeg",
    "/travel/Utah/utah4.jpeg",
    "/travel/Utah/utah5.jpeg",
    "/travel/Utah/utah6.jpeg",
    "/travel/Utah/utah7.jpeg",
    "/travel/Utah/utah8.jpeg",
    "/travel/Utah/utah9.jpeg",
    "/travel/Utah/utah10.jpeg",
];

export default function UtahPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a href="/travel-diaries" className={styles.navBrand}>
                        Utah
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a href="#monument-valley" className={`${styles.navLink} ${styles.active}`}>
                        Monument Valley
                    </a>
                    <a href="#sunset" className={styles.navLink}>
                        Sunset
                    </a>
                    <a href="#desert" className={styles.navLink}>
                        Desert
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

            <section className={styles.placeHero} id="monument-valley">
                <p className={styles.eyebrow}>Utah</p>
                <h1>Monument Valley</h1>
                <p>
                    Red desert roads, quiet open land, huge sandstone formations, warm sunset
                    light, and a landscape that felt still, cinematic, and unforgettable.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="desert">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Utah/utah1.jpeg" alt="Monument Valley desert road" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Utah/utah2.jpeg" alt="Monument Valley red rocks" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>DESERT ROADS</span>
                        <h2>Red dust, open roads, and silence around everything.</h2>
                        <p>
                            Monument Valley felt different from every other stop. The roads,
                            the red land, and the massive formations made the place feel calm
                            but powerful at the same time.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="sunset">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Utah/utah3.jpeg" alt="Monument Valley sunset" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Utah/utah4.jpeg" alt="Utah desert sunset light" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>SUNSET</span>
                        <h2>The sunset made the whole desert glow.</h2>
                        <p>
                            Sunset was the best part. The light turned warm over the rocks,
                            the shadows stretched across the desert, and everything felt quiet
                            in the most beautiful way.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="views">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Utah/utah5.jpeg" alt="Monument Valley sandstone formations" width={900} height={650} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Utah/utah6.jpeg" alt="Utah Monument Valley view" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>MONUMENT VIEWS</span>
                        <h2>A landscape that looked almost unreal.</h2>
                        <p>
                            The sandstone formations made the whole place feel cinematic.
                            They stood still against the sky, and every view looked like it
                            belonged in a movie scene.
                        </p>
                    </div>
                </article>
            </section>

            <section className={styles.travelInfoSection}>
                <h2>Quick notes from this trip</h2>

                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>Best moments</h3>
                        <ul>
                            <li>Sunset over the red rocks</li>
                            <li>Long desert roads</li>
                            <li>Sandstone formations</li>
                            <li>Quiet open views</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            <li>Cinematic and still</li>
                            <li>Warm desert energy</li>
                            <li>Peaceful but dramatic</li>
                            <li>Simple and unforgettable</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, especially for sunset</li>
                            <li>Would stay longer next time</li>
                            <li>Perfect for photos</li>
                            <li>Best as a slow scenic stop</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>Monument Valley gallery</h2>

                <div className={styles.galleryGrid}>
                    {utahPhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`Monument Valley travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>Monument Valley in motion</h2>

                <video
                    src="/travel/Utah/utah.mp4"
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