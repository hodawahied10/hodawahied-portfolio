import './Hero.css'
function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-greeting">Hello, I'm Hoda ✨</p>

                <h1>
                    Flutter Android
                    <span>Developer</span>
                </h1>

                <p className="hero-description">
                    I build modern Android applications that turn business ideas
                    into practical digital experiences.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="primary-button">
                        View My Work
                    </a>

                    <a href="#contact" className="secondary-button">
                        Let's Talk
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-circle">
                    <span>H</span>
                </div>
            </div>
        </section>
    )
}

export default Hero