"use client";

import { use, useMemo, useState } from "react";

const stories = {
    "weekend-i-started-writing-again": {
        title: "The Weekend I Started Writing Again",
        label: "Trailer Version",
        pages: [
            {
                heading: "Before the first chapter",
                body:
                    "There are some stories that don’t arrive loudly. They don’t knock. They don’t demand to be written. They sit quietly until one weekend, you finally notice them.",
            },
            {
                heading: "The feeling",
                body:
                    "This story begins with a girl who is still becoming. She carries dreams like tiny lights in her pocket.",
            },
            {
                heading: "The promise",
                body:
                    "Every weekend, another page opens. Not because the story is finished, but because she is brave enough to keep writing it.",
            },
        ],
    },
    "pink-skies-and-unsaid-things": {
        title: "Pink Skies and Unsaid Things",
        label: "Coming Soon",
        pages: [
            {
                heading: "Trailer coming soon",
                body:
                    "This story is still being written. It will open with sunsets, quiet feelings, almost-confessions, and memories that stay longer than expected.",
            },
        ],
    },
    "girl-who-kept-becoming": {
        title: "The Girl Who Kept Becoming",
        label: "Planned",
        pages: [
            {
                heading: "Trailer coming soon",
                body:
                    "A story about softness, ambition, love, chaos, and all the unfinished versions of a girl who kept choosing herself.",
            },
        ],
    },
};

export default function StoryReaderPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const story = stories[slug as keyof typeof stories];

    const [pageIndex, setPageIndex] = useState(0);

    const currentPage = useMemo(() => {
        return story?.pages[pageIndex];
    }, [story, pageIndex]);

    if (!story) {
        return (
            <>
                <main className="readerPage">
                    <section className="notFoundCard">
                        <p className="eyebrow">Life Lens</p>
                        <h1>Story not found</h1>
                        <a href="/life-lens">← Back to Life Lens</a>
                    </section>
                </main>

                <style
                    dangerouslySetInnerHTML={{
                        __html: `
              body {
                margin: 0;
                background: #fff7fb;
              }

              .readerPage {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 40px 20px;
                font-family: Georgia, "Times New Roman", serif;
                color: #2f1d26;
                background: linear-gradient(135deg, #fff7fb, #ffe1ef, #dff3ff);
              }

              .notFoundCard {
                max-width: 720px;
                width: 100%;
                padding: 60px;
                text-align: center;
                border-radius: 38px;
                background: rgba(255, 255, 255, 0.82);
                border: 1px solid #f1bfd4;
                box-shadow: 0 28px 70px rgba(184, 91, 133, 0.18);
              }

              .eyebrow {
                margin: 0 0 18px;
                font-size: 12px;
                letter-spacing: 0.42em;
                text-transform: uppercase;
                color: #b85b85;
                font-weight: 900;
              }

              h1 {
                margin: 0 0 28px;
                font-size: clamp(42px, 7vw, 82px);
                line-height: 0.95;
              }

              a {
                color: #b85b85;
                font-weight: 900;
                text-decoration: none;
              }
            `,
                    }}
                />
            </>
        );
    }

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
                    <a href="/life-lens">← Back to story shelf</a>
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
                            <p className="pageLabel">Page {pageIndex + 1}</p>
                            <h2>{currentPage.heading}</h2>
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

                    <button
                        onClick={goNext}
                        disabled={pageIndex === story.pages.length - 1}
                    >
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

            .topBar a {
              padding: 10px 16px;
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.75);
              border: 1px solid #f1bfd4;
              box-shadow: 0 10px 26px rgba(184, 91, 133, 0.1);
            }

            .topBar span {
              padding: 10px 16px;
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.75);
              border: 1px solid #f1bfd4;
            }

            .readerShell {
              max-width: 1180px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 0.9fr 1.1fr;
              gap: 28px;
              align-items: stretch;
            }

            .coverPanel {
              min-height: 640px;
              padding: 54px;
              border-radius: 42px;
              background:
                radial-gradient(circle at top right, rgba(255,255,255,0.85), transparent 34%),
                linear-gradient(145deg, #ffd6e9, #fff0f7, #dff3ff);
              border: 1px solid rgba(255, 255, 255, 0.85);
              box-shadow: 0 30px 80px rgba(184, 91, 133, 0.18);
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
              overflow: hidden;
            }

            .coverPanel::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              width: 26px;
              background: linear-gradient(to bottom, #d9468c, #f9a8d4);
            }

            .coverPanel::after {
              content: "Life Lens";
              position: absolute;
              right: 28px;
              bottom: 24px;
              color: rgba(157, 63, 104, 0.16);
              font-size: 52px;
              font-weight: 900;
              transform: rotate(-6deg);
            }

            .eyebrow {
              margin: 0 0 22px;
              font-size: 12px;
              letter-spacing: 0.42em;
              text-transform: uppercase;
              color: #b85b85;
              font-weight: 900;
              position: relative;
              z-index: 1;
            }

            .coverPanel h1 {
              margin: 0;
              font-size: clamp(42px, 5vw, 76px);
              line-height: 0.98;
              letter-spacing: -0.05em;
              position: relative;
              z-index: 1;
            }

            .coverText {
              max-width: 520px;
              margin: 30px 0 0;
              font-size: 18px;
              line-height: 1.8;
              color: #6f5361;
              position: relative;
              z-index: 1;
            }

            .pageCard {
              min-height: 640px;
              padding: 24px;
              border-radius: 42px;
              background: rgba(255, 255, 255, 0.62);
              border: 1px solid rgba(241, 191, 212, 0.9);
              box-shadow: 0 30px 80px rgba(184, 91, 133, 0.16);
              backdrop-filter: blur(14px);
            }

            .pageInner {
              height: 100%;
              min-height: 592px;
              padding: 64px;
              border-radius: 30px;
              background:
                linear-gradient(90deg, rgba(184, 91, 133, 0.06), transparent 7%, transparent 93%, rgba(184, 91, 133, 0.05)),
                linear-gradient(145deg, #fffdfb, #fff7fb);
              border: 1px solid rgba(255, 255, 255, 0.9);
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .pageLabel {
              margin: 0 0 18px;
              color: #b85b85;
              font-size: 13px;
              letter-spacing: 0.24em;
              text-transform: uppercase;
              font-weight: 900;
            }

            .pageInner h2 {
              margin: 0;
              font-size: clamp(32px, 4vw, 54px);
              line-height: 1.05;
              letter-spacing: -0.03em;
            }

            .divider {
              width: 88px;
              height: 2px;
              margin: 34px 0;
              background: linear-gradient(to right, #d9468c, #f9a8d4);
            }

            .storyText {
              margin: 0;
              font-size: 23px;
              line-height: 1.95;
              color: #5f4553;
            }

            .readerControls {
              max-width: 860px;
              margin: 30px auto 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 18px;
              padding: 14px;
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.7);
              border: 1px solid #f1bfd4;
              box-shadow: 0 18px 42px rgba(184, 91, 133, 0.13);
            }

            .readerControls button {
              border: 0;
              cursor: pointer;
              padding: 13px 22px;
              border-radius: 999px;
              background: linear-gradient(135deg, #d9468c, #f472b6);
              color: white;
              font-family: Georgia, "Times New Roman", serif;
              font-weight: 900;
              box-shadow: 0 12px 28px rgba(217, 70, 140, 0.24);
              transition: all 0.25s ease;
            }

            .readerControls button:hover:not(:disabled) {
              transform: translateY(-3px);
              box-shadow: 0 18px 40px rgba(217, 70, 140, 0.32);
            }

            .readerControls button:disabled {
              opacity: 0.35;
              cursor: not-allowed;
            }

            .dots {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            }

            .dots button {
              width: 11px;
              height: 11px;
              padding: 0;
              border-radius: 999px;
              background: #f1bfd4;
              box-shadow: none;
            }

            .dots button.activeDot {
              width: 30px;
              background: #d9468c;
            }

            @media (max-width: 900px) {
              .readerShell {
                grid-template-columns: 1fr;
              }

              .coverPanel,
              .pageCard {
                min-height: auto;
              }

              .pageInner {
                min-height: 520px;
                padding: 42px 28px;
              }

              .storyText {
                font-size: 19px;
              }

              .readerControls {
                border-radius: 28px;
                flex-direction: column;
              }

              .readerControls button {
                width: 100%;
              }
            }
          `,
                }}
            />
        </>
    );
}