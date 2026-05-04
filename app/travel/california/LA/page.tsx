import Image from "next/image";
import styles from "../../travelLocation.module.css";

const laPhotos = [
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
];

export default function LosAngelesPage() {
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
                    <a href="#beach" className={styles.navLink}>
                        Beach
                    </a>
                    <a href="#food" className={styles.navLink}>
                        Food
                    </a>
                    <a href="#gallery" className={styles.navLink}>
                        Gallery
                    </a>
                </div>

                <div className={styles.navRight}>
                    <a href="/travel-diaries" className={`${styles.navBtn} ${styles.back}`}>
                        BACK HOME
                    </a>
                </div>
            </nav>

            <section className={styles.placeHero} id="city">
                <p className={styles.eyebrow}>California</p>
                <h1>Los Angeles</h1>
                <p>
                    Sunlight, palm trees, beach roads, good food, open skies,
                    and a relaxed city vibe that feels warm and effortless.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="beach">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/la1.jpeg" alt="LA beach view" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/la2.jpeg" alt="Los Angeles coastline" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>BEACH LIFE</span>
                        <h2>Sun, sand, and that easy coastal mood.</h2>
                        <p>
                            The beach felt like the center of everything. Long walks,
                            open space, and that calm LA energy made it easy to slow down
                            and just enjoy the moment.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="food">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/la3.jpeg" alt="LA restaurant" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/la4.jpeg" alt="Food in Los Angeles" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>RESTAURANTS</span>
                        <h2>Good food, easy stops, no rush.</h2>
                        <p>
                            Food in LA felt casual but really good. Between beach breaks and
                            city drives, the restaurant stops made the whole trip feel more
                            laid-back and complete.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="views">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/la5.jpeg" alt="LA sunset view" width={900} height={650} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/California/la6.jpeg" alt="Los Angeles city and coast" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>CITY & SKY</span>
                        <h2>Warm light, soft skies, and open views.</h2>
                        <p>
                            LA had this mix of city and space. The sunsets, the wide roads,
                            and the sky made everything feel lighter and more relaxed than
                            most cities.
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
                            <li>Sunset views</li>
                            <li>Restaurant stops</li>
                            <li>Coastal drives</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            <li>Warm and relaxed</li>
                            <li>Coastal city energy</li>
                            <li>Easygoing and light</li>
                            <li>Simple and sunny</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, for the weather</li>
                            <li>More beach time next trip</li>
                            <li>Explore more neighborhoods</li>
                            <li>Perfect slow getaway</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>Los Angeles gallery</h2>

                <div className={styles.galleryGrid}>
                    {laPhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`Los Angeles travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>Los Angeles in motion</h2>

                <video
                    src="/travel/California/la.mp4"
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