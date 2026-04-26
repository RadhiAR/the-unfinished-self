export default function Home() {
  const projects = [
    {
      title: "Loomeira",
      desc: "A handmade world for custom crafts, creativity, and community.",
      tag: "Founder Project",
    },
    {
      title: "Travel Diaries",
      desc: "Places, memories, food, little chaos, and everything in between.",
      tag: "Try the New Travel AI",
    },
    {
      title: "Life Lens",
      desc: "My personal writings, reflections, and quiet thoughts.",
      tag: "Writing Space",
    },
  ];

  const interests = [
    "Travel",
    "Fashion",
    "Building",
    "Loomeira",
    "Food",
    "Design",
    "Stories",
    "Love",
  ];

  return (
    <>
      <main className="page">
        <section className="hero">
          <div className="heroBg" />
          <div className="heroOverlay" />

          <div className="heroContent">
            <p className="eyebrow">Personal Universe of</p>

            <h2>THE UNFINISHED SELF</h2>

            <p className="tagline">
              She loves to travel, lives in pink, follows her heart… sometimes straight to her boyfriend 😉 and fully believes she’s a Disney princess 👸✨
            </p>

            <p className="intro">
              A serene corner of the internet 🌙✨ where my stories 📖, travels ✈️, dreams 🌟, and ideas 💭 flow together. Here, I capture the magic of my adventures 🌍, the quiet moments of discovery 🦋, and every version of myself still evolving, one dream at a time 💫.
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

        <section id="about" className="aboutSection">
          <div className="aboutLeft">
            <p className="eyebrow">About</p>
            <h2>A wonder in progress.</h2>
          </div>

          <div className="aboutRight">
            <p>
              I don’t believe in being a finished product. I’m constantly building, dreaming ✨,
              designing 🎨, and exploring 🌍—whether it’s through travel ✈️, creative projects 💡,
              or the beauty of everyday moments. I follow what resonates with me, always staying
              true to my heart ❤️ and evolving along the way.
            </p>

            <p>
              This space is more than just a portfolio; it’s a reflection of my journey.
              A dynamic collection of my work 📚, ideas 💭, travels 🌎, and passions 🌸, all woven together
              into a tapestry of soft chaos and ambition 💫. Here, I share the stories I’m writing
              for myself and the versions of me that are always unfolding. Every project and
              experience is a new chapter of discovery 📖, one that I hope will inspire, connect,
              and grow with you.
            </p>
          </div>
        </section>

        <section id="projects" className="projectsSection">
          <div className="sectionTitle">
            <p className="eyebrow">Projects & Pieces</p>
            <h2>Things I’m building</h2>
          </div>

          <div className="projectGrid">
            {projects.map((project) => (
              <article
                className={`projectCard ${project.title === "Loomeira"
                    ? "featuredCard"
                    : project.title === "Life Lens"
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
                      : project.title === "Travel Diaries"
                        ? "/travel-diaries"
                        : "/life-lens"
                  }
                  target={project.title === "Life Lens" ? "_blank" : "_self"}
                  rel={project.title === "Life Lens" ? "noopener noreferrer" : ""}
                >
                  {project.title === "Life Lens" ? "Read →" : "Explore →"}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="interestsSection">
          <p className="eyebrow">Interests</p>
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
              min-height: 100vh;
              overflow-x: hidden;
              color: #35212b;
              font-family: Georgia, "Times New Roman", serif;
              background: #fff7fb;
            }

            .hero {
              position: relative;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 90px 24px;
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
                radial-gradient(circle at center, rgba(255, 247, 251, 0.84), rgba(255, 247, 251, 0.42) 46%, rgba(255, 220, 238, 0.12)),
                linear-gradient(to bottom, rgba(255, 247, 251, 0.2), rgba(255, 247, 251, 0.7));
            }

            .heroContent {
              position: relative;
              z-index: 2;
              max-width: 980px;
            }

            .eyebrow {
              margin: 0 0 18px;
              font-size: 13px;
              letter-spacing: 0.42em;
              text-transform: uppercase;
              color: #b85b85;
              font-weight: 700;
            }

            h1 {
              margin: 0;
              font-size: clamp(46px, 7vw, 104px);
              line-height: 0.95;
              letter-spacing: -0.045em;
              color: #2f1d26;
            }

            .tagline {
              margin: 28px auto 0;
              font-size: clamp(18px, 2vw, 25px);
              font-style: italic;
              color: #8d3d62;
            }

            .intro {
              max-width: 790px;
              margin: 28px auto 0;
              font-size: 18px;
              line-height: 1.8;
              color: #5f4553;
            }

            .buttonRow {
              margin-top: 42px;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 24px;
              flex-wrap: wrap;
            }

            .mainBtn {
              min-width: 230px;
              padding: 15px 30px;
              border-radius: 999px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 13px;
              font-weight: 800;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              transition: all 0.25s ease;
              border: 1px solid rgba(255, 255, 255, 0.75);
            }

            .primaryBtn {
              color: white;
              background: linear-gradient(135deg, #d9468c, #ee79b0, #7fc8ff);
              box-shadow: 0 15px 35px rgba(217, 70, 140, 0.32);
            }

            .secondaryBtn {
              color: #7f3558;
              background: rgba(255, 255, 255, 0.76);
              backdrop-filter: blur(10px);
              border-color: #e7a5c1;
              box-shadow: 0 15px 35px rgba(244, 114, 182, 0.2);
            }

            .mainBtn:hover {
              transform: translateY(-4px);
            }

            .aboutSection {
              max-width: 1120px;
              margin: 0 auto;
              padding: 110px 24px;
              display: grid;
              grid-template-columns: 0.9fr 1.1fr;
              gap: 34px;
              align-items: center;
            }

            .aboutLeft,
            .aboutRight {
              border-radius: 34px;
              background: rgba(255, 255, 255, 0.82);
              border: 1px solid #f1c4d6;
              box-shadow: 0 18px 45px rgba(184, 91, 133, 0.13);
              padding: 42px;
            }

            h2 {
              margin: 0;
              font-size: clamp(34px, 4vw, 60px);
              line-height: 1.08;
              color: #2f1d26;
            }

            .aboutRight p {
              margin: 0;
              font-size: 18px;
              line-height: 1.85;
              color: #6f5361;
            }

            .aboutRight p + p {
              margin-top: 22px;
            }

            .projectsSection {
              padding: 105px 24px;
              background: #ffffff;
            }

            .sectionTitle {
              max-width: 900px;
              margin: 0 auto 56px;
              text-align: center;
            }

            .projectGrid {
              max-width: 1120px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 26px;
            }

            .projectCard {
              min-height: 270px;
              border-radius: 34px;
              padding: 34px;
              background: linear-gradient(145deg, #fff7fb, #fff0f7);
              border: 1px solid #f1bfd4;
              box-shadow: 0 18px 38px rgba(184, 91, 133, 0.12);
              transition: all 0.25s ease;
              position: relative;
              overflow: hidden;
            }

            .projectCard::before {
              content: "";
              position: absolute;
              width: 140px;
              height: 140px;
              right: -55px;
              top: -55px;
              border-radius: 999px;
              background: rgba(255, 214, 233, 0.75);
              filter: blur(2px);
              opacity: 0;
              transition: all 0.25s ease;
            }

            .projectCard:hover {
              transform: translateY(-7px);
              box-shadow: 0 26px 55px rgba(184, 91, 133, 0.2);
            }

            .projectCard:hover::before {
              opacity: 1;
            }

            .projectCard:hover h3 {
              color: #d9468c;
            }

            .featuredCard {
              background: linear-gradient(145deg, #fff1f8, #ffe0ef, #fff8fc);
              border-color: #eda7c6;
              box-shadow: 0 22px 52px rgba(217, 70, 140, 0.18);
            }

            .writingCard {
              background: linear-gradient(145deg, #fff9fc, #fff4f8, #f8fbff);
              border-color: #f3c6d9;
            }

            .projectCard span {
              display: inline-block;
              margin-bottom: 24px;
              padding: 7px 14px;
              border-radius: 999px;
              background: #ffe1ef;
              color: #9d3f68;
              font-size: 12px;
              font-weight: 800;
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
              font-size: 29px;
              color: #2f1d26;
              transition: color 0.25s ease;
              position: relative;
              z-index: 1;
            }

            .projectCard p {
              margin: 18px 0 26px;
              font-size: 17px;
              line-height: 1.7;
              color: #6f5361;
              position: relative;
              z-index: 1;
            }

            .projectCard a {
              color: #b85b85;
              font-weight: 800;
              position: relative;
              z-index: 1;
              display: inline-flex;
              align-items: center;
              transition: all 0.25s ease;
            }

            .projectCard a:hover {
              color: #d9468c;
              transform: translateX(4px);
            }

            .interestsSection {
              max-width: 1120px;
              margin: 85px auto;
              padding: 70px 34px;
              text-align: center;
              border-radius: 44px;
              background: linear-gradient(135deg, #ffd6e9, #fff0f7, #dff3ff);
              border: 1px solid rgba(255, 255, 255, 0.8);
              box-shadow: 0 24px 60px rgba(184, 91, 133, 0.16);
            }

            .interestGrid {
              margin-top: 42px;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 16px;
            }

            .interestCard {
              padding: 24px;
              border-radius: 22px;
              background: rgba(255, 255, 255, 0.78);
              border: 1px solid rgba(255, 255, 255, 0.85);
              color: #6d3650;
              font-weight: 800;
              box-shadow: 0 10px 25px rgba(184, 91, 133, 0.1);
            }

            .footer {
              padding: 50px 24px;
              background: white;
              text-align: center;
              color: #8d6476;
            }

            .footer h3 {
              margin: 0;
              font-size: 26px;
              color: #2f1d26;
            }

            .footer p {
              margin: 10px 0 0;
            }

            @media (max-width: 850px) {
              .aboutSection,
              .projectGrid,
              .interestGrid {
                grid-template-columns: 1fr;
              }

              .hero {
                padding: 70px 20px;
              }

              .aboutSection,
              .projectsSection {
                padding: 80px 20px;
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