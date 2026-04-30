import styles from "../../travelLocation.module.css";

const gallery = [
    "/travel/new-mexico/sandia1.jpeg",
    "/travel/new-mexico/sandia2.jpeg",
    "/travel/new-mexico/sandia3.jpeg",
    "/travel/new-mexico/sandia4.jpeg",
    "/travel/new-mexico/sandia5.jpeg",
    "/travel/new-mexico/sandia6.jpeg",
    "/travel/new-mexico/sandia8.jpeg",
];

export default function SandiaPeakMountainsPage() {
    return (
        <main className={styles.locationPage}>
            <nav className={styles.locationNav}>
                <div className={styles.navLeft}>
                    <span className={styles.logo}>✈️</span>
                    <a className={styles.navBrand} href="/travel/new-mexico">
                        New Mexico
                    </a>
                </div>

                <div className={styles.navCenter}>
                    <a className={styles.navLink} href="/travel/new-mexico">
                        Carlsbad
                    </a>
                    <a className={styles.navLink} href="/travel/new-mexico">
                        White Sands
                    </a>
                    <a className={`${styles.navLink} ${styles.active}`} href="/travel/new-mexico/sandia-peak-mountains">
                        Sandia Peak
                    </a>
                </div>

                <div className={styles.navRight}>
                    <a href="/travel">
                        <button type="button" className={`${styles.navBtn} ${styles.explore}`}>
                            EXPLORE
                        </button>
                    </a>

                    <a href="/">
                        <button type="button" className={`${styles.navBtn} ${styles.back}`}>
                            BACK HOME
                        </button>
                    </a>
                </div>
            </nav>

            <section
                className={styles.hero}
                style={{
                    backgroundImage: "url('/travel/new-mexico/sandia1.jpeg')",
                }}
            >
                <div className={styles.heroOverlay}>
                    <p className={styles.eyebrow}>Sandia Peak Tramway</p>
                    <h1>A quiet ride above Albuquerque.</h1>
                    <p>
                        Sandia Peak was one of those stops that felt calm, cold, bright,
                        and unexpectedly beautiful. The tram ride opened up the mountains
                        slowly, and the view from the top made the whole day feel still for
                        a minute.
                    </p>
                </div>
            </section>

            <section className={styles.contentGrid}>
                <div className={styles.standaloneCard}>
                    <h2>Quick notes</h2>
                    <ul>
                        <li>Best for mountain views, tramway photos, and a relaxed stop.</li>
                        <li>The tram ride itself is a major part of the experience.</li>
                        <li>It can feel much colder at the top, even on a sunny day.</li>
                        <li>Go earlier in the day for clearer views and softer crowds.</li>
                        <li>Carry sunglasses, a warm layer, water, and comfortable shoes.</li>
                    </ul>
                </div>

                <div className={styles.standaloneCard}>
                    <h2>The visit</h2>
                    <p>
                        The Sandia Peak Tramway felt simple in the best way. No rushed
                        checklist, no heavy plan, just the ride up, the rocks, the blue sky,
                        and that wide New Mexico view stretching out below.
                    </p>

                    <p>
                        The mountains looked sharp and dramatic from inside the tram, but
                        the top felt softer — benches, sunlight, coffee, wind, and a view
                        that made it easy to slow down.
                    </p>

                    <p>
                        It was not a loud adventure. It was more of a quiet pause in the
                        middle of the trip, the kind of place where you take photos, sit for
                        a bit, and let the view do most of the talking.
                    </p>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <p className={styles.eyebrow}>Photo dump</p>
                <h2>Views from the tram and the peak.</h2>

                <div className={styles.galleryGrid}>
                    {gallery.map((image) => (
                        <img key={image} src={image} alt="Sandia Peak Tramway view" />
                    ))}
                </div>
            </section>

            <section className={styles.tipsSection}>
                <p className={styles.eyebrow}>Trip guide</p>
                <h2>What to know before going</h2>

                <div className={styles.tipsGrid}>
                    <div className={styles.tipCard}>
                        <strong>Best time</strong>
                        Morning to early afternoon is ideal if you want bright views and a
                        calmer start. Sunset is beautiful too, but it can get busier and
                        colder.
                    </div>

                    <div className={styles.tipCard}>
                        <strong>What to carry</strong>
                        Sunglasses, water, lip balm, a jacket, and shoes with grip. The top
                        can feel windy and cooler than the city.
                    </div>

                    <div className={styles.tipCard}>
                        <strong>Precautions</strong>
                        Check tram hours before driving there, avoid going too close to
                        closing time, and be ready for altitude changes if you are sensitive
                        to them.
                    </div>
                </div>
            </section>
        </main>
    );
}