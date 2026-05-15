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

export default function StoryReaderClient({ story }: { story: StoryPage }) {
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
                    <Link href="/life-lens/chapters">
                        ← Back to story shelf
                    </Link>

                    <span>
                        {pageIndex + 1} / {story.pages.length}
                    </span>
                </div>

                <section className="readerShell">
                    <aside className="coverPanel">
                        <p className="eyebrow">{story.label}</p>

                        <h1>{story.title}</h1>

                        <p className="coverText">
                            A soft weekend read from Life Lens — written in
                            small chapters, meant to be opened slowly.
                        </p>
                    </aside>

                    <article className="pageCard">
                        <div className="pageInner">
                            <p className="pageLabel">
                                {currentPage.heading}
                            </p>

                            <div className="divider" />

                            <div className="storyText">
                                {currentPage.body}
                            </div>
                        </div>
                    </article>
                </section>

                <div className="readerControls">
                    <button
                        onClick={goPrev}
                        disabled={pageIndex === 0}
                    >
                        ← Previous
                    </button>

                    <div className="dots">
                        {story.pages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setPageIndex(index)}
                                className={
                                    index === pageIndex
                                        ? "activeDot"
                                        : ""
                                }
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goNext}
                        disabled={
                            pageIndex === story.pages.length - 1
                        }
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
              padding: 34px 22px 60px;
              font-family: Georgia, "Times New Roman", serif;
              color: #2f1d26;

              background:
                radial-gradient(
                  circle at 10% 8%,
                  rgba(255, 214, 233, 0.9),
                  transparent 30%
                ),
                radial-gradient(
                  circle at 92% 16%,
                  rgba(223, 243, 255, 0.85),
                  transparent 30%
                ),
                linear-gradient(
                  135deg,
                  #fff7fb,
                  #fff0f7
                );
            }

            .topBar {
              max-width: 1180px;
              margin: 0 auto 26px;

              display: flex;
              justify-content: space-between;
              align-items: center;

              color: #9d3f68;
              font-size: 14px;
              font-weight: 900;
            }

            .topBar a,
            .topBar span {
              padding: 10px 16px;
              border-radius: 999px;

              background: rgba(255,255,255,0.78);
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

            .coverPanel,
            .pageCard {
              height: 620px;
              min-height: 620px;
              max-height: 620px;

              border-radius: 34px;
              border: 1px solid rgba(241, 189, 212, 0.78);

              background: rgba(255,255,255,0.84);

              box-shadow:
                0 24px 60px
                rgba(184, 91, 133, 0.1);
            }

            .coverPanel {
              padding: 42px;

              display: flex;
              flex-direction: column;
              justify-content: flex-start;
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

              font-size: clamp(42px, 4vw, 66px);
              line-height: 1.04;
            }

            .coverText {
              margin-top: 24px;

              color: #6f5361;
              font-size: 17px;
              line-height: 1.55;
            }

            .pageCard {
              padding: 34px 36px;

              overflow: hidden;
            }

            .pageInner {
              height: 100%;

              display: flex;
              flex-direction: column;
            }

            .pageLabel {
              margin: 0 0 12px;

              color: #b85b85;
              font-size: 11px;
              letter-spacing: 0.38em;
              text-transform: uppercase;
              font-weight: 900;
            }

            .divider {
              width: 76px;
              height: 3px;

              margin-bottom: 18px;

              border-radius: 999px;

              background:
                linear-gradient(
                  135deg,
                  #d9468c,
                  #f9a8d4
                );
            }

            .storyText {
              flex: 1;

              overflow-y: auto;

              padding-right: 12px;

              color: #5e4153;

              font-size: 16px;
              line-height: 1.6;

              white-space: pre-line;
            }

            .storyText::-webkit-scrollbar {
              width: 6px;
            }

            .storyText::-webkit-scrollbar-thumb {
              background: #f1bfd4;
              border-radius: 999px;
            }

            .readerControls {
              max-width: 980px;
              margin: 32px auto 0;

              display: flex;
              justify-content: space-between;
              align-items: center;

              gap: 18px;
            }

            .readerControls button {
              border: none;

              background: #f7d6e8;
              color: #9d3f68;

              font-weight: 900;

              padding: 13px 22px;

              border-radius: 999px;

              cursor: pointer;

              transition:
                transform 0.2s ease,
                opacity 0.2s ease;
            }

            .readerControls button:hover:not(:disabled) {
              transform: translateY(-2px);
            }

            .readerControls button:disabled {
              opacity: 0.45;
              cursor: not-allowed;
            }

            .dots {
              max-width: 540px;

              display: flex;
              flex-wrap: wrap;
              justify-content: center;

              gap: 8px;
            }

            .dots button {
              width: 11px;
              height: 11px;

              padding: 0;

              border-radius: 999px;

              border: 1px solid #f1bfd4;

              background: transparent;
            }

            .dots .activeDot {
              background:
                linear-gradient(
                  135deg,
                  #d9468c,
                  #f9a8d4
                );

              border-color: transparent;
            }

            @media (max-width: 900px) {
              .readerShell {
                grid-template-columns: 1fr;
              }

              .coverPanel,
              .pageCard {
                height: auto;
                min-height: auto;
                max-height: none;
              }

              .storyText {
                max-height: none;
              }

              .readerControls {
                flex-direction: column;
              }
            }
          `,
                }}
            />
        </>
    );
}