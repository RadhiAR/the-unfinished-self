import Image from "next/image";
import styles from "../../travelLocation.module.css";

const sfPhotos = [
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
];

export default function SanFranciscoPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a href="/travel-diaries" className={styles.navBrand}>
                        California
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a href="#city" className={`${styles.navLink} ${styles.active}`}>
                        City
                    </a>
                    <a href="#coast" className={styles.navLink}>
                        Coast
                    </a>
                    <a href="#food" className={styles.navLink}>
                        Food
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

            <section className={styles.placeHero} id="city">
                <p className={styles.eyebrow}>California</p>
                <h1>San Francisco</h1>
                <p>
                    Coastal air, beach walks, good food, soft fog, ocean views,
                    and a city mood that felt relaxed, fresh, and slightly cinematic.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="coast">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/sf1.jpeg" alt="San Francisco beach view" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/sf2.jpeg" alt="San Francisco coastal walk" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>COASTAL VIBE</span>
                        <h2>Beach air, soft waves, and slow coastal walks.</h2>
                        <p>
                            The coast gave San Francisco a softer mood. The beach, the breeze,
                            and the open water made this part of the trip feel calm without
                            losing that city energy.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="food">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/sf3.jpeg" alt="San Francisco restaurant" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/sf4.jpeg" alt="Food in San Francisco" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>RESTAURANTS</span>
                        <h2>Good food made the city feel warmer.</h2>
                        <p>
                            The restaurant stops added a cozy break between the beach and city
                            moments. It felt easy to slow down, sit for a bit, and enjoy the
                            trip without rushing through everything.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="views">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/sf5.jpeg" alt="San Francisco ocean view" width={900} height={650} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/sf6.jpeg" alt="San Francisco coastal city view" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>OCEAN VIEWS</span>
                        <h2>The city looked better with the ocean beside it.</h2>
                        <p>
                            San Francisco had that mix of city movement and coastal calm.
                            The ocean views, the cloudy light, and the open air made the whole
                            day feel simple, pretty, and refreshing.
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
                            <li>Beach walks</li>
                            <li>Coastal views</li>
                            <li>Restaurant stops</li>
                            <li>Foggy city mood</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            <li>Coastal and relaxed</li>
                            <li>Soft city-girl energy</li>
                            <li>Fresh, breezy, and calm</li>
                            <li>Simple but memorable</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, for the coast</li>
                            <li>More beach time next trip</li>
                            <li>Try more cafés and restaurants</li>
                            <li>Perfect for a slow city day</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>San Francisco gallery</h2>

                <div className={styles.galleryGrid}>
                    {sfPhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`San Francisco travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>San Francisco in motion</h2>

                <video
                    src="/travel/California/sf.mp4"
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