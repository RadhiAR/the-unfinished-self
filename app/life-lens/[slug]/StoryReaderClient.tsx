"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type StoryPage = {
    title: string;
    label: string;
    pages: {
        heading: string;
        body: string;
    }[];
};

type StoryReaderClientProps = {
    story: StoryPage;
};

export default function StoryReaderClient({ story }: StoryReaderClientProps) {
    const [pageIndex, setPageIndex] = useState(0);

    const currentPage = useMemo(() => {
        return story.pages[pageIndex];
    }, [story, pageIndex]);

    const goNext = () => {
        if (pageIndex < story.pages.length - 1) {
            setPageIndex(pageIndex + 1);
        }
    };

    const goPrev = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    };

    return (
        <>
            <main className="readerPage">
                <div className="topBar">
                    <Link href="/life-lens">← Back to story shelf</Link>
                    <span>
                        {pageIndex + 1} / {story.pages.length}
                    </span>
                </div>

                <section className="readerShell">
                    <div className="coverPanel">
                        <p className="eyebrow">{story.label}</p>
                        <h1>{story.title}</h1>
                        <p className="coverText">
                            A soft weekend read from Life Lens — written in small chapters,
                            meant to be opened slowly.
                        </p>
                    </div>

                    <article className="pageCard">
                        <div className="pageInner">
                            <p className="pageLabel">{currentPage.heading}</p>
                            <div className="divider" />
                            <p className="storyText">{currentPage.body}</p>
                        </div>
                    </article>
                </section>

                <div className="readerControls">
                    <button onClick={goPrev} disabled={pageIndex === 0}>
                        ← Previous
                    </button>

                    <div className="dots">
                        {story.pages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setPageIndex(index)}
                                aria-label={`Go to page ${index + 1}`}
                                className={index === pageIndex ? "activeDot" : ""}
                            />
                        ))}
                    </div>

                    <button onClick={goNext} disabled={pageIndex === story.pages.length - 1}>
                        Next →
                    </button>
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

            a {
              color: inherit;
              text-decoration: none;
            }

            .readerPage {
              min-height: 100vh;
              padding: 34px 22px 80px;
              font-family: Georgia, "Times New Roman", serif;
              color: #2f1d26;
              background:
                radial-gradient(circle at 12% 8%, rgba(255, 214, 233, 0.9), transparent 31%),
                radial-gradient(circle at 92% 18%, rgba(223, 243, 255, 0.85), transparent 30%),
                linear-gradient(135deg, #fff7fb 0%, #fff0f7 52%, #fff9fc 100%);
            }

            .topBar {
              max-width: 1180px;
              margin: 0 auto 28px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 18px;
              color: #9d3f68;
              font-size: 14px;
              font-weight: 900;
            }

            .topBar a,
            .topBar span {
              padding: 10px 16px;
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.75);
              border: 1px solid #f1bfd4;
              box-shadow: 0 10px 26px rgba(184, 91, 133, 0.1);
            }

            .readerShell {
              max-width: 1180px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 0.9fr 1.1fr;
              gap: 28px;
            }

            .coverPanel {
              padding: 42px 42px 36px;
              border-radius: 34px;
              border: 1px solid rgba(241, 189, 212, 0.7);
              backdrop-filter: blur(28px);
              background: rgba(255, 255, 255, 0.82);
              box-shadow: 0 24px 60px rgba(184, 91, 133, 0.1);
            }

            .eyebrow {
              margin: 0 0 16px;
              color: #b85b85;
              font-size: 12px;
              letter-spacing: 0.4em;
              text-transform: uppercase;
              font-weight: 900;
            }

            .coverPanel h1 {
              margin: 0;
              font-size: clamp(42px, 4vw, 72px);
              line-height: 1.05;
            }

            .coverText {
              margin: 24px 0 0;
              color: #6f5361;
              font-size: 18px;
              line-height: 1.8;
            }

            .pageCard {
              border-radius: 36px;
              background: rgba(255, 255, 255, 0.84);
              border: 1px solid rgba(241, 189, 212, 0.75);
              padding: 46px 38px;
              box-shadow: 0 24px 60px rgba(184, 91, 133, 0.11);
            }

            .pageInner {
              max-width: 780px;
              margin: 0 auto;
            }

            .pageLabel {
              margin: 0 0 18px;
              color: #b85b85;
              font-size: 12px;
              letter-spacing: 0.45em;
              text-transform: uppercase;
              font-weight: 900;
            }

            .divider {
              width: 84px;
              height: 3px;
              margin: 0 0 24px;
              background: linear-gradient(135deg, #d9468c, #f9a8d4);
              border-radius: 999px;
            }

            .storyText {
              margin: 0;
              color: #5e4153;
              font-size: 19px;
              line-height: 1.85;
              white-space: pre-wrap;
            }

            .readerControls {
              max-width: 980px;
              margin: 42px auto 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 18px;
              flex-wrap: wrap;
            }

            .readerControls button {
              border: none;
              background: #f7d6e8;
              color: #9d3f68;
              font-weight: 900;
              padding: 14px 22px;
              border-radius: 999px;
              cursor: pointer;
              transition: transform 0.2s ease, background 0.2s ease;
            }

            .readerControls button:hover:not(:disabled) {
              transform: translateY(-2px);
            }

            .readerControls button:disabled {
              opacity: 0.45;
              cursor: not-allowed;
            }

            .dots {
              display: flex;
              gap: 8px;
              align-items: center;
            }

            .dots button {
              width: 12px;
              height: 12px;
              border-radius: 999px;
              border: 1px solid #f1bfd4;
              background: transparent;
              cursor: pointer;
              padding: 0;
            }

            .dots .activeDot {
              background: linear-gradient(135deg, #d9468c, #f9a8d4);
              border-color: transparent;
            }

            @media (max-width: 900px) {
              .readerShell {
                grid-template-columns: 1fr;
              }

              .readerControls {
                flex-direction: column;
                align-items: stretch;
              }
            }
          `,
                }}
            />
        </>
    );
}
