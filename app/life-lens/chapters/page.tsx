import { createClient } from "@supabase/supabase-js";

type Book = {
  id: string;
  slug: string;
  title: string;
  type: string;
  status: string | null;
  description: string | null;
  cover_url: string | null;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function isSpoiledTea(book: Book) {
  const value = `${book.type || ""} ${book.title || ""}`.toLowerCase();
  return value.includes("spoiled") || value.includes("diary") || value.includes("journal");
}

function BookCard({ book }: { book: Book }) {
  return (
    <article className="bookCard">
      <div
        className="bookCover"
        style={
          book.cover_url
            ? {
              backgroundImage: `
                  linear-gradient(145deg, rgba(255,247,251,0.84), rgba(255,225,239,0.88)),
                  url(${book.cover_url})
                `,
            }
            : undefined
        }
      >
        <div>
          <p className="bookType">{book.type}</p>
          <h3>{book.title}</h3>
          <p className="bookDesc">
            {book.description ||
              "A story told in pieces — one chapter, one feeling, one little storm at a time."}
          </p>
        </div>

        <div className="bookBottom">
          <span>{book.status || "Coming Soon"}</span>
          <a href={`/life-lens/${book.slug}`}>Read →</a>
        </div>
      </div>
    </article>
  );
}

export default async function ChaptersPage() {
  const { data: books, error } = await supabase
    .from("weekly_tea_books")
    .select("*")
    .order("created_at", { ascending: false });

  const allBooks = (books || []) as Book[];
  const weeklySeries = allBooks.filter((book) => !isSpoiledTea(book));
  const spoiledTea = allBooks.filter((book) => isSpoiledTea(book));

  return (
    <>
      <main className="lifePage">
        <section className="lifeHero">
          <p className="eyebrow">THE WEEKLY TEA</p>

          <h1>
            Gloss on my lips, fire in my chest, soft in love, loud in life —
            still becoming.
          </h1>

          <p className="sub">
            A little book wall of stories I write over the weekends — serials,
            chapters, emotions, fiction, and pieces of my world.
          </p>
        </section>

        <section className="categoryCardsSection">
          <p className="eyebrow">MY WRITINGS</p>
          <h2>Choose your tea</h2>

          <div className="categoryCardsGrid">
            <a href="#weekly-series" className="categoryCard">
              <span>Books it is</span>
              <h3>I Dreamed You First : A love that found me</h3>
              <p>
                Young, certain, and in love — About the girl who built her whole world around him, and called it home.
              </p>
              <strong>Read me →</strong>
            </a>

            <a href="#spoiled-tea" className="categoryCard">
              <span>Weekly Diary</span>
              <h3>Spoiled Tea</h3>
              <p>
                A curated space for thoughts, experiences, and reflections—captured with intent, felt with intensity.
              </p>
              <strong>At your own risk →</strong>
            </a>
          </div>
        </section>

        <section className="aboutSerial">
          <p className="eyebrow">About this shelf</p>
          <h2>Every story gets its own little world.</h2>
          <p>Some are fictional. Some are personal. Some are both.</p>
        </section>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
              max-width: 980px;
              margin: 0 auto 72px;
            }

            .eyebrow {
              margin: 0 0 18px;
              font-size: 12px;
              letter-spacing: 0.42em;
              text-transform: uppercase;
              color: #b85b85;
              font-weight: 900;
            }

            .lifeHero h1 {
              margin: 0;
              font-size: clamp(32px, 3.3vw, 52px);
              line-height: 1.15;
              letter-spacing: -0.035em;
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
            }

            .categoryCardsSection {
              max-width: 1180px;
              margin: 0 auto 90px;
              text-align: center;
            }

            .categoryCardsSection h2 {
              margin: 0 0 46px;
              font-size: clamp(42px, 5vw, 72px);
              line-height: 1;
              letter-spacing: -0.055em;
            }

            .categoryCardsGrid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 28px;
            }

            .categoryCard {
              min-height: 280px;
              padding: 42px 44px;
              border-radius: 32px;
              text-align: left;
              text-decoration: none;
              background: rgba(255, 255, 255, 0.58);
              border: 1px solid #f1bfd4;
              box-shadow: 0 24px 60px rgba(184, 91, 133, 0.13);
              color: #2f1d26;
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }

            .categoryCard:hover {
              transform: translateY(-8px);
              box-shadow: 0 34px 75px rgba(184, 91, 133, 0.21);
            }

            .categoryCard span {
              display: inline-flex;
              padding: 9px 18px;
              border-radius: 999px;
              background: rgba(255, 214, 233, 0.8);
              color: #b85b85;
              font-size: 13px;
              font-weight: 900;
            }

            .categoryCard h3 {
              margin: 34px 0 0;
              font-size: 42px;
              line-height: 1;
            }

            .categoryCard p {
              margin: 24px 0 28px;
              color: #6f5361;
              font-size: 18px;
              line-height: 1.7;
            }

            .categoryCard strong {
              color: #b85b85;
              font-size: 18px;
            }

            .categorySection {
              max-width: 1120px;
              margin: 0 auto 80px;
            }

            .categoryHeader {
              text-align: center;
              max-width: 850px;
              margin: 0 auto 34px;
            }

            .categoryHeader h2 {
              margin: 0;
              font-size: clamp(42px, 5.5vw, 78px);
              line-height: 0.95;
              letter-spacing: -0.055em;
            }

            .bookWall {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 28px;
            }

            .bookCard {
              min-height: 430px;
              border-radius: 32px;
              overflow: hidden;
              background: #ffffff;
              border: 1px solid #f1bfd4;
              box-shadow: 0 25px 60px rgba(184, 91, 133, 0.18);
            }

            .bookCover {
              min-height: 430px;
              height: 100%;
              padding: 34px 28px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              background:
                radial-gradient(circle at top right, rgba(255,255,255,0.85), transparent 35%),
                linear-gradient(145deg, #fff7fb, #ffe1ef);
              background-size: cover;
              background-position: center;
            }

            .bookType {
              margin: 0;
              font-size: 12px;
              letter-spacing: 0.22em;
              text-transform: uppercase;
              color: #b85b85;
              font-weight: 900;
            }

            .bookCover h3 {
              margin: 28px 0 0;
              font-size: 32px;
              line-height: 1.08;
              color: #2f1d26;
            }

            .bookDesc {
              margin: 22px 0;
              font-size: 16px;
              line-height: 1.75;
              color: #6f5361;
            }

            .bookBottom {
              display: flex;
              flex-direction: column;
              gap: 16px;
              align-items: flex-start;
            }

            .bookBottom span {
              padding: 8px 14px;
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.72);
              color: #9d3f68;
              font-size: 12px;
              font-weight: 900;
            }

            .bookBottom a {
              color: #b85b85;
              font-weight: 900;
              font-size: 17px;
              text-decoration: none;
            }

            .emptyState {
              max-width: 850px;
              margin: 0 auto;
              padding: 52px 28px;
              border-radius: 36px;
              text-align: center;
              background: rgba(255, 255, 255, 0.72);
              border: 1px solid #f1bfd4;
              box-shadow: 0 24px 55px rgba(184, 91, 133, 0.13);
              font-size: 18px;
              font-weight: 800;
              color: #6f5361;
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

            .aboutSerial p {
              max-width: 700px;
              margin: 24px auto 0;
              font-size: 18px;
              line-height: 1.8;
              color: #6f5361;
            }

            @media (max-width: 900px) {
              .lifePage {
                padding: 64px 16px;
              }

              .categoryCardsGrid,
              .bookWall {
                grid-template-columns: 1fr;
              }

              .categoryCard,
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