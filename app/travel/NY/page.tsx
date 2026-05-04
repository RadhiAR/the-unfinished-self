import Image from "next/image";
import styles from "../travelLocation.module.css";

const nyPhotos = [
    "/travel/NY/ny1.jpeg",
    "/travel/NY/ny2.jpeg",
    "/travel/NY/ny3.jpeg",
    "/travel/NY/ny4.jpeg",
    "/travel/NY/ny5.jpeg",
    "/travel/NY/ny6.jpeg",
    "/travel/NY/ny7.jpeg",
    "/travel/NY/ny8.jpeg",
    "/travel/NY/ny9.jpeg",
    "/travel/NY/ny10.jpeg",
    "/travel/NY/ny11.jpeg",
    "/travel/NY/ny12.jpeg",
];

export default function NewYorkPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a href="/travel-diaries" className={styles.navBrand}>
                        New York
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a href="#city" className={`${styles.navLink} ${styles.active}`}>
                        City
                    </a>
                    <a href="#liberty" className={styles.navLink}>
                        Liberty
                    </a>
                    <a href="#vessel" className={styles.navLink}>
                        Vessel
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
                <p className={styles.eyebrow}>New York</p>
                <h1>New York City</h1>
                <p>
                    Tall buildings, sharp city lines, late nights, movie-like moments,
                    skyline energy, and that fast, slightly dramatic New York feeling.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="buildings">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny1.jpeg" alt="NYC skyline buildings" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny2.jpeg" alt="New York street view" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>CITY LINES</span>
                        <h2>Buildings that make everything feel bigger.</h2>
                        <p>
                            The buildings were the first thing that stood out. Every street
                            felt packed with height, movement, and that typical New York
                            intensity you see in movies.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="liberty">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny3.jpeg" alt="Statue of Liberty" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny4.jpeg" alt="Liberty island view" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>STATUE OF LIBERTY</span>
                        <h2>One of those “had to see it” moments.</h2>
                        <p>
                            Seeing the Statue of Liberty in real life felt different from
                            pictures. It’s simple, iconic, and gives that classic New York
                            moment without trying too hard.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="vessel">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny5.jpeg" alt="The Vessel NYC" width={900} height={650} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny6.jpeg" alt="Hudson Yards Vessel view" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>VESSEL</span>
                        <h2>Modern structure, clean lines, different vibe.</h2>
                        <p>
                            The Vessel added a completely different feel to the trip. It was
                            modern, structured, and stood out against the usual city
                            architecture.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="bond">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny7.jpeg" alt="NYC cinematic view" width={700} height={900} />
                        </div>
                        <div className={styles.imageTile}>
                            <Image src="/travel/NY/ny8.jpeg" alt="Night city lights NYC" width={700} height={900} />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>CINEMATIC NYC</span>
                        <h2>Low-key felt like a James Bond scene.</h2>
                        <p>
                            Some streets and views had that cinematic feel. Clean lines,
                            sharp lighting, and a slightly dramatic mood that made the whole
                            city feel like a movie set.
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
                            <li>Skyline views</li>
                            <li>Statue of Liberty</li>
                            <li>The Vessel</li>
                            <li>Night city walks</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            <li>Fast and cinematic</li>
                            <li>Slightly dramatic</li>
                            <li>Big city energy</li>
                            <li>Movie-like moments</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, for the energy</li>
                            <li>More rooftop views next time</li>
                            <li>Explore more neighborhoods</li>
                            <li>Night photography again</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>New York gallery</h2>

                <div className={styles.galleryGrid}>
                    {nyPhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`New York travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <h2>New York in motion</h2>

                <video
                    src="/travel/NY/ny.mp4"
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