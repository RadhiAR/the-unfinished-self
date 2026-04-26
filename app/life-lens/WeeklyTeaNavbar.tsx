export default function WeeklyTeaNavbar() {
    return (
        <>
            <nav className="teaNavbar">
                <a href="/" className="navBrand">
                    <span className="brandMark">☕</span>
                    <span>The Weekly Tea</span>
                </a>

                <div className="navLinks">
                    <a href="#about">About</a>
                    <a href="#features">Stories</a>
                    <a href="/life-lens/chapters">Shelf</a>
                </div>

                <a href="/life-lens/chapters" className="navCta">
                    Subscribe to Write
                </a>
            </nav>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .teaNavbar {
                            position: sticky;
                            top: 18px;
                            z-index: 50;
                            width: 100%;
                            max-width: 1180px;
                            margin: 0 auto 28px;
                            padding: 12px 14px 12px 18px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 18px;
                            border-radius: 999px;
                            background: rgba(255, 255, 255, 0.82);
                            border: 1px solid #f1bfd4;
                            box-shadow: 0 18px 45px rgba(184, 91, 133, 0.16);
                            backdrop-filter: blur(16px);
                            font-family: Georgia, "Times New Roman", serif;
                        }

                        .navBrand {
                            display: inline-flex;
                            align-items: center;
                            gap: 10px;
                            font-size: 18px;
                            font-weight: 900;
                            color: #2f1d26;
                            text-decoration: none;
                            white-space: nowrap;
                        }

                        .brandMark {
                            width: 34px;
                            height: 34px;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 999px;
                            background: linear-gradient(135deg, #ffe1ef, #dff3ff);
                            box-shadow: inset 0 0 0 1px rgba(184, 91, 133, 0.18);
                        }

                        .navLinks {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 22px;
                            color: #6f5361;
                            font-size: 14px;
                            font-weight: 800;
                        }

                        .navLinks a {
                            text-decoration: none;
                            color: inherit;
                            transition: color 0.22s ease;
                        }

                        .navLinks a:hover {
                            color: #d9468c;
                        }

                        .navCta {
                            padding: 12px 20px;
                            border-radius: 999px;
                            color: white;
                            background: linear-gradient(135deg, #d9468c, #f472b6, #7fc8ff);
                            font-size: 12px;
                            font-weight: 900;
                            letter-spacing: 0.12em;
                            text-transform: uppercase;
                            text-decoration: none;
                            box-shadow: 0 14px 30px rgba(217, 70, 140, 0.28);
                            transition: transform 0.22s ease;
                            white-space: nowrap;
                        }

                        .navCta:hover {
                            transform: translateY(-3px);
                        }

                        @media (max-width: 760px) {
                            .teaNavbar {
                                position: relative;
                                top: 0;
                                flex-direction: column;
                                border-radius: 28px;
                                padding: 18px;
                            }

                            .navLinks {
                                gap: 16px;
                                flex-wrap: wrap;
                            }

                            .navCta {
                                width: 100%;
                                text-align: center;
                            }
                        }
                    `,
                }}
            />
        </>
    );
}