export default function Home() {
  const projects = [
    {
      title: "Loomeira",
      desc: "A platform for handmade design, custom creations, and thoughtful craftsmanship—bringing creativity and community together.",
      tag: "Founder Project",
    },
    {
      title: "Muse & Miles",
      desc: "A lens on travel, culture, and modern experiences—capturing places, stories, and everything in between.",
      tag: "The Travel Edit",
    },
    {
      title: "The Weekly Tea",
      desc: "Stories, thoughts, and a little chaos—shared weekly, across perspectives and moments that stay with you.",
      tag: "Weekly Story Drops",
    },
  ];

  const interests = [
    "Travel",
    "Design",
    "Stories",
    "Fashion",
    "Food & Places",
    "Building Things",
  ];

  return (
    <>
      <main className="page">
        <section className="hero">
          <div className="heroBg" />
          <div className="heroOverlay" />

          <div className="heroContent pageBlock">
            <p className="eyebrow">Personal Universe of</p>

            <h2>THE UNFINISHED S(H)ELF</h2>

            <p className="tagline">
              A life in motion — shaped by travel ✈️, stories 📖, and everything in between ✨
            </p>

            <p className="intro">
              A space where travel ✈️, stories 📖, and ideas 💭 come together. Built around curiosity 🌍, movement, and growth, it captures moments, places, and perspectives as they unfold—quietly evolving, one chapter at a time ✨
            </p>

            <div className="buttonRow">
              <a href="#projects" className="mainBtn primaryBtn">
                Explore My World
              </a>

              <a href="#about" className="mainBtn secondaryBtn">
                About Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="aboutSection pageBlock">
          <div className="aboutLeft">
            <p className="eyebrow">About</p>
            <h2>A wonder in progress.</h2>
          </div>

          <div className="aboutRight">
            <p>
              Not a finished story, but one constantly evolving. Built around curiosity, creativity, and movement, this space reflects a life shaped by travel ✈️, ideas 💭, and the beauty of everyday moments ✨. It’s a quiet exploration of what feels meaningful—where inspiration comes from, where it leads, and how it changes along the way.
            </p>

            <p>
              More than a portfolio, it holds pieces of work, thoughts, and experiences—woven together as a reflection of growth, direction, and everything still taking shape. Some parts are intentional, others still unfolding, but all of it moves forward with purpose. Each project, place, and moment adds to the story, unfolding one chapter at a time 📖.
            </p>

            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="resumeBtn"
            >
              View My Work →
            </a>
          </div>
        </section>

        <section id="projects" className="projectsSection">
          <div className="sectionTitle pageBlock">
            <p className="eyebrow">Projects & Pieces</p>
            <h2>Work & Worlds</h2>
          </div>

          <div className="projectGrid pageBlock">
            {projects.map((project) => (
              <article
                className={`projectCard ${project.title === "Loomeira"
                  ? "featuredCard"
                  : project.title === "The Weekly Tea"
                    ? "writingCard"
                    : ""
                  }`}
                key={project.title}
              >
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <a
                  href={
                    project.title === "Loomeira"
                      ? "/loomeira"
                      : project.title === "Muse & Miles"
                        ? "/travel-diaries"
                        : project.title === "The Weekly Tea"
                          ? "/life-lens"
                          : "/"
                  }
                  target={
                    project.title === "Muse & Miles" ||
                      project.title === "The Weekly Tea"
                      ? "_blank"
                      : "_self"
                  }
                  rel={
                    project.title === "Muse & Miles" ||
                      project.title === "The Weekly Tea"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {project.title === "The Weekly Tea"
                    ? "Get some Tea →"
                    : project.title === "Muse & Miles"
                      ? "Run the Miles here →"
                      : project.title === "Loomeira"
                        ? "Discover Loomeira →"
                        : "Explore →"}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="interestsSection pageBlock">
          <p className="eyebrow">What Shapes This Space</p>
          <h2>Pink things. New cities. Big dreams.</h2>

          <div className="interestGrid">
            {interests.map((item) => (
              <div className="interestCard" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <h3>THE UNFINISHED SELF</h3>
          <p>Still becoming. Still building. Still wearing pink.</p>
        </footer>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            * {
              box-sizing: border-box;
            }

            html {
              scroll-behavior: smooth;
            }

            body {
              margin: 0;
              background: #fff7fb;
            }

            a {
              color: inherit;
              text-decoration: none;
            }

            .page {
              --content-width: 1180px;
              --page-padding: 24px;
              min-height: 100vh;
              overflow-x: hidden;
              color: #35212b;
              font-family: Georgia, "Times New Roman", serif;
              background:
                radial-gradient(circle at 10% 18%, rgba(255, 214, 233, 0.55), transparent 30%),
                radial-gradient(circle at 88% 20%, rgba(223, 243, 255, 0.55), transparent 28%),
                linear-gradient(180deg, #fff7fb 0%, #ffffff 42%, #fff7fb 100%);
            }

            .pageBlock {
              width: min(calc(100% - 48px), var(--content-width));
              margin-left: auto;
              margin-right: auto;
            }

            .hero {
              position: relative;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 100px 0;
              overflow: hidden;
            }

            .heroBg {
              position: absolute;
              inset: 0;
              background-image: url("/dream.png");
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              transform: scale(1.04);
            }

            .heroOverlay {
              position: absolute;
              inset: 0;
              background:
                radial-gradient(circle at center, rgba(255, 247, 251, 0.92), rgba(255, 247, 251, 0.62) 48%, rgba(255, 220, 238, 0.22)),
                linear-gradient(to bottom, rgba(255, 247, 251, 0.38), rgba(255, 247, 251, 0.9));
              backdrop-filter: blur(1px);
            }

            .heroContent {
              position: relative;
              z-index: 2;
              width: min(calc(81% - 48px), var(--content-width));
              max-width: var(--content-width);
              padding: 64px 52px;
              border-radius: 46px;
              background: rgba(255, 255, 255, 0.68);
              border: 1px solid rgba(241, 196, 214, 0.9);
              box-shadow: 0 30px 85px rgba(184, 91, 133, 0.16);
              backdrop-filter: blur(14px);
            }

            .eyebrow {
              margin: 0 0 18px;
              font-size: 12px;
              letter-spacing: 0.42em;
              text-transform: uppercase;
              color: #b85b85;
              font-weight: 800;
            }

            .tagline {
              max-width: 820px;
              margin: 30px auto 0;
              font-size: clamp(18px, 2vw, 25px);
              font-style: italic;
              color: #8d3d62;
              line-height: 1.55;
            }

            .intro {
              max-width: 820px;
              margin: 26px auto 0;
              font-size: 18px;
              line-height: 1.85;
              color: #5f4553;
            }

            .buttonRow {
              margin-top: 42px;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 18px;
              flex-wrap: wrap;
            }

            .mainBtn {
              min-width: 230px;
              padding: 15px 30px;
              border-radius: 999px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: 900;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              transition: all 0.25s ease;
              border: 1px solid rgba(255, 255, 255, 0.75);
            }

            .primaryBtn {
              color: white;
              background: linear-gradient(135deg, #d9468c, #ee79b0, #7fc8ff);
              box-shadow: 0 16px 38px rgba(217, 70, 140, 0.32);
            }

            .secondaryBtn {
              color: #7f3558;
              background: rgba(255, 255, 255, 0.82);
              backdrop-filter: blur(10px);
              border-color: #e7a5c1;
              box-shadow: 0 14px 34px rgba(244, 114, 182, 0.18);
            }

            .mainBtn:hover {
              transform: translateY(-4px);
            }

            .aboutSection {
              padding: 96px 0 88px;
              display: grid;
              grid-template-columns: 0.9fr 1.1fr;
              gap: 28px;
              align-items: stretch;
            }

            .aboutLeft,
            .aboutRight {
              border-radius: 38px;
              background: rgba(255, 255, 255, 0.86);
              border: 1px solid #f1c4d6;
              box-shadow: 0 20px 50px rgba(184, 91, 133, 0.12);
              padding: 44px;
            }

            .aboutLeft {
              display: flex;
              flex-direction: column;
              justify-content: center;
              background:
                radial-gradient(circle at top left, rgba(255, 214, 233, 0.55), transparent 42%),
                rgba(255, 255, 255, 0.88);
            }

            h2 {
              margin: 0;
              font-size: clamp(36px, 4.6vw, 66px);
              line-height: 1.02;
              letter-spacing: -0.045em;
              color: #2f1d26;
            }

            .aboutRight p {
              margin: 0;
              font-size: 17.5px;
              line-height: 1.85;
              color: #6f5361;
            }

            .aboutRight p + p {
              margin-top: 22px;
            }

            .resumeBtn {
              margin-top: 30px;
              display: inline-flex;
              width: fit-content;
              align-items: center;
              justify-content: center;
              padding: 14px 26px;
              border-radius: 999px;
              background: linear-gradient(135deg, #d9468c, #ee79b0, #7fc8ff);
              color: white;
              font-size: 12px;
              font-weight: 900;
              letter-spacing: 0.14em;
              text-transform: uppercase;
              box-shadow: 0 16px 34px rgba(217, 70, 140, 0.28);
              transition: all 0.25s ease;
            }

            .resumeBtn:hover {
              transform: translateY(-4px);
              box-shadow: 0 22px 42px rgba(217, 70, 140, 0.34);
            }

            .projectsSection {
              padding: 96px 0;
              background: linear-gradient(180deg, #ffffff, #fff7fb);
              border-top: 1px solid rgba(241, 196, 214, 0.55);
              border-bottom: 1px solid rgba(241, 196, 214, 0.55);
            }

            .sectionTitle {
              margin-bottom: 52px;
              text-align: center;
            }

            .projectGrid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 24px;
              align-items: stretch;
            }

            .projectCard {
              min-height: 305px;
              border-radius: 34px;
              padding: 34px;
              background: linear-gradient(145deg, #fff7fb, #fff0f7);
              border: 1px solid #f1bfd4;
              box-shadow: 0 18px 42px rgba(184, 91, 133, 0.12);
              transition: all 0.25s ease;
              position: relative;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .projectCard::before {
              content: "";
              position: absolute;
              width: 170px;
              height: 170px;
              right: -70px;
              top: -70px;
              border-radius: 999px;
              background: rgba(255, 214, 233, 0.82);
              filter: blur(2px);
              opacity: 0;
              transition: all 0.25s ease;
            }

            .projectCard:hover {
              transform: translateY(-8px);
              box-shadow: 0 28px 62px rgba(184, 91, 133, 0.2);
            }

            .projectCard:hover::before {
              opacity: 1;
            }

            .featuredCard {
              background: linear-gradient(145deg, #fff1f8, #ffe0ef, #fff8fc);
              border-color: #eda7c6;
              box-shadow: 0 24px 56px rgba(217, 70, 140, 0.18);
            }

            .writingCard {
              background: linear-gradient(145deg, #fff9fc, #fff4f8, #f8fbff);
              border-color: #f3c6d9;
            }

            .projectCard span {
              display: inline-block;
              width: fit-content;
              margin-bottom: 24px;
              padding: 8px 15px;
              border-radius: 999px;
              background: #ffe1ef;
              color: #9d3f68;
              font-size: 12px;
              font-weight: 900;
              position: relative;
              z-index: 1;
            }

            .featuredCard span {
              background: #ffd3e8;
              color: #8f2f5c;
            }

            .writingCard span {
              background: #fff0f7;
              color: #9b4a70;
            }

            .projectCard h3 {
              margin: 0;
              font-size: 34px;
              line-height: 1.05;
              color: #2f1d26;
              transition: color 0.25s ease;
              position: relative;
              z-index: 1;
            }

            .projectCard:hover h3 {
              color: #d9468c;
            }

            .projectCard p {
              margin: 20px 0 28px;
              font-size: 17px;
              line-height: 1.7;
              color: #6f5361;
              position: relative;
              z-index: 1;
            }

            .projectCard a {
              color: #b85b85;
              font-weight: 900;
              position: relative;
              z-index: 1;
              display: inline-flex;
              align-items: center;
              transition: all 0.25s ease;
              margin-top: auto;
            }

            .projectCard a:hover {
              color: #d9468c;
              transform: translateX(4px);
            }

            .interestsSection {
              margin-top: 88px;
              margin-bottom: 88px;
              padding: 72px 42px;
              text-align: center;
              border-radius: 46px;
              background:
                radial-gradient(circle at top left, rgba(255, 214, 233, 0.82), transparent 36%),
                linear-gradient(135deg, #ffd6e9, #fff0f7, #dff3ff);
              border: 1px solid rgba(255, 255, 255, 0.8);
              box-shadow: 0 26px 70px rgba(184, 91, 133, 0.16);
            }

            .interestGrid {
              margin-top: 42px;
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 16px;
            }

            .interestCard {
              padding: 24px;
              border-radius: 24px;
              background: rgba(255, 255, 255, 0.78);
              border: 1px solid rgba(255, 255, 255, 0.9);
              color: #6d3650;
              font-weight: 900;
              box-shadow: 0 12px 28px rgba(184, 91, 133, 0.1);
              transition: all 0.25s ease;
            }

            .interestCard:hover {
              transform: translateY(-5px);
              background: rgba(255, 255, 255, 0.92);
            }

            .footer {
              padding: 56px 24px;
              background: #ffffff;
              text-align: center;
              color: #8d6476;
              border-top: 1px solid rgba(241, 196, 214, 0.65);
            }

            .footer h3 {
              margin: 0;
              font-size: 26px;
              letter-spacing: 0.16em;
              color: #2f1d26;
            }

            .footer p {
              margin: 12px 0 0;
              font-size: 15px;
            }

            @media (max-width: 900px) {
              .pageBlock {
                width: min(calc(100% - 36px), var(--content-width));
              }

              .aboutSection,
              .projectGrid,
              .interestGrid {
                grid-template-columns: 1fr;
              }

              .hero {
                padding: 72px 0;
              }

              .heroContent {
                padding: 48px 26px;
              }

              .aboutSection,
              .projectsSection {
                padding-top: 78px;
                padding-bottom: 78px;
              }

              .interestsSection {
                margin-top: 70px;
                margin-bottom: 70px;
                padding: 48px 24px;
              }

              .mainBtn {
                width: 100%;
                max-width: 330px;
              }
            }
          `,
        }}
      />
    </>
  );
}