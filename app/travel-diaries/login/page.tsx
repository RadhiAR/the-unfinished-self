import "../../travel/styles/travel.css";
import SiteNavbar from "../../components/SiteNavbar";

export default function MuseMilesLogin() {
    return (
        <main className="travelPage">
            <SiteNavbar />

            <section className="authSection">
                <div className="authIntro">
                    <p className="pillText">Muse & Miles</p>
                    <h1>Sign in to your travel account.</h1>
                    <p>
                        Welcome back! Sign in to access your saved travel stories, receive updates on new places, and continue your journey.
                    </p>
                </div>

                <div className="authCard">
                    <div className="authTabs">
                        <button className="authTab activeTab" type="button">
                            Sign Up
                        </button>
                        <button className="authTab" type="button">
                            Login
                        </button>
                    </div>

                    <form className="authForm">
                        <div className="formGrid">
                            <label>
                                First Name
                                <input type="text" name="firstName" placeholder="First name" />
                            </label>

                            <label>
                                Last Name
                                <input type="text" name="lastName" placeholder="Last name" />
                            </label>
                        </div>

                        <label>
                            Email
                            <input type="email" name="email" placeholder="you@example.com" />
                        </label>

                        <label>
                            Country of Living
                            <input
                                type="text"
                                name="country"
                                placeholder="Country you live in"
                            />
                        </label>

                        <label>
                            Phone Number <span className="optionalText">(optional)</span>
                            <input type="tel" name="phone" placeholder="Phone number" />
                        </label>

                        <label>
                            Password
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a password"
                            />
                        </label>

                        <div className="checkboxGroup">
                            <label className="checkboxRow">
                                <input type="checkbox" name="subscribe" />
                                <span>Subscribe for updates on new travel places.</span>
                            </label>

                            <label className="checkboxRow">
                                <input type="checkbox" name="terms" />
                                <span>
                                    I agree to the{" "}
                                    <a href="/travel-diaries/terms" target="_blank">
                                        terms and conditions
                                    </a>
                                    .
                                </span>
                            </label>

                            <label className="checkboxRow">
                                <input type="checkbox" name="rememberMe" />
                                <span>Remember me</span>
                            </label>
                        </div>

                        <button className="createAccountBtn" type="submit">
                            Create Account
                        </button>

                        <p className="loginNote">
                            Already have an account? <a href="/travel-diaries/login">Login</a>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}