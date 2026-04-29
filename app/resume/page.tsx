export default function ResumePage() {
    return (
        <main className="resumePage">
            <section className="heroSection">
                <div className="heroText">
                    <p className="eyebrow">Welcome to my world</p>
                    <h1>
                        Hi, I’m <span>Radhika Addanki</span>
                    </h1>
                    <h2>Software Developer</h2>
                    <p className="summary">
                        Focused on building scalable backend systems using Java, REST APIs, and cloud-based architectures, with experience in enterprise integrations, distributed systems, and performance optimization. Comfortable working across full-stack environments, ensuring seamless interaction between backend services and responsive user interfaces.
                        Strong foundation in microservices, API design, and system reliability, with a focus on writing clean, maintainable code and delivering efficient, production-ready solutions.
                    </p>

                    <div className="buttonRow">
                        <a href="#experience" className="primaryBtn">
                            View Experience
                        </a>
                        <a href="/resume.pdf" className="secondaryBtn" target="_blank">
                            Download CV ↓
                        </a>
                    </div>
                </div>
            </section>
            <section className="skillsSection">
                <div className="sectionIntro">
                    <p className="eyebrow">Core Expertise</p>
                    <h2>SKILLS</h2>
                    <p>
                        A blend of backend engineering, cloud architecture, and full-stack development tools
                        that enable me to build scalable, reliable, and production-ready systems.
                    </p>
                </div>

                <div className="skillsGrid">
                    <div className="skillCard">
                        <h4>Languages</h4>
                        <p>Java, JavaScript, TypeScript, SQL, C++, HTML, CSS, Node.js</p>
                    </div>

                    <div className="skillCard">
                        <h4>Frameworks & Tools</h4>
                        <p>Spring Boot, React, KnockoutJS, Node.js, Postman, Git, GitHub, JIRA, VS Code, IntelliJ</p>
                    </div>

                    <div className="skillCard">
                        <h4>Cloud & DevOps</h4>
                        <p>AWS (Lambda, API Gateway, S3, CodePipeline), Kafka, SAP CPI</p>
                    </div>

                    <div className="skillCard">
                        <h4>Databases</h4>
                        <p>PostgreSQL, MongoDB, Azure SQL, DynamoDB</p>
                    </div>

                    <div className="skillCard">
                        <h4>Concepts</h4>
                        <p>RESTful APIs, Microservices, CI/CD, Exception Handling, Performance Optimization, Accessibility, Agile/Scrum</p>
                    </div>
                </div>
            </section>
            <section id="experience" className="contentSection">
                <div className="sectionIntro">
                    <p className="eyebrow">About Resume</p>
                    <h2>WORK EXPERIENCE</h2>
                    <p>
                        A clean snapshot of my technical journey, the systems I’ve worked on,
                        and the skills I bring into every project.
                    </p>
                </div>

                <div className="cardsGrid">
                    <article className="infoCard">
                        <span>01</span>
                        <h3>Aspire Digital LLC</h3>
                        <h4>Senior Software Engineer (January 2025 - January 2026)</h4>
                        <p>• Designed and enhanced backend modules for enterprise quote-to-cash automation using Java-based REST APIs and data integration workflows to streamline multi-region business operations.<br></br>
                            • Built modular, object-oriented business logic and reusable service components to improve code maintainability and scalability.<br></br>
                            • Integrated SAP systems and third-party CRMs through middleware APIs (CPI, REST), ensuring secure and reliable synchronization of pricing and customer data.<br></br>
                            • Partnered with UI teams to optimize interactive quote configurators using KnockoutJS, HTML5, and CSS, enhancing user responsiveness and efficiency.<br></br>
                            • Conducted code reviews, performance tuning, and exception handling, reducing latency and post-release issues.<br></br>
                            • Mentored developers and contributed to Agile sprint planning, strengthening delivery velocity and team cohesion.</p>
                        <h4>Software Developer (April 2024 - January 2025)</h4>
                        <p>• Developed backend services and automation logic supporting quoting and approval workflows using Java and RESTful APIs.<br></br>
                            • Implemented multi-currency and multi-language computation logic for document generation across international markets.<br></br>
                            • Created responsive UI components with KnockoutJS, HTML, and CSS, integrating front-end features with backend APIs.<br></br>
                            • Performed API validation, performance testing, and exception handling to ensure reliability during integrations.<br></br>
                            • Supported cross-functional deployment efforts, achieving faster ticket resolution and higher system stability.
                        </p>
                    </article>

                    <article className="infoCard">
                        <span>02</span>
                        <h3>Amazon</h3>
                        <h4>Senior Software Engineer (August 2022 - March 2023)</h4>
                        <p>• Built and optimized LIFT, Amazon’s internal HR evaluation platform, used by HRBPs and managers to assess team performance and potential.<br></br>
                            • Developed high-quality front-end components using React, TypeScript, and JavaScript, improving application responsiveness and accessibility.<br></br>
                            • Enhanced web accessibility through ARIA attributes and WCAG-compliant design, ensuring inclusivity and alignment with corporate accessibility goals.<br></br>
                            • Automated deployment workflows with AWS CodePipeline, CodeBuild, and CodeDeploy, ensuring smooth multi-tenant releases and rollback automation.<br></br>
                            • Developed and maintained event-driven AWS Lambda functions with API Gateway and S3 triggers to validate and process employee data stored in DynamoDB.<br></br>
                            • Proactively resolved pipeline issues and optimized build stages, reducing deployment errors and improving CI/CD throughput.</p>
                    </article>
                </div>
            </section>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
              * {
                box-sizing: border-box;
              }

              body {
                margin: 0;
                background: #eef6ff;
              }

              a {
                text-decoration: none;
              }

              .resumePage {
                min-height: 100vh;
                font-family: Georgia, "Times New Roman", serif;
                color: #10243d;
                background:
                  radial-gradient(circle at 12% 12%, rgba(255, 214, 233, 0.62), transparent 30%),
                  radial-gradient(circle at 86% 10%, rgba(209, 236, 255, 0.95), transparent 32%),
                  linear-gradient(180deg, #f8fbff 0%, #eaf5ff 54%, #fff7fb 100%);
              }

              .heroSection {
                width: 100%;
                min-height: 100vh;
                padding: 90px 10%;
                display: grid;
                grid-template-columns: 1fr; /* changed */
                align-items: center;
                justify-content: center; /* added */
                text-align: center; /* added */
                gap: 70px;
                position: relative;
                overflow: hidden;
              }

              .heroSection::before {
                content: "RESUME";
                position: absolute;
                left: -46px;
                top: 100px;
                writing-mode: vertical-rl;
                font-size: 96px;
                font-weight: 900;
                letter-spacing: 0.08em;
                color: rgba(16, 36, 61, 0.05);
              }

              .heroText {
                position: relative;
                z-index: 2;
                margin: 0 auto; /* added */
                max-width: 700px; /* added */
              }

              .eyebrow {
                margin: 0 0 18px;
                color: #d9468c;
                font-size: 13px;
                font-weight: 900;
                letter-spacing: 0.18em;
                text-transform: uppercase;
              }

              h1 {
                margin: 0;
                font-size: clamp(52px, 6vw, 92px);
                line-height: 0.98;
                letter-spacing: -0.06em;
                color: #10243d;
              }

              h1 span {
                color: #e10083;
              }

              .heroText h2 {
                margin: 14px 0 0;
                font-size: clamp(30px, 3.6vw, 56px);
                line-height: 1;
                color: #10243d;
              }

              .summary {
                max-width: 620px;
                margin: 28px auto 0; /* centered */
                color: #6b7280;
                font-size: 18px;
                line-height: 1.8;
              }

              .buttonRow {
                margin-top: 38px;
                display: flex;
                justify-content: center; /* centered */
                gap: 18px;
                flex-wrap: wrap;
              }

              .primaryBtn,
              .secondaryBtn {
                min-width: 170px;
                padding: 15px 28px;
                border-radius: 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 13px;
                font-weight: 900;
                letter-spacing: 0.04em;
                transition: all 0.25s ease;
              }

              .primaryBtn {
                color: white;
                background: linear-gradient(135deg, #e10083, #7c3aed);
                box-shadow: 0 18px 36px rgba(225, 0, 131, 0.28);
              }

              .secondaryBtn {
                color: #10243d;
                background: rgba(255, 255, 255, 0.85);
                border: 1px solid rgba(16, 36, 61, 0.08);
                box-shadow: 0 14px 30px rgba(16, 36, 61, 0.08);
              }

              .primaryBtn:hover,
              .secondaryBtn:hover {
                transform: translateY(-4px);
              }

              /* REMOVED heroVisual section only */

              .contentSection {
                padding: 30px 10% 90px; /* reduced top */
                background: rgba(255, 255, 255, 0.42);
                display: grid;
                grid-template-columns: 0.8fr 1.2fr;
                gap: 46px;
                align-items: start;
              }

              .sectionIntro h2 {
                margin: 0;
                font-size: clamp(36px, 4vw, 58px);
                line-height: 1.05;
                letter-spacing: -0.045em;
                color: #10243d;
              }

              .sectionIntro h2::first-letter {
                color: #e10083;
              }

              .sectionIntro p:last-child {
                margin: 24px 0 0;
                color: #6b7280;
                font-size: 17px;
                line-height: 1.8;
              }

              .cardsGrid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 18px;
              }

              .infoCard {
                padding: 30px;
                border-radius: 28px;
                background: rgba(255, 255, 255, 0.82);
                border: 1px solid rgba(241, 196, 214, 0.75);
                box-shadow: 0 20px 46px rgba(16, 36, 61, 0.08);
              }

              .infoCard span {
                color: #e10083;
                font-weight: 900;
                letter-spacing: 0.2em;
                font-size: 12px;
              }

              .infoCard h3 {
                margin: 12px 0 0;
                color: #10243d;
                font-size: 26px;
              }

              .infoCard p {
                margin: 12px 0 0;
                color: #6b7280;
                font-size: 16px;
                line-height: 1.7;
              }
              .skillsSection {
                padding: 60px 10% 30px; /* reduced bottom */
                background: rgba(255, 255, 255, 0.55);
                display: grid;
                grid-template-columns: 0.8fr 1.2fr;
                gap: 46px;
                align-items: start;
              }
              
              .skillsGrid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 18px;
              }
              
              .skillCard {
                padding: 24px;
                border-radius: 22px;
                background: rgba(255, 255, 255, 0.85);
                border: 1px solid rgba(241, 196, 214, 0.7);
                box-shadow: 0 16px 36px rgba(16, 36, 61, 0.08);
                transition: transform 0.2s ease;
              }
              
              .skillCard:hover {
                transform: translateY(-4px);
              }
              
              .skillCard h4 {
                margin: 0;
                font-size: 18px;
                color: #e10083;
                letter-spacing: 0.05em;
              }
              
              .skillCard p {
                margin-top: 10px;
                font-size: 15px;
                color: #6b7280;
                line-height: 1.6;
              }
              
              @media (max-width: 900px) {
                .skillsSection {
                  padding: 70px 24px;
                  grid-template-columns: 1fr;
                }
              
                .skillsGrid {
                  grid-template-columns: 1fr;
                }
              }
              @media (max-width: 900px) {
                .heroSection {
                  padding: 70px 24px;
                  grid-template-columns: 1fr;
                  gap: 35px;
                }

                .contentSection {
                  padding: 70px 24px;
                  grid-template-columns: 1fr;
                }

                .heroSection::before {
                  display: none;
                }
              }
            `,
                }}
            />
        </main>
    );
}