import './About.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">

                <div className="about-text">
                    <p className="section-label">About Me</p>

                    <h2>
                        Building mobile experiences
                        <span>with purpose.</span>
                    </h2>

                    <p className="about-description">
                        I'm Hoda, a Flutter Android Developer passionate about
                        turning ideas into modern, practical mobile applications.
                        I focus on understanding business needs and transforming
                        them into clean and user-friendly digital experiences.
                    </p>

                    <p className="about-description">
                        With experience in Flutter, Firebase, REST APIs and
                        Clean Architecture, I build applications that are not
                        only functional, but also structured and ready to grow.
                    </p>
                </div>

                <div className="about-card">
                    <div className="about-card-icon">
                        H
                    </div>

                    <h3>Flutter Android Developer</h3>

                    <p>
                        Focused on building reliable and modern Android
                        applications.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About