export default function SiteNavbar() {
  return (
    <>
      <nav className="siteNavbar">
        <a href="/" className="navLogo">
          <span className="logoIcon">✈️</span>
          <span>Muse & Miles</span>
        </a>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/travel-diaries">Places</a>
          <a href="/life-lens">Stories</a>
        </div>

        <div className="navActions">
          <a href="/travel-diaries" className="navBtn softBtn">
            Explore
          </a>
          <a href="/" className="navBtn pinkBtn">
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
                gap: 10px;
                color: #6d3650;
                font-weight: 900;
                font-size: 18px;
                text-decoration: none;
                white-space: nowrap;
              }
  
              .logoIcon {
                width: 42px;
                height: 42px;
                border-radius: 999px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #ffd6e9, #dff3ff);
                box-shadow: 0 10px 24px rgba(184, 91, 133, 0.16);
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
  
              @media (max-width: 900px) {
                .siteNavbar {
                  width: calc(100% - 28px);
                  padding: 22px;
                  flex-direction: column;
                  border-radius: 30px;
                }
  
                .navLinks {
                  flex-wrap: wrap;
                  gap: 18px;
                }
  
                .navActions {
                  width: 100%;
                  flex-direction: column;
                }
  
                .navBtn {
                  width: 100%;
                }
              }
            `,
        }}
      />
    </>
  );
}