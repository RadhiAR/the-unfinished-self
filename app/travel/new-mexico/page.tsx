import SiteNavbar from "../../components/SiteNavbar";

const storySections = [
    {
        title: "The entrance into another world",
        images: [
            "/travel/new-mexico/carlsbad-11.jpeg",
            "/travel/new-mexico/carlsbad-9.jpeg",

        ],
        text: "Carlsbad Caverns starts above ground, surrounded by the dry New Mexico landscape and wide open sky. The entrance area feels calm at first, but once you begin going down, the space slowly changes. The light fades, the air gets cooler, and the cave starts to feel much larger than expected. It begins as an easy walk, but quickly turns into a deeper underground experience 🌄.",
    },
    {
        title: "Cathedral rooms made by nature",
        images: [
            "/travel/new-mexico/carlsbad-7.jpeg",
            "/travel/new-mexico/carlsbad-1.jpeg",
            "/travel/new-mexico/carlsbad-4.jpeg",
        ],
        text: "The main cavern is expansive, with high ceilings and rock formations in every direction. The lighting helps highlight the shapes without taking away from the natural feel of the cave. Some areas feel open and dramatic, while others are quieter and more enclosed. Moving through it feels less like a typical tourist stop and more like exploring something that has taken thousands of years to form 🪨.",
    },
    {
        title: "Textures that look unreal",
        images: [
            "/travel/new-mexico/carlsbad-2.jpeg",
            "/travel/new-mexico/carlsbad-3.jpeg",
        ],
        text: "What stands out most are the details in the rock. The surfaces have layers, ridges, and soft curves that change depending on the angle and light. Some formations look smooth, while others appear almost like they are dripping or folded. It naturally slows you down, because there is always something new to notice ✨.",
    },
    {
        title: "A quiet personal moment",
        images: ["/travel/new-mexico/carlsbad-6.jpeg"],

        text: "One moment that stayed with me was simply stopping and looking up at the cave ceiling. The scale of the formations and the quiet around made it easy to just pause for a bit. It wasn’t overwhelming, just steady and calm. Some places don’t make you feel small — they make you feel like you’re exactly where you’re meant to be. 🤍",
    },
    {
        title: "The kind of place that stays with you",
        images: [
            "/travel/new-mexico/carlsbad-5.jpeg",
            "/travel/new-mexico/carlsbad-8.jpeg",
            "/travel/new-mexico/carlsbad-10.jpeg",
        ],
        text: "By the end, it felt like more than just a cave visit. The space, the stillness, and the way everything is naturally formed makes it memorable without needing anything extra. Walking back out into the sunlight feels slightly different, like you’ve just come back from somewhere hidden. It’s a place I would easily recommend for a road trip or a quiet adventure ☀️",
    },
];

export default function NewMexicoTravelPage() {
    return (
        <>
            <main className="placePage">
                <nav className="stateNavbar">
                    <div className="navLeft">
                        <span className="logo">✈️</span>
                        <span className="brand">New Mexico</span>
                    </div>

                    <div className="navCenter">
                        <a href="/travel/new-mexico/carlsbad">Carlsbad</a>
                        <a href="/travel/new-mexico/white-sands">White Sands</a>
                        <a href="/travel/new-mexico/sandia">Sandia Peak</a>
                    </div>

                    <div className="navRight">
                        <a href="/travel">
                            <button className="navBtn explore">EXPLORE</button>
                        </a>
                        <a href="/">
                            <button className="navBtn back">BACK HOME</button>
                        </a>
                    </div>
                </nav>

                <section className="placeHero">
                    <p className="eyebrow">New Mexico</p>
                    <h1>Carlsbad Caverns National Park</h1>
                    <p>
                        A desert stop that turned into one of the most magical underground
                        adventures — quiet, ancient, dramatic, and honestly unforgettable 🪨✨
                    </p>
                </section>

                <section className="storySection">
                    {storySections.map((section, index) => (
                        <article key={section.title} className="storyCard">
                            <div className="imageCollage">
                                {section.images.map((image, imageIndex) => (
                                    <div
                                        key={image}
                                        className={`imageTile tile-${imageIndex + 1} ${section.quote ? "quoteTile" : ""
                                            }`}
                                    >
                                        <img src={image} alt={section.title} />

                                        {section.quote && (
                                            <div className="photoQuote">“{section.quote}”</div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="storyCopy">
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h2>{section.title}</h2>
                                <p>{section.text}</p>
                            </div>
                        </article>
                    ))}
                </section>
                <section className="travelInfoSection">
                    <h2>Plan Your Visit</h2>

                    <div className="infoGrid">
                        <div className="infoCard">
                            <h3>Trip Duration</h3>
                            <ul>
                                <li>Entrance to bottom: ~1–1.5 hours</li>
                                <li>Big Room exploration: ~1–2 hours</li>
                                <li>Total time: ~2.5–4 hours</li>
                                <li>Elevator ride: ~1 minute</li>
                            </ul>
                        </div>

                        <div className="infoCard">
                            <h3>Elevator Wait</h3>
                            <ul>
                                <li>Early morning: 0–10 mins</li>
                                <li>Midday: 15–40 mins</li>
                                <li>Peak days: up to 45+ mins</li>
                                <li>Best: go early or late</li>
                            </ul>
                        </div>

                        <div className="infoCard">
                            <h3>Best Time</h3>
                            <ul>
                                <li>Start: 8:30 AM – 10:00 AM</li>
                                <li>Less crowded + better pace</li>
                                <li>Late entry is quieter but shorter</li>
                            </ul>
                        </div>

                        <div className="infoCard">
                            <h3>Timings</h3>
                            <ul>
                                <li>Last entry: ~2:30–3:30 PM</li>
                                <li>Closing: ~4:30–5:30 PM</li>
                                <li>Check same-day schedule</li>
                            </ul>
                        </div>

                        <div className="infoCard">
                            <h3>What to Carry</h3>
                            <ul>
                                <li>Water bottle</li>
                                <li>Comfortable shoes</li>
                                <li>Light jacket (~56°F)</li>
                                <li>Phone / camera</li>
                            </ul>
                        </div>

                        <div className="infoCard">
                            <h3>Precautions</h3>
                            <ul>
                                <li>Stay on marked paths</li>
                                <li>Watch slippery areas</li>
                                <li>No touching formations</li>
                                <li>Take breaks if needed</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
      }

      .placePage {
        min-height: 100vh;
        font-family: Georgia, "Times New Roman", serif;
        background:
          radial-gradient(circle at 12% 10%, rgba(255, 214, 233, 0.85), transparent 34%),
          radial-gradient(circle at 88% 16%, rgba(223, 243, 255, 0.9), transparent 34%),
          linear-gradient(135deg, #fff0f7, #f8fbff);
        padding: 1px 20px 80px;
        overflow-x: hidden;
      }

      .placeHero {
        width: 100%;
        max-width: 1180px;
        margin: 40px auto 0;
        padding: 76px 52px;
        border-radius: 44px;
        text-align: center;
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(241, 196, 214, 0.95);
        box-shadow: 0 30px 80px rgba(184, 91, 133, 0.16);
        backdrop-filter: blur(14px);
      }

      .eyebrow {
        margin: 0 0 18px;
        font-size: 13px;
        letter-spacing: 0.42em;
        text-transform: uppercase;
        color: #b85b85;
        font-weight: 900;
      }

      .placeHero h1 {
        max-width: 1000px;
        margin: 0 auto;
        font-size: clamp(44px, 6vw, 86px);
        line-height: 0.98;
        letter-spacing: -0.06em;
        color: #2f1d26;
      }
      .stateNavbar {
        max-width: 1180px;
        margin: 28px auto 0;
        padding: 18px 28px;
        border-radius: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      
        background: rgba(255, 255, 255, 0.75);
        border: 1px solid rgba(241, 196, 214, 0.9);
        box-shadow: 0 20px 60px rgba(184, 91, 133, 0.15);
        backdrop-filter: blur(12px);
      }
      
      .navLeft {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .logo {
        font-size: 20px;
      }
      
      .brand {
        font-size: 20px;
        font-weight: 700;
        color: #6b3c52;
      }
      
      .navCenter {
        display: flex;
        gap: 28px;
      }
      
      .navCenter a {
        text-decoration: none;
        font-size: 15px;
        color: #6f5361;
        font-weight: 600;
        transition: 0.2s;
      }
      
      .navCenter a:hover {
        color: #b85b85;
      }
      
      .navRight {
        display: flex;
        gap: 12px;
      }
      
      .navBtn {
        padding: 10px 18px;
        border-radius: 999px;
        border: none;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        cursor: pointer;
      }
      
      .navBtn.explore {
        background: linear-gradient(135deg, #c084fc, #f472b6);
        color: white;
      }
      
      .navBtn.back {
        background: linear-gradient(135deg, #f472b6, #60a5fa);
        color: white;
      }
      
      @media (max-width: 900px) {
        .navCenter {
          display: none; /* clean mobile look */
        }
      }

      .placeHero p {
        max-width: 760px;
        margin: 26px auto 0;
        font-size: 18px;
        line-height: 1.75;
        color: #6f5361;
      }

      .storySection {
        width: 100%;
        max-width: 1180px;
        margin: 36px auto 0;
        display: grid;
        gap: 30px;
      }

      .storyCard {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        align-items: center;
        padding: 28px;
        border-radius: 40px;
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(241, 196, 214, 0.95);
        box-shadow: 0 26px 70px rgba(184, 91, 133, 0.13);
        backdrop-filter: blur(12px);
      }

      .storyCard:nth-child(even) .imageCollage {
        order: 2;
      }

      .storyCard:nth-child(even) .storyCopy {
        order: 1;
      }

      .imageCollage {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .imageTile {
        position: relative;
        overflow: hidden;
        min-height: 300px;
        border-radius: 28px;
        background: #fff;
        box-shadow: 0 14px 34px rgba(91, 55, 70, 0.14);
      }

      .imageTile img {
        width: 100%;
        height: 100%;
        min-height: 300px;
        object-fit: cover;
        display: block;
        transition: transform 0.55s ease;
      }

      .imageTile:hover img {
        transform: scale(1.045);
      }

      .imageCollage .imageTile:only-child {
        grid-column: 1 / -1;
        min-height: 520px;
      }

      .imageCollage .imageTile:only-child img {
        min-height: 520px;
      }

      .imageCollage .imageTile:first-child:nth-last-child(3) {
        grid-row: span 2;
      }

      .imageCollage .imageTile:first-child:nth-last-child(3),
      .imageCollage .imageTile:first-child:nth-last-child(3) img {
        min-height: 614px;
      }

      .storyCopy {
        padding: 26px 28px;
      }

      .storyCopy span {
        display: inline-flex;
        margin-bottom: 20px;
        color: #b85b85;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: 0.28em;
      }

      .storyCopy h2 {
        margin: 0 0 20px;
        font-size: clamp(34px, 4vw, 56px);
        line-height: 1.02;
        letter-spacing: -0.045em;
        color: #2f1d26;
      }

      .storyCopy p {
        margin: 0;
        font-size: 18px;
        line-height: 1.9;
        color: #4c3540;
      }

      .travelInfoSection {
        max-width: 1180px;
        margin: 50px auto 0;
        padding: 44px;
        border-radius: 40px;
        background: rgba(255, 255, 255, 0.75);
        border: 1px solid rgba(241, 196, 214, 0.95);
        box-shadow: 0 26px 70px rgba(184, 91, 133, 0.13);
        backdrop-filter: blur(12px);
      }

      .travelInfoSection h2 {
        margin: 0 0 30px;
        font-size: clamp(34px, 4vw, 54px);
        line-height: 1.02;
        letter-spacing: -0.045em;
        color: #2f1d26;
      }

      .infoGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
      }

      .infoCard {
        padding: 22px;
        border-radius: 26px;
        background: rgba(255, 255, 255, 0.88);
        border: 1px solid rgba(241, 196, 214, 0.65);
        box-shadow: 0 14px 34px rgba(91, 55, 70, 0.1);
      }

      .infoCard h3 {
        margin: 0 0 14px;
        font-size: 18px;
        color: #b85b85;
      }

      .infoCard ul {
        margin: 0;
        padding-left: 18px;
      }

      .infoCard li {
        margin-bottom: 7px;
        font-size: 15px;
        line-height: 1.6;
        color: #4c3540;
      }

      @media (max-width: 1000px) {
        .storyCard,
        .storyCard:nth-child(even) {
          grid-template-columns: 1fr;
        }

        .storyCard:nth-child(even) .imageCollage,
        .storyCard:nth-child(even) .storyCopy {
          order: initial;
        }

        .infoGrid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 700px) {
        .placePage {
          padding: 1px 14px 60px;
        }

        .placeHero {
          padding: 54px 24px;
          border-radius: 32px;
        }

        .storyCard {
          padding: 16px;
          border-radius: 30px;
        }

        .imageCollage {
          grid-template-columns: 1fr;
        }

        .imageTile,
        .imageTile img,
        .imageCollage .imageTile:only-child,
        .imageCollage .imageTile:only-child img,
        .imageCollage .imageTile:first-child:nth-last-child(3),
        .imageCollage .imageTile:first-child:nth-last-child(3) img {
          min-height: 330px;
        }

        .storyCopy {
          padding: 16px 8px 8px;
        }

        .travelInfoSection {
          padding: 24px 18px;
          border-radius: 30px;
        }
      }
    `,
                }}
            />
        </>
    );
}