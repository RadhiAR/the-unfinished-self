export default function LifeLensPage() {
    const books = [
        {
            slug: "weekend-i-started-writing-again",
            title: "The Weekend I Started Writing Again",
            type: "Serial",
            status: "Trailer Available",
            desc:
                "A soft beginning to a story told in pieces — one weekend, one chapter, one feeling at a time.",
            accent: "pink",
        },
        {
            slug: "pink-skies-and-unsaid-things",
            title: "Pink Skies and Unsaid Things",
            type: "Weekend Story",
            status: "Coming Soon",
            desc:
                "A continuation of little moments, emotional detours, memories, and the quiet drama of becoming.",
            accent: "rose",
        },
        {
            slug: "girl-who-kept-becoming",
            title: "The Girl Who Kept Becoming",
            type: "Personal Fiction",
            status: "Planned",
            desc:
                "A story about growth, softness, chaos, love, ambition, and the unfinished self underneath it all.",
            accent: "blue",
        },
    ];

    return (
        <>
            <main className="lifePage">
                <section className="lifeHero">
                    <p className="eyebrow">Life Lens</p>
                    <h1>My story shelf ✨</h1>

                    <p className="sub">
                        A little book wall of stories I write over the weekends — serials,
                        chapters, trailers, emotions, fiction, and pieces of my world.
                    </p>

                    <div className="heroNote">
                        <span>New story chapters on weekends</span>
                        <span>Book trailers • serials • personal fiction</span>
                    </div>
                </section>

                <section className="bookWall">
                    {books.map((book) => (
                        <article className={`bookCard ${book.accent}`} key={book.slug}>
                            <div className="bookSpine" />

                            <div className="bookCover">
                                <p className="bookType">{book.type}</p>
                                <h2>{book.title}</h2>
                                <p className="bookDesc">{book.desc}</p>

                                <div className="bookBottom">
                                    <span>{book.status}</span>
                                    <a href={`/life-lens/${book.slug}`}>Read trailer →</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="aboutSerial">
                    <p className="eyebrow">About this shelf</p>
                    <h2>Every story gets its own little world.</h2>
                    <p>
                        Life Lens is where my writings live like books on a soft pink shelf.
                        Some are fictional. Some are personal. Some are both. Each one opens
                        into a readable, page-by-page experience.
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
  
              .lifePage {
                min-height: 100vh;
                padding: 82px 20px;
                font-family: Georgia, "Times New Roman", serif;
                color: #2f1d26;
                background:
                  radial-gradient(circle at top left, rgba(255, 214, 233, 0.78), transparent 32%),
                  radial-gradient(circle at top right, rgba(223, 243, 255, 0.82), transparent 30%),
                  linear-gradient(to bottom, #fff7fb, #fff0f7);
              }
  
              .lifeHero {
                text-align: center;
                max-width: 850px;
                margin: 0 auto 72px;
              }
  
              .eyebrow {
                margin: 0 0 18px;
                font-size: 12px;
                letter-spacing: 0.42em;
                text-transform: uppercase;
                color: #b85b85;
                font-weight: 700;
              }
  
              .lifeHero h1 {
                margin: 0;
                font-size: clamp(46px, 7vw, 92px);
                line-height: 0.98;
                letter-spacing: -0.045em;
              }
  
              .sub {
                max-width: 760px;
                margin: 26px auto 0;
                font-size: 19px;
                line-height: 1.8;
                color: #6f5361;
              }
  
              .heroNote {
                margin: 36px auto 0;
                display: flex;
                justify-content: center;
                gap: 14px;
                flex-wrap: wrap;
              }
  
              .heroNote span {
                padding: 11px 18px;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.78);
                border: 1px solid #f1bfd4;
                color: #9d3f68;
                font-size: 13px;
                font-weight: 800;
                box-shadow: 0 10px 25px rgba(184, 91, 133, 0.1);
              }
  
              .bookWall {
                max-width: 1120px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 28px;
                align-items: stretch;
              }
  
              .bookCard {
                position: relative;
                min-height: 440px;
                border-radius: 28px;
                padding: 18px 18px 18px 34px;
                background: #ffffff;
                border: 1px solid #f1bfd4;
                box-shadow: 0 25px 60px rgba(184, 91, 133, 0.18);
                overflow: hidden;
                transition: all 0.28s ease;
              }
  
              .bookCard:hover {
                transform: translateY(-9px) rotate(-1deg);
                box-shadow: 0 35px 75px rgba(184, 91, 133, 0.25);
              }
  
              .bookSpine {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 24px;
                background: linear-gradient(to bottom, #d9468c, #f9a8d4);
              }
  
              .bookCover {
                height: 100%;
                min-height: 404px;
                border-radius: 22px;
                padding: 34px 28px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background:
                  radial-gradient(circle at top right, rgba(255,255,255,0.85), transparent 35%),
                  linear-gradient(145deg, #fff7fb, #ffe1ef);
                border: 1px solid rgba(255, 255, 255, 0.75);
              }
  
              .bookCard.rose .bookCover {
                background:
                  radial-gradient(circle at top right, rgba(255,255,255,0.85), transparent 35%),
                  linear-gradient(145deg, #fff5f8, #ffd6e9);
              }
  
              .bookCard.blue .bookCover {
                background:
                  radial-gradient(circle at top right, rgba(255,255,255,0.85), transparent 35%),
                  linear-gradient(145deg, #fff7fb, #dff3ff);
              }
  
              .bookType {
                margin: 0;
                font-size: 12px;
                letter-spacing: 0.22em;
                text-transform: uppercase;
                color: #b85b85;
                font-weight: 900;
              }
  
              .bookCover h2 {
                margin: 32px 0 0;
                font-size: 34px;
                line-height: 1.08;
                color: #2f1d26;
              }
  
              .bookDesc {
                margin: 26px 0;
                font-size: 16.5px;
                line-height: 1.75;
                color: #6f5361;
              }
  
              .bookBottom {
                display: flex;
                flex-direction: column;
                gap: 18px;
                align-items: flex-start;
              }
  
              .bookBottom span {
                padding: 8px 14px;
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.7);
                color: #9d3f68;
                font-size: 12px;
                font-weight: 900;
              }
  
              .bookBottom a {
                color: #b85b85;
                font-weight: 900;
                font-size: 17px;
                transition: all 0.25s ease;
              }
  
              .bookBottom a:hover {
                color: #d9468c;
                transform: translateX(5px);
              }
  
              .aboutSerial {
                max-width: 900px;
                margin: 92px auto 0;
                padding: 52px;
                border-radius: 42px;
                text-align: center;
                background: linear-gradient(135deg, #ffd6e9, #fff7fb, #dff3ff);
                border: 1px solid rgba(255, 255, 255, 0.86);
                box-shadow: 0 24px 60px rgba(184, 91, 133, 0.16);
              }
  
              .aboutSerial h2 {
                margin: 0;
                font-size: clamp(32px, 4vw, 56px);
                line-height: 1.08;
              }
  
              .aboutSerial p:last-child {
                max-width: 700px;
                margin: 24px auto 0;
                font-size: 18px;
                line-height: 1.8;
                color: #6f5361;
              }
  
              @media (max-width: 900px) {
                .bookWall {
                  grid-template-columns: 1fr;
                }
  
                .lifePage {
                  padding: 64px 16px;
                }
  
                .bookCard {
                  min-height: auto;
                }
  
                .aboutSerial {
                  padding: 34px 24px;
                }
              }
            `,
                }}
            />
        </>
    );
}