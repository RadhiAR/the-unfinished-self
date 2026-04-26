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
                <section className="hero">
                    <div className="badge">Life Lens</div>

                    <h1>Where feelings become words.</h1>

                    <p className="heroText">
                        Life Lens is my personal writing corner — a soft, honest space for
                        reflections, stories, emotional notes, quiet thoughts, and pieces of
                        the version of me that is still becoming.
                    </p>

                    <div className="heroActions">
                        <a href="/life-lens/chapters" className="primaryBtn">
                            Enter the Story Shelf →
                        </a>

                        <a href="/" className="secondaryBtn">
                            Back Home
                        </a>
                    </div>
                </section>

                <section className="aboutBlock">
                    <p className="eyebrow">What is Life Lens?</p>
                    <h2>A softer way to see my world.</h2>

                    <p>
                        This is not just a blog. It is a collection of emotions, memories,
                        fiction, self-discovery, and the small moments that usually stay
                        hidden. Some pieces may feel like diary entries. Some may feel like
                        stories. Some may feel like letters I never sent.
                    </p>
                </section>

                <section className="featureGrid">
                    {features.map((feature) => (
                        <article className="featureCard" key={feature.title}>
                            <div className="icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </article>
                    ))}
                </section>

                <section className="quoteSection">
                    <h2>
                        “Not everything needs to be complete to be beautiful.”
                    </h2>
                    <p>
                        Life Lens is for the thoughts that are still unfolding, the stories
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
                padding: 72px 22px;
                font-family: Georgia, "Times New Roman", serif;
                color: #2f1d26;
                background:
                  radial-gradient(circle at 12% 12%, rgba(255, 210, 232, 0.8), transparent 34%),
                  radial-gradient(circle at 85% 18%, rgba(221, 241, 255, 0.9), transparent 30%),
                  linear-gradient(180deg, #fff7fb, #fff0f7 52%, #ffffff);
              }
  
              .hero {
                max-width: 980px;
                margin: 0 auto;
                min-height: 72vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                border-radius: 46px;
                padding: 76px 34px;
                background:
                  linear-gradient(145deg, rgba(255,255,255,0.82), rgba(255,240,247,0.88)),
                  radial-gradient(circle at top, rgba(255, 214, 233, 0.55), transparent 45%);
                border: 1px solid #f1bfd4;
                box-shadow: 0 30px 80px rgba(184, 91, 133, 0.18);
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
                margin-bottom: 26px;
              }
  
              h1 {
                margin: 0;
                max-width: 780px;
                font-size: clamp(48px, 8vw, 96px);
                line-height: 0.95;
                letter-spacing: -0.055em;
                color: #2f1d26;
              }
  
              .heroText {
                max-width: 760px;
                margin: 28px auto 0;
                font-size: 19px;
                line-height: 1.85;
                color: #654758;
              }
  
              .heroActions {
                margin-top: 42px;
                display: flex;
                justify-content: center;
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
              }
  
              .primaryBtn {
                color: white;
                background: linear-gradient(135deg, #d9468c, #f472b6, #7fc8ff);
                box-shadow: 0 18px 38px rgba(217, 70, 140, 0.3);
              }
  
              .secondaryBtn {
                color: #8f3d61;
                background: rgba(255, 255, 255, 0.78);
                border: 1px solid #e7a5c1;
              }
  
              .primaryBtn:hover,
              .secondaryBtn:hover {
                transform: translateY(-4px);
              }
  
              .aboutBlock {
                max-width: 980px;
                margin: 80px auto 0;
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
  
              h2 {
                margin: 0;
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
                max-width: 1120px;
                margin: 52px auto 0;
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
                max-width: 980px;
                margin: 82px auto 0;
                padding: 58px 34px;
                border-radius: 42px;
                text-align: center;
                background: linear-gradient(135deg, #ffd6e9, #fff7fb, #dff3ff);
                border: 1px solid rgba(255,255,255,0.85);
                box-shadow: 0 26px 70px rgba(184, 91, 133, 0.18);
              }
  
              .quoteSection p {
                max-width: 700px;
                margin: 22px auto 0;
                font-size: 18px;
                line-height: 1.8;
                color: #6f5361;
              }
  
              @media (max-width: 850px) {
                .lifeLanding {
                  padding: 42px 16px;
                }
  
                .hero {
                  padding: 54px 22px;
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
              }
            `,
                }}
            />
        </>
    );
}