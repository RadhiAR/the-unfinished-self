"use client";

import { useState } from "react";

type LocationKey = "carlsbad" | "whiteSands" | "sandia";

const carlsbadSections = [
    {
        title: "The entrance into another world",
        images: [
            "/travel/new-mexico/carlsbad-11.jpeg",
            "/travel/new-mexico/carlsbad-9.jpeg",
        ],
        text: "Carlsbad Caverns starts above ground...",
    },
];

const sandiaSections = [
    {
        title: "The ride above Albuquerque",
        images: [
            "/travel/new-mexico/sandia/sandia1.jpeg",
            "/travel/new-mexico/sandia/sandia2.jpeg",
        ],
        text: "Sandia Peak starts with the tramway slowly pulling away from the base and rising over the rocky mountains. The city begins to fall behind, the cliffs come closer, and the view keeps opening up with every minute.",
    },
    {
        title: "Mountains, cliffs, and endless sky",
        images: [
            "/travel/new-mexico/sandia/sandia3.jpeg",
            "/travel/new-mexico/sandia/sandia6.jpeg",
            "/travel/new-mexico/sandia/sandia8.jpeg",
        ],
        text: "The views from Sandia Peak are wide and dramatic without feeling overwhelming.",
    },
    {
        title: "A cold, sunny pause at the top",
        images: [
            "/travel/new-mexico/sandia/sandia4.jpeg",
            "/travel/new-mexico/sandia/sandia5.jpeg",
        ],
        text: "At the top, the mood is simple — bright sun, cold air, coffee in hand.",
    },
];

const whiteSandsSections = [
    {
        title: "Soft white dunes",
        images: ["/travel/new-mexico/white-sands-1.jpeg"],
        text: "White Sands feels almost unreal...",
    },
];

const content = {
    carlsbad: {
        title: "Carlsbad Caverns",
        description: "Underground caves and formations.",
        sections: carlsbadSections,
    },
    whiteSands: {
        title: "White Sands",
        description: "Bright dunes and soft landscape.",
        sections: whiteSandsSections,
    },
    sandia: {
        title: "Sandia Peak Tramway",
        description: "A calm mountain ride above Albuquerque.",
        sections: sandiaSections,
    },
};

export default function NewMexicoPage() {
    const [active, setActive] = useState<LocationKey>("sandia");

    const data = content[active];

    return (
        <main className="placePage">
            {/* NAVBAR */}
            <nav className="stateNavbar">
                <div className="navLeft">
                    <span>✈️ New Mexico</span>
                </div>

                <div className="navCenter">
                    <button onClick={() => setActive("carlsbad")}>Carlsbad</button>
                    <button onClick={() => setActive("whiteSands")}>White Sands</button>
                    <button onClick={() => setActive("sandia")}>Sandia Peak</button>
                </div>
            </nav>

            {/* HERO */}
            <section className="placeHero">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </section>

            {/* CONTENT */}
            <section className="storySection">
                {data.sections.map((section, i) => (
                    <div key={i} className="storyCard">
                        <div className="images">
                            {section.images.map((img) => (
                                <img key={img} src={img} />
                            ))}
                        </div>

                        <div>
                            <h2>{section.title}</h2>
                            <p>{section.text}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* SIMPLE CSS */}
            <style jsx>{`
        .placePage {
          padding: 20px;
          font-family: sans-serif;
        }

        .stateNavbar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .navCenter button {
          margin: 0 10px;
          cursor: pointer;
        }

        .placeHero {
          text-align: center;
          margin-bottom: 40px;
        }

        .storyCard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .images img {
          width: 100%;
          margin-bottom: 10px;
        }
      `}</style>
        </main>
    );
}