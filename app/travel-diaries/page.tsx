import "../travel/styles/travel.css";
import SiteNavbar from "../components/SiteNavbar";

export default function TravelDiaries() {
  const places = [
    "Texas",
    "Washington",
    "Ohio",
    "Colorado",
    "New Mexico",
    "California",
    "Arizona",
    "Utah",
    "Nevada",
    "Oklahoma",
    "New York",
    "Tennessee",
    "Illinois",
  ];

  const travelPartners = [
    "Airbnb",
    "Google Maps",
    "Hilton",
    "Marriott",
    "National Parks",
    "Local Cafés",
  ];

  const storyTypes = [
    "Destination Guides",
    "Stay Reviews",
    "Food Notes",
    "Road Trips",
    "Weekend Plans",
    "Photo Diaries",
  ];

  const collabPoints = [
    "Hotel & stay features",
    "Destination storytelling",
    "Food and local experience highlights",
    "Travel planning notes and guides",
  ];

  return (
    <main className="travelPage">
      <SiteNavbar />

      <section className="travelIntro">
        <div className="introText">
          <p className="pillText">Muse & Miles</p>

          <h1>Where every city becomes a little story.</h1>

          <p>
            A soft, modern travel space for places, stays, food stops, road
            chaos, pretty views, and the moments that make a trip worth
            remembering.
          </p>

          <div className="introActions">
            <a href="#places" className="primaryCta">
              Browse Places
            </a>
            <a href="#collabs" className="secondaryCta">
              Work With This Blog
            </a>
          </div>
        </div>

        <div className="introCard">
          <p className="cardTop">Current Map</p>
          <h2>Places I’ve loved, lived, and wandered through.</h2>
          <p>
            From Texas skies to California sunsets — every stop gets its own
            small chapter, practical notes, and little memories.
          </p>
        </div>
      </section>

      <section className="blogPillars">
        <div className="sectionHeader">
          <p className="eyebrow">Start here</p>
          <h2>What you’ll find on this blog.</h2>
          <p>
            Simple, organized travel content with enough detail to help someone
            plan — without making the page feel like a travel brochure.
          </p>
        </div>

        <div className="pillarGrid">
          {storyTypes.map((type) => (
            <div className="pillarCard" key={type}>
              {type}
            </div>
          ))}
        </div>
      </section>

      <section id="places" className="travelHero">
        <div className="sectionHeader centered">
          <p className="eyebrow">Choose a place</p>
          <h2>Places. Memories. Little chaos.</h2>
          <p>Pick a destination and open its travel notes in a new tab.</p>
        </div>

        <div className="placesGrid">
          {places.map((place) => {
            const slug = place.toLowerCase().replace(/\s+/g, "-");
            let href = `/travel/${slug}`;

            if (place === "Illinois") href = "/travel/illinois/chicago";
            if (place === "Nevada") href = "/travel/Nevada/vegas";
            if (place === "Colorado") href = "/travel/colorado/rocky";
            if (place === "California") href = "/travel/california";
            if (place === "New York") href = "/travel/NY";
            if (place === "Texas") href = "/travel/Texas";
            if (place === "Utah") href = "/travel/Utah";
            if (place === "Ohio") href = "/travel/Ohio";
            if (place === "Washington") href = "/travel/Washington";

            return (
              <a
                key={place}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="placeCard"
              >
                {place}
              </a>
            );
          })}
        </div>
      </section>

      <section className="splitSection">
        <div className="splitText">
          <p className="eyebrow">Travel stack</p>
          <h2>Brands, stays, and tools used along the way.</h2>
          <p>
            From planning routes to booking stays, these are the platforms and
            travel names that appear across the journey — used for comfort,
            navigation, and discovery.
          </p>
        </div>

        <div className="brandGrid">
          {travelPartners.map((brand) => (
            <div className="brandCard" key={brand}>
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section id="collabs" className="collabSection">
        <div className="splitText">
          <p className="eyebrow">For brands & stays</p>
          <h2>Built for honest storytelling, not random posting.</h2>
          <p>
            Muse & Miles is designed for travel stories that feel personal,
            useful, and visually memorable — ideal for hotel features,
            destination notes, and real experiences.
          </p>
        </div>

        <div className="planningList">
          {collabPoints.map((item) => (
            <div className="planningItem" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="moodSection">
        <p className="eyebrow">The mood</p>
        <h2>
          “Journeys that are rushed, locations chosen at the last minute… but
          somehow end up meaning the most.”
        </h2>
      </section>
    </main>
  );
}