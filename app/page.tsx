export default function Home() {
  const projects = [
    {
      title: "Loomeira",
      desc: "A handmade world for custom crafts, creativity, and community.",
      tag: "Founder Project",
      href: "#",
    },
    {
      title: "Travel Diaries",
      desc: "Places, memories, food, little chaos, and everything in between.",
      tag: "Life",
      href: "#",
    },
    {
      title: "Tech Experiments",
      desc: "Tiny apps, bold ideas, unfinished builds, and things I’m learning.",
      tag: "Code",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fff7fb] text-[#3b2430]">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/dream.png')",
          }}
        />

        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="mb-5 text-sm tracking-[0.4em] uppercase text-[#b85b85]">
            personal universe
          </p>

          <h1 className="text-5xl md:text-8xl font-serif font-semibold tracking-tight text-[#2f1d26] drop-shadow-sm">
            THE UNFINISHED SELF
          </h1>

          <p className="mt-6 text-xl md:text-2xl italic text-[#7b405e] drop-shadow-sm">
            She wears pink, follows her heart… and sometimes her boyfriend 😉
          </p>

          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg leading-8 text-[#5f4553] drop-shadow-sm">
            A soft little corner of the internet where I collect my projects,
            stories, travel memories, ideas, experiments, and every version of
            myself still becoming.
          </p>

          {/* Disney-style Buttons */}
          <div className="mt-12 flex flex-row flex-wrap gap-8 justify-center items-center">
            <a
              href="#projects"
              className="relative inline-flex min-w-[240px] items-center justify-center rounded-full px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white overflow-hidden
              bg-gradient-to-r from-[#ff3f9b] via-[#a855f7] to-[#38bdf8]
              shadow-[0_6px_0_#b83280,0_14px_25px_rgba(236,72,153,0.35)]
              transition-all duration-300
              hover:-translate-y-[2px] hover:shadow-[0_8px_0_#b83280,0_20px_30px_rgba(236,72,153,0.45)]
              active:translate-y-[1px]"
            >
              <span className="absolute top-1 left-4 right-4 h-[35%] rounded-full bg-white/30" />
              <span className="absolute inset-[3px] rounded-full border border-white/45" />
              <span className="relative z-10">🦋 Explore My World</span>
            </a>

            <a
              href="#about"
              className="relative inline-flex min-w-[240px] items-center justify-center rounded-full px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#8a2f61] overflow-hidden
              bg-gradient-to-r from-[#fff0fb] via-[#ffd6ef] to-[#e0f2fe]
              border border-white/70
              shadow-[0_6px_0_#e79ac4,0_14px_25px_rgba(244,114,182,0.3)]
              transition-all duration-300
              hover:-translate-y-[2px] hover:shadow-[0_8px_0_#e79ac4,0_20px_30px_rgba(244,114,182,0.4)]
              active:translate-y-[1px]"
            >
              <span className="absolute top-1 left-4 right-4 h-[35%] rounded-full bg-white/55" />
              <span className="absolute inset-[3px] rounded-full border border-white/70" />
              <span className="relative z-10">✨ About Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[2rem] bg-white/80 p-8 md:p-10 shadow-xl border border-pink-100">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b85b85] mb-4">
              about
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2f1d26]">
              A woman in progress.
            </h2>
          </div>

          <div className="text-[#6f5361] leading-8 text-lg">
            <p>
              I’m not trying to be one finished thing. I like building, dreaming,
              designing, travelling, overthinking pretty things, and following
              whatever feels honest to me.
            </p>
            <p className="mt-5">
              This space is not just a portfolio. It is a living moodboard of my
              projects, my interests, my soft chaos, my ambition, and the stories
              I keep becoming.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b85b85] mb-4">
              projects & pieces
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-[#2f1d26]">
              Things I’m building
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group rounded-[2rem] bg-[#fff7fb] p-7 border border-pink-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <span className="inline-block mb-5 rounded-full bg-[#ffe1ef] px-4 py-1 text-xs font-semibold text-[#9d3f68]">
                  {project.tag}
                </span>

                <h3 className="text-2xl font-serif text-[#2f1d26]">
                  {project.title}
                </h3>

                <p className="mt-4 text-[#6f5361] leading-7">
                  {project.desc}
                </p>

                <p className="mt-6 text-sm font-semibold text-[#b85b85] group-hover:translate-x-1 transition">
                  View more →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#ffd6e9] via-[#fff0f7] to-[#ffe8f2] p-8 md:p-14 shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b85b85] mb-4">
            interests
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-[#2f1d26]">
            Pink things. New cities. Big dreams.
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {[
              "Travel",
              "Fashion",
              "Building",
              "Loomeira",
              "Food",
              "Design",
              "Stories",
              "Love",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/70 px-5 py-6 text-center text-[#6d3650] font-semibold shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-[#8d6476]">
        <p className="font-serif text-2xl text-[#2f1d26]">
          THE UNFINISHED SELF
        </p>
        <p className="mt-2 text-sm">
          Still becoming. Still building. Still wearing pink.
        </p>
      </footer>
    </main>
  );
}