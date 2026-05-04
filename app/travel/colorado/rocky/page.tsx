import Image from "next/image";
import styles from "../../travelLocation.module.css";

const rockyPhotos = [
    "/travel/Colorado/rocky1.jpeg",
    "/travel/Colorado/rocky2.jpeg",
    "/travel/Colorado/rocky3.jpeg",
    "/travel/Colorado/rocky4.jpeg",
    "/travel/Colorado/rocky5.jpeg",
    "/travel/Colorado/rocky6.jpeg",
    "/travel/Colorado/rocky7.jpeg",
    "/travel/Colorado/rocky8.jpeg",
    "/travel/Colorado/rocky9.jpeg",
    "/travel/Colorado/rocky10.jpeg",
];

export default function RockyMountainPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a href="/travel-diaries" className={styles.navBrand}>
                        Colorado
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a href="#mountains" className={`${styles.navLink} ${styles.active}`}>
                        Mountains
                    </a>
                    <a href="#trail" className={styles.navLink}>
                        Trail
                    </a>
                    <a href="#views" className={styles.navLink}>
                        Views
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

            <section className={styles.placeHero} id="mountains">
                <p className={styles.eyebrow}>Colorado</p>
                <h1>Rocky Mountain National Park</h1>
                <p>
                    Open roads, sharp mountain air, quiet trails, blue skies, lake views,
                    and that peaceful feeling only the Rockies can give.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="trail">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Colorado/rocky1.jpeg" alt="Rocky Mountain trail" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Colorado/rocky2.jpeg" alt="Rocky Mountain trees and path" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>THE TRAIL</span>
                        <h2>Quiet paths, fresh air, and slow mountain miles.</h2>
                        <p>
                            The trail felt calm from the beginning. It was one of those walks
                            where the views kept changing slowly, and every turn made the day
                            feel more peaceful.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="views">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Colorado/rocky3.jpeg" alt="Rocky Mountain scenic view" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Colorado/rocky4.jpeg" alt="Colorado mountain landscape" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>MOUNTAIN VIEWS</span>
                        <h2>The kind of view that makes you stop talking.</h2>
                        <p>
                            The mountains looked endless. Between the open sky, the stillness,
                            and the scale of everything around, this part of the trip felt
                            simple, grounding, and beautiful.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="lake">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Colorado/rocky5.jpeg" alt="Rocky Mountain lake view" width={900} height={650} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/Colorado/rocky6.jpeg" alt="Colorado nature view" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>LAKESIDE CALM</span>
                        <h2>A soft pause inside a huge landscape.</h2>
                        <p>
                            The lake views added a quieter mood to the day. After the roads,
                            trees, and mountain stretches, this stop felt like a calm breath
                            before heading back.
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
                            <li>Mountain road views</li>
                            <li>Peaceful trail walks</li>
                            <li>Lake and forest stops</li>
                            <li>Fresh Colorado air</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            <li>Calm and scenic</li>
                            <li>Nature-girl coded</li>
                            <li>Peaceful but adventurous</li>
                            <li>Slow, open, and refreshing</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, absolutely</li>
                            <li>Best for a slow nature day</li>
                            <li>Would start early next time</li>
                            <li>More trail time if possible</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>Rocky Mountain gallery</h2>

                <div className={styles.galleryGrid}>
                    {rockyPhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`Rocky Mountain travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>Rocky Mountain in motion</h2>

                <video
                    src="/travel/Colorado/rocky.mp4"
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