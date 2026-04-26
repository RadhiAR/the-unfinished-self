"use client";

import { useState } from "react";
import WeeklyTeaLoginModal from "./WeeklyTeaLoginModal";

export default function WeeklyTeaNavbar() {
    const [loginType, setLoginType] = useState<"read" | "write" | null>(null);

    return (
        <>
            <nav className="teaNavbar">
                <a href="/" className="navBrand">
                    <img
                        src="/logo1.png"
                        alt="The Weekly Tea Logo"
                        className="brandLogo"
                    />
                </a>

                <div className="navLinks">
                    <a href="#about">About</a>
                    <a href="#features">Stories</a>
                    <a href="/life-lens/chapters">Shelf</a>
                </div>

                <div className="navActions">
                    <button
                        type="button"
                        className="navCta navCtaRead"
                        onClick={() => setLoginType("read")}
                    >
                        Click to Read
                    </button>

                    <button
                        type="button"
                        className="navCta navCtaWrite"
                        onClick={() => setLoginType("write")}
                    >
                        Click to Write
                    </button>
                </div>
            </nav>

            <WeeklyTeaLoginModal
                type={loginType}
                onClose={() => setLoginType(null)}
            />

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
                            padding: 8px 18px;
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
                            display: flex;
                            align-items: center;
                            text-decoration: none;
                        }

                        .brandLogo {
                            height: 100px;
                            width: auto;
                            object-fit: contain;
                            display: block;
                            opacity: 0.96;
                            transition: transform 0.25s ease;
                        }

                        .brandLogo:hover {
                            transform: scale(1.04);
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

                        .navActions {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            flex-shrink: 0;
                        }

                        .navCta {
                            border: none;
                            cursor: pointer;
                            padding: 12px 18px;
                            border-radius: 999px;
                            color: white;
                            font-size: 11px;
                            font-weight: 900;
                            letter-spacing: 0.11em;
                            text-transform: uppercase;
                            text-decoration: none;
                            box-shadow: 0 14px 30px rgba(217, 70, 140, 0.22);
                            transition: transform 0.22s ease, box-shadow 0.22s ease;
                            white-space: nowrap;
                            font-family: Georgia, "Times New Roman", serif;
                        }

                        .navCtaRead {
                            background: linear-gradient(135deg, #b783ff, #f0a6ca, #ffd1e3);
                        }

                        .navCtaWrite {
                            background: linear-gradient(135deg, #d9468c, #f472b6, #7fc8ff);
                        }

                        .navCta:hover {
                            transform: translateY(-3px);
                        }

                        @media (max-width: 900px) {
                            .teaNavbar {
                                position: relative;
                                top: 0;
                                flex-direction: column;
                                border-radius: 34px;
                                padding: 20px;
                            }

                            .brandLogo {
                                height: 85px;
                            }

                            .navLinks {
                                gap: 16px;
                                flex-wrap: wrap;
                            }

                            .navActions {
                                width: 100%;
                                justify-content: center;
                                flex-wrap: wrap;
                            }

                            .navCta {
                                flex: 1;
                                min-width: 190px;
                            }
                        }
                    `,
                }}
            />
        </>
    );
}