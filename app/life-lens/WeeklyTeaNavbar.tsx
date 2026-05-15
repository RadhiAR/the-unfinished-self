"use client";

import { useEffect, useState } from "react";
import WeeklyTeaLoginModal from "./WeeklyTeaLoginModal";
import styles from "./lifeLens.module.css";

type WeeklyTeaUser = {
    firstName: string;
    lastName: string;
    location: string;
    contact: string;
    email: string;
};

export default function WeeklyTeaNavbar() {
    const [loginType, setLoginType] = useState<"read" | "write" | null>(null);
    const [user, setUser] = useState<WeeklyTeaUser | null>(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    function loadUser() {
        try {
            const savedUser = window.localStorage.getItem("weeklyTeaUser");

            if (!savedUser) {
                setUser(null);
                return;
            }

            setUser(JSON.parse(savedUser));
        } catch {
            window.localStorage.removeItem("weeklyTeaUser");
            setUser(null);
        }
    }

    useEffect(() => {
        loadUser();
        window.addEventListener("weeklyTeaUserUpdated", loadUser);

        return () => {
            window.removeEventListener("weeklyTeaUserUpdated", loadUser);
        };
    }, []);

    function handleSignOut() {
        window.localStorage.removeItem("weeklyTeaUser");
        setUser(null);
        setShowUserMenu(false);
    }

    return (
        <>
            <nav className={styles.teaNavbar}>
                <a href="/" className={styles.navBrand}>
                    <img
                        src="/logo1.png"
                        alt="The Weekly Tea Logo"
                        className={styles.brandLogo}
                    />
                </a>

                <div className={styles.navLinks}>
                    <a href="#about">About</a>
                    <a href="#features">Stories</a>
                    <a href="/life-lens/chapters">Shelf</a>
                </div>

                <div className={styles.navActions}>
                    <button
                        type="button"
                        className={`${styles.navCta} ${styles.navCtaRead}`}
                        onClick={() => setLoginType("read")}
                    >
                        Click to Read
                    </button>

                    <button
                        type="button"
                        className={`${styles.navCta} ${styles.navCtaWrite}`}
                        onClick={() => setLoginType("write")}
                    >
                        Click to Write
                    </button>

                    {user && (
                        <div className={styles.userMenuWrap}>
                            <button
                                type="button"
                                className={styles.userIconBtn}
                                onClick={() => setShowUserMenu(!showUserMenu)}
                            >
                                👤
                            </button>

                            {showUserMenu && (
                                <div className={styles.userDropdown}>
                                    <h4>
                                        {user.firstName} {user.lastName}
                                    </h4>

                                    <p>{user.email}</p>
                                    <p>{user.location}</p>
                                    <p>{user.contact}</p>

                                    <button type="button" onClick={handleSignOut}>
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            <WeeklyTeaLoginModal type={loginType} onClose={() => setLoginType(null)} />
        </>
    );
}