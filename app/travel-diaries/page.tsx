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
    "City Guides",
    "Stay Reviews",
    "Food Stops",
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
    <>
      <main className="travelPage">
        <SiteNavbar />

        {/* INTRO */}
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

        {/* BLOG PILLARS */}
        <section className="blogPillars">
          <p className="eyebrow">What you’ll find here</p>
          <h2>Travel stories with useful details.</h2>

          <div className="pillarGrid">
            {storyTypes.map((type) => (
              <div className="pillarCard" key={type}>
                {type}
              </div>
            ))}
          </div>
        </section>

        {/* PLACES */}
        <section id="places" className="travelHero">
          <p className="eyebrow">Choose a place</p>

          <h1>Places. Memories. Little chaos.</h1>

          <div className="placesGrid">
            {places.map((place) => {
              const slug = place.toLowerCase().replace(/\s+/g, "-");

              let href = `/travel/${slug}`;

              if (place === "Illinois") {
                href = "/travel/illinois/chicago";
              }
              if (place === "Nevada") {
                href = "/travel/Nevada/vegas";
              }
              if (place === "Colorado") {
                href = "/travel/colorado/rocky";
              }
              if (place === "California") {
                href = "/travel/california";
              }
              if (place === "New York") {
                href = "/travel/NY";
              }
              if (place === "Texas") {
                href = "/travel/Texas";
              }
              if (place === "Utah") {
                href = "/travel/Utah";
              }
              if (place === "Ohio") {
                href = "/travel/Ohio";
              }
              if (place === "Washington") {
                href = "/travel/Washington";
              }

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

        {/* BRANDS / TOOLS */}
        <section className="brandStack">
          <div className="brandText">
            <p className="eyebrow">Travel stack</p>
            <h2>Brands, stays, and tools used along the way.</h2>
            <p>
              From planning routes to booking stays, these are the platforms and
              travel names that appear across the journey — used for stays,
              maps, comfort, convenience, and discovery.
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

        {/* COLLAB SECTION */}
        <section id="collabs" className="collabSection">
          <div className="collabLeft">
            <p className="eyebrow">For brands & stays</p>
            <h2>Built for storytelling, not just posting.</h2>
            <p>
              Muse & Miles is shaped for travel stories that feel personal,
              useful, and visually memorable — the kind of content that helps a
              place, stay, or experience feel worth entering.
            </p>
          </div>

          <div className="collabRight">
            {collabPoints.map((item) => (
              <div className="collabItem" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* MOOD */}
        <section className="moodSection">
          <p className="eyebrow">The mood</p>

          <h2>
            “Journeys that are rushed, locations chosen at the last minute… but
            somehow end up meaning the most.”
          </h2>
        </section>
      </main>
    </>
  );
}