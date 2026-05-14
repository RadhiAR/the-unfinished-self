"use client";

import { useState } from "react";

export default function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="siteNavbar">
        <a href="/" className="navLogo">
          <span className="logoIcon">
            <img
              src="/musemiles.png"
              alt="Muse & Miles"
              className="logoWatermark"
            />
          </span>

          <span className="brandText">Muse & Miles</span>
        </a>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/travel-diaries">Places</a>
          <a href="/life-lens">Stories</a>
          <a href="/travel-diaries/upload">Upload your trip</a>
        </div>

        <div className="navActions">
          <a href="/travel-diaries/login" className="navBtn softBtn">
            Explore
          </a>
          <a href="/" className="navBtn pinkBtn">
            Back Home
          </a>
        </div>

        <button
          type="button"
          className={`navBurger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navMobileMenu ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/travel-diaries" onClick={() => setMenuOpen(false)}>
            Places
          </a>
          <a href="/life-lens" onClick={() => setMenuOpen(false)}>
            Stories
          </a>
          <a href="/travel-diaries/upload" onClick={() => setMenuOpen(false)}>
            Upload your trip
          </a>
          <a href="/travel-diaries/login" className="menuAction softBtn" onClick={() => setMenuOpen(false)}>
            Explore
          </a>
          <a href="/" className="menuAction pinkBtn" onClick={() => setMenuOpen(false)}>
            Back Home
          </a>
        </div>
      </nav>

      <style
        dangerouslySetInnerHTML={{
          __html: `
              .siteNavbar {
                width: min(1180px, calc(100% - 48px));
                margin: 34px auto 0;
                padding: 28px 34px;
                border-radius: 44px;
                background: rgba(255, 255, 255, 0.82);
                border: 1px solid rgba(241, 196, 214, 0.9);
                box-shadow: 0 24px 60px rgba(184, 91, 133, 0.16);
                backdrop-filter: blur(18px);
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 28px;
                position: relative;
                z-index: 10;
              }

              .navLogo {
                display: inline-flex;
                align-items: center;
                gap: 14px;
                color: #6d3650;
                font-weight: 900;
                text-decoration: none;
                white-space: nowrap;
              }

              /* 🔥 BIGGER LOGO CONTAINER */
              .logoIcon {
                width: 60px;
                height: 60px;
                border-radius: 999px;
              
                display: flex;
                align-items: center;
                justify-content: center;
              
                /* 🔥 softer, premium background */
                background: radial-gradient(circle at 30% 30%, #fff4f9, #f4f8ff);
              
                box-shadow: 0 10px 26px rgba(184, 91, 133, 0.14);
              
                overflow: hidden;
              }

              /* 🔥 REAL WATERMARK FEEL */
              .logoWatermark {
                width: 100%;   /* 🔥 breathing space */
                height: 100%;
                object-fit: contain;
              
                opacity: 1;
              
                /* 🔥 REMOVE harsh darkening */
                filter:
                  contrast(1.15)
                  saturate(1.1);
              
                transition: all 0.3s ease;
              }

              .navLogo:hover .logoWatermark {
                transform: scale(1.08);
              }

              /* 🔥 BRAND TEXT POLISH */
              .brandText {
                font-size: 20px;
                letter-spacing: -0.01em;
              }

              .navLinks {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 32px;
                color: #6f5361;
                font-weight: 900;
                font-size: 15px;
              }

              .navLinks a {
                text-decoration: none;
                color: inherit;
                transition: color 0.2s ease;
              }

              .navLinks a:hover {
                color: #d9468c;
              }

              .navActions {
                display: flex;
                align-items: center;
                gap: 12px;
              }

              .navBtn {
                min-width: 132px;
                padding: 14px 22px;
                border-radius: 999px;
                text-align: center;
                text-decoration: none;
                font-size: 12px;
                font-weight: 900;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                transition: all 0.25s ease;
              }

              .softBtn {
                color: white;
                background: linear-gradient(135deg, #c084fc, #f9a8d4);
                box-shadow: 0 14px 30px rgba(192, 132, 252, 0.24);
              }

              .pinkBtn {
                color: white;
                background: linear-gradient(135deg, #d9468c, #ee79b0, #7fc8ff);
                box-shadow: 0 14px 30px rgba(217, 70, 140, 0.28);
              }

              .navBtn:hover {
                transform: translateY(-3px);
              }

              .navBurger {
                display: none;
                border: none;
                background: transparent;
                cursor: pointer;
                padding: 10px;
                border-radius: 14px;
                transition: background 0.2s ease;
              }

              .navBurger:hover {
                background: rgba(217, 70, 140, 0.08);
              }

              .navBurger span {
                display: block;
                width: 24px;
                height: 3px;
                margin: 4px 0;
                border-radius: 999px;
                background: #6f5361;
                transition: transform 0.25s ease, opacity 0.25s ease;
              }

              .navBurger.open span:nth-child(1) {
                transform: translateY(7px) rotate(45deg);
              }

              .navBurger.open span:nth-child(2) {
                opacity: 0;
              }

              .navBurger.open span:nth-child(3) {
                transform: translateY(-7px) rotate(-45deg);
              }

              .navMobileMenu {
                display: none;
                position: absolute;
                top: calc(100% + 14px);
                right: 0;
                left: 0;
                margin: 0 auto;
                width: min(320px, calc(100% - 36px));
                background: rgba(255, 255, 255, 0.98);
                border: 1px solid rgba(241, 196, 214, 0.9);
                border-radius: 24px;
                box-shadow: 0 30px 60px rgba(184, 91, 133, 0.16);
                padding: 18px;
                gap: 12px;
                z-index: 20;
                opacity: 0;
                pointer-events: none;
                transform: translateY(-10px);
                transition: opacity 0.25s ease, transform 0.25s ease;
              }

              .navMobileMenu.open {
                display: grid;
                opacity: 1;
                pointer-events: auto;
                transform: translateY(0);
              }

              .navMobileMenu a {
                display: block;
                text-decoration: none;
                color: #6f5361;
                font-weight: 900;
                padding: 14px 18px;
                border-radius: 18px;
                transition: background 0.2s ease, color 0.2s ease;
              }

              .navMobileMenu a:hover {
                background: rgba(217, 70, 140, 0.08);
                color: #d9468c;
              }

              .navMobileMenu .menuAction {
                width: 100%;
                text-align: center;
              }

              @media (max-width: 900px) {
                .siteNavbar {
                  width: calc(100% - 28px);
                  padding: 22px;
                  flex-direction: column;
                  border-radius: 30px;
                }

                .navLinks {
                  display: none;
                }

                .navActions {
                  display: none;
                }

                .navBurger {
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                }

                .navMobileMenu {
                  right: 22px;
                  top: calc(100% + 12px);
                  width: calc(100% - 44px);
                }
              }

              @media (min-width: 901px) {
                .navMobileMenu {
                  display: none !important;
                }
              }
            `,
        }}
      />
    </>
  );
}