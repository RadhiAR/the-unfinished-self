import Image from "next/image";
import styles from "../../travelLocation.module.css";

const chicagoPhotos = [
    "/travel/Illinois/chic2.jpeg",
    "/travel/Illinois/chic3.jpeg",
    "/travel/Illinois/chic4.jpeg",
    "/travel/Illinois/chic5.jpeg",
    "/travel/Illinois/chic6.jpeg",
    "/travel/Illinois/chic7.jpeg",
    "/travel/Illinois/chic8.jpeg",
    "/travel/Illinois/chic9.jpeg",
    "/travel/Illinois/chic10.jpeg",
    "/travel/Illinois/chic11.jpeg",
    "/travel/Illinois/chic12.jpeg",
    "/travel/Illinois/chic13.jpeg",
    "/travel/Illinois/chic14.jpeg",
    "/travel/Illinois/chic15.jpeg",
];

export default function ChicagoPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a href="/travel-diaries" className={styles.navBrand}>
                        Illinois
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a href="#city" className={`${styles.navLink} ${styles.active}`}>
                        City
                    </a>
                    <a href="#winter-lights" className={styles.navLink}>
                        Winter Lights
                    </a>
                    <a href="#shedd" className={styles.navLink}>
                        Shedd Aquarium
                    </a>
                    <a href="#skyline" className={styles.navLink}>
                        Skyline
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

            <section className={styles.placeHero} id="city">
                <p className={styles.eyebrow}>Illinois</p>
                <h1>Chicago</h1>
                <p>
                    Cold air, city lights, foggy streets, warm coffee breaks,
                    holiday corners, aquarium calm, and skyline views that made the
                    whole trip feel cinematic.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="winter-lights">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/chicago/chic2.jpeg" alt="Chicago holiday lights" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/chicago/chic3.jpeg" alt="Chicago glowing flowers" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>WINTER LIGHTS</span>
                        <h2>Zoo lights, glowing corners, and Christmas energy.</h2>
                        <p>
                            The night lights made Chicago feel softer. Between Santa displays,
                            glowing flowers, holiday setups, and walking around in the cold,
                            this part of the trip had an easy festive mood.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="shedd">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/chicago/chic12.jpeg" alt="Shedd Aquarium Chicago" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/chicago/chic13.jpeg" alt="Chicago aquarium view" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>SHEDD AQUARIUM</span>
                        <h2>A calm stop in the middle of the city.</h2>
                        <p>
                            Shedd Aquarium was a slower break from the city rush. It gave the
                            day an indoor pause, easy photo moments, and a different kind of
                            calm compared to the skyline and street walks.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="skyline">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/chicago/chic8.jpeg" alt="Foggy Chicago skyline" width={900} height={650} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/chicago/chic11.jpeg" alt="Chicago skyline observation deck" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>SKYLINE</span>
                        <h2>The view made the cold worth it.</h2>
                        <p>
                            The skyline was the part that really felt like Chicago. Between
                            the observation deck, glass views, and fog around the buildings,
                            the city looked huge, moody, and beautiful.
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
                            <li>Foggy downtown streets</li>
                            <li>Holiday light displays</li>
                            <li>Shedd Aquarium</li>
                            <li>Skyline views</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            <li>Cold and cozy</li>
                            <li>Slightly dramatic</li>
                            <li>Winter city-girl coded</li>
                            <li>Calm but playful</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, definitely</li>
                            <li>Winter for lights and fog</li>
                            <li>Summer for lake views</li>
                            <li>More cafés next time</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>Chicago gallery</h2>

                <div className={styles.galleryGrid}>
                    {chicagoPhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`Chicago travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>Chicago in motion</h2>

                <video
                    src="/travel/chicago/chic1.mp4"
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