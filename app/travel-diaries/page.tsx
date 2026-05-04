import SiteNavbar from "../components/SiteNavbar";

export default function TravelDiaries() {
    const places = [
        "Texas",
        "Washington",
        "Ohio",
        "Colorado",
        "New Mexico",
        "California",
        "Arizona",
        "Utah",
        "Nevada",
        "Oklahoma",
        "New York",
        "Tennessee",
        "Illinois",
    ];

    return (
        <>
            <main className="travelPage">
                <SiteNavbar />

                {/* ✅ INTRO SECTION */}
                <section className="travelIntro">
                    <div className="introText">
                        <p className="pillText">Travel Diaries</p>

                        <h1>Where every city becomes a little story.</h1>

                        <p>
                            A soft little shelf of places, memories, food stops, road chaos,
                            pretty views, and the cities that shaped pieces of me.
                        </p>
                    </div>

                    <div className="introCard">
                        <p className="cardTop">Current Map</p>

                        <h2>Places I’ve loved, lived, and wandered through.</h2>

                        <p>
                            From Texas skies to California sunsets — every stop gets its own
                            tiny chapter.
                        </p>
                    </div>
                </section>

                {/* ✅ PLACES SECTION */}
                <section className="travelHero">
                    <p className="eyebrow">Choose a place</p>

                    <h1>Places. Memories. Little chaos.</h1>

                    <div className="placesGrid">
                        {places.map((place) => {
                            const slug = place.toLowerCase().replace(/\s+/g, "-");

                            // 🔥 FIXED ROUTING
                            let href = `/travel/${slug}`;

                            if (place === "Illinois") {
                                href = "/travel/illinois/chicago";
                            }
                            if (place === "Nevada") {
                                href = "/travel/Nevada/vegas";
                            }
                            if (place === "Colorado") {
                                href = "/travel/colorado/rocky";
                            }
                            if (place === "California") {
                                href = "/travel/california";
                            }
                            if (place === "New York") {
                                href = "/travel/NY";
                            }
                            return (
                                <a
                                    key={place}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="placeCard"
                                >
                                    {place}
                                </a>
                            );
                        })}
                    </div>
                </section>

                {/* 🔥 MOOD SECTION */}
                <section className="moodSection">
                    <p className="eyebrow">The mood</p>

                    <h2>
                        “Journeys that are rushed, locations chosen at the last minute… but somehow end up meaning the most.”
                    </h2>

                    <p></p>
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

          .travelPage {
            min-height: 100vh;
            font-family: Georgia, "Times New Roman", serif;
            background:
              radial-gradient(circle at 10% 20%, rgba(255, 214, 233, 0.75), transparent 35%),
              radial-gradient(circle at 90% 20%, rgba(223, 243, 255, 0.8), transparent 35%),
              linear-gradient(135deg, #fff0f7, #f8fbff);
            padding: 1px 20px 60px;
          }

          .travelIntro {
            width: 100%;
            max-width: 1180px;
            margin: 40px auto 0;
            padding: 60px 48px;
            border-radius: 42px;
            display: grid;
            grid-template-columns: 1fr 0.7fr;
            gap: 40px;
            align-items: center;
            background: rgba(255, 255, 255, 0.66);
            border: 1px solid rgba(241, 196, 214, 0.9);
            box-shadow: 0 30px 80px rgba(184, 91, 133, 0.16);
            backdrop-filter: blur(14px);
          }

          .pillText {
            display: inline-block;
            margin: 0 0 22px;
            padding: 10px 20px;
            border-radius: 999px;
            background: #ffd6e9;
            color: #b85b85;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.25em;
            text-transform: uppercase;
          }

          .introText h1 {
            margin: 0;
            font-size: clamp(40px, 5vw, 72px);
            line-height: 1;
            letter-spacing: -0.05em;
            color: #2f1d26;
          }

          .introText p:last-child {
            margin-top: 24px;
            font-size: 17px;
            line-height: 1.7;
            color: #6f5361;
            max-width: 560px;
          }

          .introCard {
            padding: 36px;
            border-radius: 30px;
            background:
              radial-gradient(circle at top left, rgba(255, 214, 233, 0.6), transparent 42%),
              linear-gradient(145deg, #fff7fb, #ffffff, #eef8ff);
            border: 1px solid rgba(241, 196, 214, 0.85);
            box-shadow: 0 20px 50px rgba(184, 91, 133, 0.14);
          }

          .cardTop {
            margin-bottom: 14px;
            font-size: 12px;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: #b85b85;
            font-weight: 900;
          }

          .introCard h2 {
            margin: 0;
            font-size: clamp(26px, 3vw, 40px);
            line-height: 1.1;
            color: #2f1d26;
          }

          .moodSection {
            max-width: 1180px;
            margin: 40px auto 0;
            padding: 64px 40px;
            text-align: center;
            border-radius: 42px;
            background:
              linear-gradient(135deg, #ffd6e9, #fff0f7, #dff3ff);
            border: 1px solid rgba(255,255,255,0.8);
            box-shadow: 0 28px 70px rgba(184, 91, 133, 0.18);
          }

          .moodSection h2 {
            max-width: 900px;
            margin: 0 auto;
            font-size: clamp(36px, 5vw, 64px);
            line-height: 1.05;
            letter-spacing: -0.04em;
            color: #2f1d26;
          }

          .travelHero {
            width: 100%;
            max-width: 1180px;
            margin: 30px auto 0;
            padding: 56px 40px;
            border-radius: 40px;
            text-align: center;
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 30px 80px rgba(184, 91, 133, 0.18);
          }

          .eyebrow {
            margin: 0 0 16px;
            font-size: 12px;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: #b85b85;
            font-weight: 800;
          }

          .placesGrid {
            margin-top: 46px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .placeCard {
            padding: 20px;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.9);
            font-weight: 800;
            color: #6d3650;
            box-shadow: 0 12px 28px rgba(184, 91, 133, 0.12);
            text-decoration: none;
            display: block;
          }

          @media (max-width: 900px) {
            .travelIntro {
              grid-template-columns: 1fr;
            }

            .placesGrid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `,
                }}
            />
        </>
    );
}