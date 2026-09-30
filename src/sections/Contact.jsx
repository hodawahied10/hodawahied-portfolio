import './Contact.css'

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">

                <div className="contact-info">

                    <p className="section-label">Get In Touch</p>

                    <h2>
                        Let's build something
                        <span>great together.</span>
                    </h2>

                    <p className="contact-description">
                        Have a business idea or a mobile app in mind?
                        I'd love to hear about it and discuss how we can
                        turn your idea into a practical digital experience.
                    </p>

                    <div className="contact-details">

                        {/* Email */}

                        <a
                            href="mailto:hodawahied10@gmail.com"
                            className="contact-item"
                        >
                            <span className="contact-icon">@</span>

                            <div>
                                <span className="contact-item-label">
                                    Email
                                </span>

                                <span className="contact-item-value">
                                    hodawahied10@gmail.com
                                </span>
                            </div>
                        </a>


                        {/* LinkedIn */}

                        <a
                            href="https://www.linkedin.com/in/hoda-wahied"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <span className="contact-icon">
                                in
                            </span>

                            <div>
                                <span className="contact-item-label">
                                    LinkedIn
                                </span>

                                <span className="contact-item-value">
                                    linkedin.com/in/hoda-wahied
                                </span>
                            </div>
                        </a>

                    </div>

                </div>


                <div className="contact-card">

                    <div className="contact-card-circle">
                        H
                    </div>

                    <h3>Have a project in mind?</h3>

                    <p>
                        Let's talk about your idea, your goals,
                        and how I can help bring it to life.
                    </p>

                    <a
                        href="mailto:hodawahied10@gmail.com"
                        className="contact-button"
                    >
                        Start a Conversation
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Contact