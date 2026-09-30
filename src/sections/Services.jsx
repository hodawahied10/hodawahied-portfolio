import './Services.css'

function Services() {
    return (
        <section className="services" id="services">
            <div className="services-content">

                <div className="services-header">
                    <p className="section-label">What I Do</p>

                    <h2>
                        Turning ideas into
                        <span>mobile experiences.</span>
                    </h2>

                    <p>
                        I help turn business ideas into practical,
                        modern, and user-friendly Android applications.
                    </p>
                </div>

                <div className="services-grid">

                    <div className="service-card">
                        <span className="service-number">01</span>

                        <h3>Android App Development</h3>

                        <p>
                            Building modern and user-friendly Android
                            applications using Flutter.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-number">02</span>

                        <h3>Firebase Integration</h3>

                        <p>
                            Integrating authentication, database, and
                            cloud services into mobile applications.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-number">03</span>

                        <h3>REST API Integration</h3>

                        <p>
                            Connecting mobile applications with backend
                            services through REST APIs.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-number">04</span>

                        <h3>App UI Development</h3>

                        <p>
                            Creating modern and user-friendly Flutter
                            interfaces with a clean and responsive design.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services