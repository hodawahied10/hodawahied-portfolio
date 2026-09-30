import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">

            {/* Logo */}

            <div className="logo">
                <span className="logo-letter">H</span>

                <span className="logo-name">
                    Hoda Wahied
                </span>
            </div>


            {/* Desktop Navigation */}

            <div className="nav-links">

                <a href="#home">Home</a>

                <a href="#about">About</a>

                <a href="#skills">Skills</a>

                <a href="#projects">Projects</a>

                <a href="#services">Services</a>

                <a href="#contact">Contact</a>

            </div>


            {/* Let's Talk */}

            <a
                href="#contact"
                className="nav-button"
            >
                Let's Talk
            </a>


            {/* Download Resume */}

            <a
                href="#"
                className="resume-button"
                onClick={(e) => e.preventDefault()}
            >
                Download My Resume
            </a>

        </nav>
    )
}

export default Navbar