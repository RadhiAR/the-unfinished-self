import Image from "next/image";
import styles from "../../travelLocation.module.css";

const vegasPhotos = [
    "/travel/Nevada/vegas1.jpeg",
    "/travel/Nevada/vegas2.jpeg",
    "/travel/Nevada/vegas3.jpeg",
    "/travel/Nevada/vegas4.jpeg",
    "/travel/Nevada/vegas5.jpeg",
    "/travel/Nevada/vegas6.jpeg",
];

export default function VegasPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a href="/travel-diaries" className={styles.navBrand}>
                        Nevada
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a href="#vegas" className={`${styles.navLink} ${styles.active}`}>
                        Las Vegas
                    </a>
                    <a href="#strip" className={styles.navLink}>
                        The Strip
                    </a>
                    <a href="#lights" className={styles.navLink}>
                        City Lights
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

            <section className={styles.placeHero} id="vegas">
                <p className={styles.eyebrow}>Nevada</p>

                <h1>Las Vegas</h1>

                <p>
                    Bright lights, long walks, dramatic hotels, late-night streets,
                    desert energy, and a city that feels like it was built for stories.
                </p>
            </section>

            <section className={styles.storySection}>
                <article className={styles.storyCard} id="strip">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image
                                src="/travel/Nevada/vegas1.jpeg"
                                alt="Las Vegas Strip"
                                width={700}
                                height={900}
                            />
                        </div>

                        <div className={styles.imageTile}>
                            <Image
                                src="/travel/Nevada/vegas2.jpeg"
                                alt="Vegas hotel lights"
                                width={700}
                                height={900}
                            />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>THE STRIP</span>

                        <h2>Everything is loud, bright, and slightly unreal.</h2>

                        <p>
                            Vegas has a way of making even a simple walk feel like a scene.
                            The lights, hotels, music, people, and constant movement make the
                            Strip feel alive from every angle.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard} id="lights">
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image
                                src="/travel/Nevada/vegas3.jpeg"
                                alt="Vegas night lights"
                                width={700}
                                height={900}
                            />
                        </div>

                        <div className={styles.imageTile}>
                            <Image
                                src="/travel/Nevada/vegas4.jpeg"
                                alt="Las Vegas city view"
                                width={700}
                                height={900}
                            />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>CITY LIGHTS</span>

                        <h2>The city looks best when the sun goes down.</h2>

                        <p>
                            At night, Vegas becomes its own version of chaos. Neon signs,
                            reflections, restaurants, casino entrances, and crowded sidewalks
                            all turn into one big glowing memory.
                        </p>
                    </div>
                </article>

                <article className={styles.storyCard}>
                    <div className={styles.imageCollage}>
                        <div className={styles.imageTile}>
                            <Image
                                src="/travel/Nevada/vegas5.jpeg"
                                alt="Vegas travel memory"
                                width={700}
                                height={900}
                            />
                        </div>

                        <div className={styles.imageTile}>
                            <Image
                                src="/travel/Nevada/vegas6.jpeg"
                                alt="Vegas trip photo"
                                width={700}
                                height={900}
                            />
                        </div>
                    </div>

                    <div className={styles.storyCopy}>
                        <span>THE MOOD</span>

                        <h2>A little glamorous, a little chaotic, very Vegas.</h2>

                        <p>
                            This was one of those places where the plan matters less than the
                            mood. Walk around, stop for food, take pictures, get distracted,
                            and somehow the city does the rest.
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
                            <li>Walking the Strip</li>
                            <li>Night lights and hotel views</li>
                            <li>Food stops</li>
                            <li>Random photo corners</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Trip mood</h3>
                        <ul>
                            <li>Bright and dramatic</li>
                            <li>Fast-paced</li>
                            <li>Glam but chaotic</li>
                            <li>Late-night city energy</li>
                        </ul>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Would go again?</h3>
                        <ul>
                            <li>Yes, for a short trip</li>
                            <li>Better at night</li>
                            <li>Good for photos</li>
                            <li>Best with comfortable shoes</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection} id="gallery">
                <h2>Vegas gallery</h2>

                <div className={styles.galleryGrid}>
                    {vegasPhotos.map((photo, index) => (
                        <Image
                            key={photo}
                            src={photo}
                            alt={`Las Vegas travel memory ${index + 1}`}
                            width={700}
                            height={900}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}