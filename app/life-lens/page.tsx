import WeeklyTeaNavbar from "./WeeklyTeaNavbar";

export default function LifeLensLandingPage() {
    const features = [
        {
            title: "Reflections",
            desc: "Quiet thoughts, personal lessons, and emotional little notes from everyday life.",
            icon: "🪞",
        },
        {
            title: "Stories",
            desc: "Soft fictional pieces, weekend writings, serial chapters, and story trailers.",
            icon: "📖",
        },
        {
            title: "Becoming",
            desc: "A space for growth, dreams, heartbreak, healing, ambition, and the unfinished self.",
            icon: "🌙",
        },
    ];

    return (
        <>
            <main className="lifeLanding">
                <WeeklyTeaNavbar />

                <section className="hero pageBlock">
                    <div className="heroCopy">
                        <p className="badge">THE WEEKLY TEA</p>

                        <h1>Where feelings meet the words they were meant for.</h1>

                        <p className="heroText">
                            Stories, drama, chaos — served fresh every week. ☕
                            A soft, honest corner for reflections, emotional notes, and chapters of a life still becoming — mine, yours, everyone’s.
                        </p>

                        <div className="heroActions">
                            <a href="/life-lens/chapters" className="primaryBtn">
                                Enter my s(h)elf →
                            </a>

                            <a href="/life-lens/chapters" className="primaryBtn">
                                Spill the weekly tea →
                            </a>
                        </div>
                    </div>

                    <div className="kindleFrame">
                        <div className="kindleTop">
                            <span>THE WEEKLY TEA</span>
                            <span>Weekend Edition</span>
                        </div>

                        <div className="kindleScreen">
                            <p className="chapterLabel">Current Shelf</p>
                            <h2>Gloss on my lips, fire in my chest.</h2>
                            <p>
                                Soft in love, loud in life — still becoming. A shelf of emotional
                                stories, fictional chaos, weekend chapters, and little pieces of me.
                            </p>

                            <div className="bookRows">
                                <div />
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="aboutBlock pageBlock">
                    <p className="eyebrow">What is THE WEEKLY TEA?</p>
                    <h2>A softer way to see my world.</h2>

                    <p>
                        This is not just a blog. It is a collection of emotions, memories,
                        fiction, self-discovery, and the small moments that usually stay
                        hidden. Some pieces may feel like diary entries. Some may feel like
                        stories. Some may feel like letters I never sent.
                    </p>
                </section>

                <section className="featureGrid pageBlock">
                    {features.map((feature) => (
                        <article className="featureCard" key={feature.title}>
                            <div className="icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </article>
                    ))}
                </section>

                <section className="quoteSection pageBlock">
                    <p className="eyebrow">The mood</p>
                    <h2>“Not everything needs to be complete to be beautiful.”</h2>
                    <p>
                        THE WEEKLY TEA is for the thoughts that are still unfolding, the stories
                        that are still forming, and the girl who is still becoming.
                    </p>
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
                background: #fff7fb;
              }

              a {
                color: inherit;
                text-decoration: none;
              }

              .lifeLanding {
                min-height: 100vh;
                padding: 72px 24px;
                font-family: Georgia, "Times New Roman", serif;
                color: #2f1d26;
                background:
                  radial-gradient(circle at 12% 12%, rgba(255, 210, 232, 0.8), transparent 34%),
                  radial-gradient(circle at 88% 16%, rgba(221, 241, 255, 0.88), transparent 31%),
                  linear-gradient(180deg, #fff7fb, #fff0f7 48%, #ffffff);
              }

              .pageBlock {
                width: 100%;
                max-width: 1180px;
                margin-left: auto;
                margin-right: auto;
              }

              .hero {
                min-height: 76vh;
                display: grid;
                grid-template-columns: 1.05fr 0.95fr;
                gap: 54px;
                align-items: center;
                padding: 58px;
                border-radius: 48px;
                background:
                  linear-gradient(145deg, rgba(255,255,255,0.86), rgba(255,240,247,0.9)),
                  radial-gradient(circle at top left, rgba(255, 214, 233, 0.65), transparent 42%);
                border: 1px solid #f1bfd4;
                box-shadow: 0 34px 90px rgba(184, 91, 133, 0.18);
              }

              .heroCopy {
                text-align: left;
              }

              .badge {
                display: inline-flex;
                padding: 10px 20px;
                border-radius: 999px;
                background: #ffe1ef;
                color: #9d3f68;
                font-size: 13px;
                font-weight: 900;
                letter-spacing: 0.18em;
                text-transform: uppercase;
                margin: 0 0 26px;
              }

              h1 {
                margin: 0;
                max-width: 720px;
                font-size: clamp(48px, 6.8vw, 88px);
                line-height: 0.96;
                letter-spacing: -0.06em;
                color: #2f1d26;
              }

              .heroText {
                max-width: 680px;
                margin: 28px 0 0;
                font-size: 19px;
                line-height: 1.85;
                color: #654758;
              }

              .heroActions {
                margin-top: 42px;
                display: flex;
                gap: 18px;
                flex-wrap: wrap;
              }

              .primaryBtn,
              .secondaryBtn {
                min-width: 220px;
                padding: 15px 28px;
                border-radius: 999px;
                font-size: 13px;
                font-weight: 900;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                transition: all 0.25s ease;
                text-align: center;
              }

              .primaryBtn {
                color: white;
                background: linear-gradient(135deg, #d9468c, #f472b6, #7fc8ff);
                box-shadow: 0 18px 38px rgba(217, 70, 140, 0.3);
              }

              .primaryBtn:hover,
              .secondaryBtn:hover {
                transform: translateY(-4px);
              }

              .kindleFrame {
                width: 100%;
                max-width: 420px;
                justify-self: center;
                padding: 18px;
                border-radius: 38px;
                background: linear-gradient(145deg, #2f1d26, #5c3348);
                box-shadow:
                  0 30px 70px rgba(47, 29, 38, 0.28),
                  inset 0 0 0 1px rgba(255,255,255,0.12);
              }

              .kindleTop {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 12px 16px;
                color: #ffe1ef;
                font-size: 11px;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                font-weight: 900;
              }

              .kindleScreen {
                min-height: 500px;
                padding: 42px 34px;
                border-radius: 28px;
                background:
                  linear-gradient(180deg, #fffdf8, #fff7fb),
                  radial-gradient(circle at top right, rgba(255, 214, 233, 0.7), transparent 40%);
                color: #2f1d26;
                box-shadow: inset 0 0 0 1px rgba(47, 29, 38, 0.08);
              }

              .chapterLabel {
                margin: 0 0 24px;
                color: #b85b85;
                font-size: 12px;
                font-weight: 900;
                letter-spacing: 0.22em;
                text-transform: uppercase;
              }

              .kindleScreen h2 {
                margin: 0;
                font-size: 42px;
                line-height: 1.02;
                letter-spacing: -0.05em;
              }

              .kindleScreen p:not(.chapterLabel) {
                margin: 24px 0 0;
                font-size: 16.5px;
                line-height: 1.75;
                color: #6f5361;
              }

              .bookRows {
                margin-top: 38px;
                display: grid;
                gap: 12px;
              }

              .bookRows div {
                height: 14px;
                border-radius: 999px;
                background: linear-gradient(90deg, #ffd6e9, #fff0f7);
              }

              .bookRows div:nth-child(2) {
                width: 82%;
              }

              .bookRows div:nth-child(3) {
                width: 64%;
              }

              .bookRows div:nth-child(4) {
                width: 74%;
              }

              .aboutBlock {
                margin-top: 72px;
                padding: 54px;
                border-radius: 38px;
                background: #ffffff;
                border: 1px solid #f1bfd4;
                box-shadow: 0 20px 55px rgba(184, 91, 133, 0.12);
                text-align: center;
              }

              .eyebrow {
                margin: 0 0 16px;
                font-size: 12px;
                letter-spacing: 0.38em;
                text-transform: uppercase;
                color: #b85b85;
                font-weight: 800;
              }

              .aboutBlock h2,
              .quoteSection h2 {
                max-width: 900px;
                margin: 0 auto;
                font-size: clamp(34px, 5vw, 62px);
                line-height: 1.05;
                letter-spacing: -0.04em;
                color: #2f1d26;
              }

              .aboutBlock p:last-child {
                max-width: 760px;
                margin: 24px auto 0;
                font-size: 18px;
                line-height: 1.85;
                color: #6f5361;
              }

              .featureGrid {
                margin-top: 52px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
              }

              .featureCard {
                min-height: 260px;
                padding: 34px;
                border-radius: 32px;
                background: linear-gradient(145deg, #fff9fc, #fff0f7);
                border: 1px solid #f1bfd4;
                box-shadow: 0 18px 42px rgba(184, 91, 133, 0.12);
                transition: all 0.25s ease;
              }

              .featureCard:hover {
                transform: translateY(-7px);
                box-shadow: 0 28px 62px rgba(184, 91, 133, 0.2);
              }

              .icon {
                font-size: 34px;
                margin-bottom: 22px;
              }

              .featureCard h3 {
                margin: 0;
                font-size: 29px;
                color: #2f1d26;
              }

              .featureCard p {
                margin: 18px 0 0;
                font-size: 16.5px;
                line-height: 1.75;
                color: #6f5361;
              }

              .quoteSection {
                margin-top: 72px;
                padding: 58px 34px;
                border-radius: 42px;
                text-align: center;
                background: linear-gradient(135deg, #ffd6e9, #fff7fb, #dff3ff);
                border: 1px solid rgba(255,255,255,0.85);
                box-shadow: 0 26px 70px rgba(184, 91, 133, 0.18);
              }

              .quoteSection p:last-child {
                max-width: 700px;
                margin: 22px auto 0;
                font-size: 18px;
                line-height: 1.8;
                color: #6f5361;
              }

              @media (max-width: 950px) {
                .hero {
                  grid-template-columns: 1fr;
                  padding: 42px 24px;
                  text-align: center;
                }

                .heroCopy {
                  text-align: center;
                }

                .heroText {
                  margin-left: auto;
                  margin-right: auto;
                }

                .heroActions {
                  justify-content: center;
                }
              }

              @media (max-width: 850px) {
                .lifeLanding {
                  padding: 42px 16px;
                }

                .featureGrid {
                  grid-template-columns: 1fr;
                }

                .aboutBlock {
                  padding: 36px 24px;
                }

                .primaryBtn,
                .secondaryBtn {
                  width: 100%;
                }

                .kindleScreen {
                  min-height: 420px;
                  padding: 34px 26px;
                }
              }
            `,
                }}
            />
        </>
    );
}