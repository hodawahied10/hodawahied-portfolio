import './Skills.css'

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills-content">

                <div className="skills-header">
                    <p className="section-label">My Skills</p>

                    <h2>
                        Tools I use to
                        <span>build great apps.</span>
                    </h2>

                    <p>
                        Technologies and tools I use to turn ideas into
                        modern, functional Android applications.
                    </p>
                </div>

                <div className="skills-grid">

                    <div className="skill-card">
                        <h3>Flutter</h3>
                        <p>Cross-platform UI development</p>
                    </div>

                    <div className="skill-card">
                        <h3>Dart</h3>
                        <p>Clean and maintainable application logic</p>
                    </div>

                    <div className="skill-card">
                        <h3>Firebase</h3>
                        <p>Authentication and cloud data services</p>
                    </div>

                    <div className="skill-card">
                        <h3>Database</h3>
                        <p>Data storage and management</p>
                    </div>


                    <div className="skill-card">
                        <h3>State Management</h3>
                        <p>Managing application state with Cubit and Bloc</p>
                    </div>

                    <div className="skill-card">
                        <h3>REST API</h3>
                        <p>Connecting applications with backend services</p>
                    </div>

                    <div className="skill-card">
                        <h3>Clean Architecture</h3>
                        <p>Organized and scalable project structure</p>
                    </div>

                    <div className="skill-card">
                        <h3>Git & GitHub</h3>
                        <p>Version control and project collaboration</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills