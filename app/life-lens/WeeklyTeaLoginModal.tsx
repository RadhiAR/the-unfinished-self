"use client";

type LoginType = "read" | "write" | null;

type WeeklyTeaLoginModalProps = {
    type: LoginType;
    onClose: () => void;
};

export default function WeeklyTeaLoginModal({
    type,
    onClose,
}: WeeklyTeaLoginModalProps) {
    if (!type) return null;

    const isRead = type === "read";

    return (
        <>
            <div className="weeklyTeaModalOverlay" onClick={onClose}>
                <div
                    className="weeklyTeaModalCard"
                    onClick={(event) => event.stopPropagation()}
                >
                    <button type="button" className="weeklyTeaModalClose" onClick={onClose}>
                        ×
                    </button>

                    <img src="/logo1.png" alt="The Weekly Tea Logo" className="weeklyTeaModalLogo" />

                    <p className="weeklyTeaModalEyebrow">
                        {isRead ? "Reader Access" : "Writer Access"}
                    </p>

                    <h2>{isRead ? "Subscribe to Read" : "Subscribe to Write"}</h2>

                    <p className="weeklyTeaModalText">
                        {isRead
                            ? "Log in or subscribe to read weekly stories, reflections, and personal essays."
                            : "Tell us a little about your writing world before you begin publishing on The Weekly Tea."}
                    </p>

                    <form className="weeklyTeaModalForm">


                        {!isRead && (
                            <>
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                                <input type="text" placeholder="Where are you located?" />
                                <input type="text" placeholder="Contact Number" />
                                <input type="email" placeholder="Email address" />
                                <input type="password" placeholder="Password" />
                                <input type="email" placeholder="Confirm Password" />
                                ß

                                <select defaultValue="">
                                    <option value="" disabled>
                                        What genre do you want to write in?
                                    </option>
                                    <option value="personal-essay">Personal Essay</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="poetry">Poetry</option>
                                    <option value="romance">Romance</option>
                                    <option value="self-growth">Self Growth</option>
                                    <option value="journal">Journal / Diary</option>
                                    <option value="other">Other</option>
                                </select>

                                <select defaultValue="">
                                    <option value="" disabled>
                                        What are you creating?
                                    </option>
                                    <option value="weekly-book">Weekly Book</option>
                                    <option value="weekly-diary">Weekly Diary</option>
                                    <option value="weekly-column">Weekly Column</option>
                                    <option value="short-stories">Short Stories</option>
                                    <option value="life-notes">Life Notes</option>
                                </select>

                                <textarea placeholder="What motivated you to write?" />
                            </>
                        )}

                        <button type="submit">
                            {isRead ? "Continue to Read" : "Continue to Write"}
                        </button>
                    </form>

                    <p className="weeklyTeaLoginPrompt">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .weeklyTeaModalOverlay {
                            position: fixed;
                            inset: 0;
                            z-index: 9999;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 24px;
                            background: rgba(47, 29, 38, 0.42);
                            backdrop-filter: blur(10px);
                            overflow-y: auto;
                        }

                        .weeklyTeaModalCard {
                            position: relative;
                            width: 100%;
                            max-width: 560px;
                            max-height: 92vh;
                            overflow-y: auto;
                            padding: 34px 30px 30px;
                            border-radius: 34px;
                            background: rgba(255, 255, 255, 0.95);
                            border: 1px solid #f1bfd4;
                            box-shadow: 0 30px 80px rgba(117, 59, 87, 0.28);
                            text-align: center;
                            font-family: Georgia, "Times New Roman", serif;
                        }

                        .weeklyTeaModalClose {
                            position: absolute;
                            top: 16px;
                            right: 18px;
                            width: 34px;
                            height: 34px;
                            border: none;
                            border-radius: 999px;
                            background: #fff3f8;
                            color: #8b4d68;
                            font-size: 24px;
                            cursor: pointer;
                        }

                        .weeklyTeaModalLogo {
                            height: 95px;
                            width: auto;
                            object-fit: contain;
                            margin: 0 auto 8px;
                            display: block;
                        }

                        .weeklyTeaModalEyebrow {
                            margin: 0 0 8px;
                            color: #d9468c;
                            font-size: 12px;
                            font-weight: 900;
                            letter-spacing: 0.16em;
                            text-transform: uppercase;
                        }

                        .weeklyTeaModalCard h2 {
                            margin: 0;
                            color: #2f1d26;
                            font-size: 30px;
                        }

                        .weeklyTeaModalText {
                            margin: 12px auto 22px;
                            max-width: 420px;
                            color: #76596a;
                            font-size: 14px;
                            line-height: 1.6;
                        }

                        .weeklyTeaModalForm {
                            display: grid;
                            gap: 12px;
                        }

                        .weeklyTeaModalForm input,
                        .weeklyTeaModalForm select,
                        .weeklyTeaModalForm textarea {
                            width: 100%;
                            padding: 14px 16px;
                            border-radius: 999px;
                            border: 1px solid #f0bfd3;
                            background: #fff9fc;
                            color: #2f1d26;
                            outline: none;
                            font-family: Georgia, "Times New Roman", serif;
                            font-size: 14px;
                        }

                        .weeklyTeaModalForm textarea {
                            min-height: 110px;
                            border-radius: 24px;
                            resize: vertical;
                        }

                        .weeklyTeaModalForm input:focus,
                        .weeklyTeaModalForm select:focus,
                        .weeklyTeaModalForm textarea:focus {
                            border-color: #d9468c;
                            box-shadow: 0 0 0 4px rgba(217, 70, 140, 0.1);
                        }

                        .weeklyTeaModalForm button {
                            margin-top: 6px;
                            padding: 14px 18px;
                            border: none;
                            border-radius: 999px;
                            color: white;
                            cursor: pointer;
                            font-size: 12px;
                            font-weight: 900;
                            letter-spacing: 0.12em;
                            text-transform: uppercase;
                            font-family: Georgia, "Times New Roman", serif;
                            background: linear-gradient(135deg, #d9468c, #f472b6, #7fc8ff);
                            box-shadow: 0 16px 34px rgba(217, 70, 140, 0.25);
                        }

                        .weeklyTeaLoginPrompt {
                            margin: 18px 0 0;
                            color: #76596a;
                            font-size: 14px;
                        }

                        .weeklyTeaLoginPrompt a {
                            color: #d9468c;
                            font-weight: 900;
                            text-decoration: none;
                        }

                        @media (max-width: 600px) {
                            .weeklyTeaModalCard {
                                max-width: 100%;
                                padding: 30px 20px 26px;
                                border-radius: 28px;
                            }

                            .weeklyTeaModalLogo {
                                height: 80px;
                            }
                        }
                    `,
                }}
            />
        </>
    );
}