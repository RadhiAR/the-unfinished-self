"use client";

import { useState } from "react";
import WeeklyTeaNavbar from "./WeeklyTeaNavbar";
import WeeklyTeaLoginModal from "./WeeklyTeaLoginModal";
import styles from "./lifeLens.module.css";

export default function LifeLensLandingPage() {
  const [loginType, setLoginType] = useState<"read" | "write" | null>(null);

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
      <main className={styles.lifeLanding}>
        <WeeklyTeaNavbar />

        <section className={`${styles.hero} ${styles.pageBlock}`}>
          <div className={styles.heroCopy}>
            <p className={styles.badge}>THE WEEKLY TEA</p>

            <h1 className={styles.heroTitle}>
              Where feelings meet the words they were meant for.
            </h1>

            <p className={styles.heroText}>
              Stories, drama, chaos — served fresh every week. ☕ A soft,
              honest corner for reflections, emotional notes, and chapters of a
              life still becoming — mine, yours, everyone’s.
            </p>

            <div className={styles.heroActions}>
              <a href="/life-lens/chapters" className={styles.primaryBtn}>
                Enter my s(h)elf →
              </a>

              <button
                type="button"
                className={styles.primaryBtn}
                onClick={() => setLoginType("write")}
              >
                Spill the weekly tea →
              </button>
            </div>
          </div>

          <div className={styles.kindleFrame}>
            <div className={styles.kindleTop}>
              <span>THE WEEKLY TEA</span>
              <span>Weekend Edition</span>
            </div>

            <div className={styles.kindleScreen}>
              <p className={styles.chapterLabel}>Current Shelf</p>

              <h2 className={styles.kindleTitle}>
                Gloss on my lips, fire in my chest.
              </h2>

              <p className={styles.kindleText}>
                Soft in love, loud in life — still becoming. A shelf of
                emotional stories, fictional chaos, weekend chapters, and little
                pieces of me.
              </p>

              <div className={styles.bookRows}>
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${styles.aboutBlock} ${styles.pageBlock}`}>
          <p className={styles.eyebrow}>What is THE WEEKLY TEA?</p>

          <h2>A softer way to see my world.</h2>

          <p>
            This is not just a blog. It is a collection of emotions, memories,
            fiction, self-discovery, and the small moments that usually stay
            hidden. Some pieces may feel like diary entries. Some may feel like
            stories. Some may feel like letters I never sent.
          </p>
        </section>

        <section id="features" className={`${styles.featureGrid} ${styles.pageBlock}`}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </section>

        <section className={`${styles.quoteSection} ${styles.pageBlock}`}>
          <p className={styles.eyebrow}>The mood</p>

          <h2>“Not everything needs to be complete to be beautiful.”</h2>

          <p>
            THE WEEKLY TEA is for the thoughts that are still unfolding, the
            stories that are still forming, and the girl who is still becoming.
          </p>
        </section>
      </main>

      <WeeklyTeaLoginModal type={loginType} onClose={() => setLoginType(null)} />
    </>
  );
}