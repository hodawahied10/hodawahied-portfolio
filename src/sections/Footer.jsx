import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="footer-logo-letter">H</span>
                        <span>Hoda Wahied</span>
                    </div>

                    <p>
                        Flutter Android Developer building modern
                        and practical mobile applications.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-social">

                    <a
                        href="https://www.linkedin.com/in/hoda-wahied"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/hodawahied10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a href="mailto:hodawahied10@gmail.com">
                        Email
                    </a>

                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Hoda Wahied. All rights reserved.
                </p>

                <span>
                    Built with Flutter & passion.
                </span>
            </div>
        </footer>
    )
}

export default Footer