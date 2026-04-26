export default function LifeLensPage() {
    const posts = [
        {
            title: "Today felt soft.",
            date: "April 25, 2026",
            content:
                "Woke up slower than usual today. No rush, no chaos. Just quiet. Some days don’t need productivity to feel meaningful. Sometimes just existing gently is enough.",
        },
        {
            title: "The version of me I’m becoming",
            date: "April 23, 2026",
            content:
                "I’ve started noticing how I respond differently now. Less reacting, more understanding. Maybe growth isn’t loud. Maybe it’s just subtle shifts in how we feel.",
        },
        {
            title: "Pink skies & late thoughts",
            date: "April 20, 2026",
            content:
                "There’s something about evenings that makes everything feel deeper. Thoughts hit differently. Dreams feel closer. And everything becomes a little more honest.",
        },
    ];

    return (
        <>
            <main className="lifePage">
                {/* HERO */}
                <section className="lifeHero">
                    <p className="eyebrow">Life Lens</p>
                    <h1>A space for my thoughts ✨</h1>
                    <p className="sub">
                        My everyday life, little moments, feelings, chaos, love, growth…
                        everything that makes me, me.
                    </p>
                </section>

                {/* POSTS */}
                <section className="postsSection">
                    {posts.map((post, index) => (
                        <article className="postCard" key={index}>
                            <p className="date">{post.date}</p>
                            <h2>{post.title}</h2>
                            <p className="content">{post.content}</p>
                        </article>
                    ))}
                </section>

                {/* FOOTER NOTE */}
                <div className="ending">
                    <p>More thoughts coming soon… 🌙</p>
                </div>
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
  
              .lifePage {
                min-height: 100vh;
                padding: 80px 20px;
                font-family: Georgia, "Times New Roman", serif;
                color: #2f1d26;
              }
  
              .lifeHero {
                text-align: center;
                max-width: 700px;
                margin: 0 auto 80px;
              }
  
              .eyebrow {
                font-size: 12px;
                letter-spacing: 0.4em;
                text-transform: uppercase;
                color: #b85b85;
                font-weight: 700;
                margin-bottom: 16px;
              }
  
              .lifeHero h1 {
                font-size: clamp(40px, 6vw, 80px);
                margin: 0;
              }
  
              .sub {
                margin-top: 20px;
                font-size: 18px;
                color: #6f5361;
                line-height: 1.8;
              }
  
              .postsSection {
                max-width: 750px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 36px;
              }
  
              .postCard {
                padding: 32px;
                border-radius: 28px;
                background: linear-gradient(145deg, #fff7fb, #fff0f7);
                border: 1px solid #f1bfd4;
                box-shadow: 0 15px 35px rgba(184, 91, 133, 0.12);
                transition: all 0.25s ease;
              }
  
              .postCard:hover {
                transform: translateY(-6px);
                box-shadow: 0 25px 55px rgba(184, 91, 133, 0.2);
              }
  
              .date {
                font-size: 13px;
                color: #9d3f68;
                margin-bottom: 12px;
              }
  
              .postCard h2 {
                margin: 0;
                font-size: 26px;
                line-height: 1.3;
              }
  
              .content {
                margin-top: 16px;
                font-size: 17px;
                line-height: 1.8;
                color: #5f4553;
              }
  
              .ending {
                text-align: center;
                margin-top: 70px;
                color: #8d6476;
              }
  
              @media (max-width: 600px) {
                .lifePage {
                  padding: 60px 16px;
                }
  
                .postCard {
                  padding: 24px;
                }
              }
            `,
                }}
            />
        </>
    );
}