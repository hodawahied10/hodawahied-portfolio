import { useState } from 'react'
import './Projects.css'

function Projects() {
    const projectImages = [
        {
            src: '/images/splashfinal.png',
            alt: 'Parking App Splash Screen',
        },
        {
            src: '/images/home.png',
            alt: 'Parking App Home Screen',
        },
        {
            src: '/images/spot.png',
            alt: 'Parking App Parking Spots',
        },
        {
            src: '/images/confirme.png',
            alt: 'Parking App Confirmation',
        },
        {
            src: '/images/booking.jpg',
            alt: 'Parking App Booking',
        },
        {
            src: '/images/profile.png',
            alt: 'Parking App Profile',
        },
    ]

    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <section className="projects" id="projects">
            <div className="projects-content">

                <div className="projects-header">
                    <p className="section-label">My Projects</p>

                    <h2>
                        A project I'm
                        <span>proud to build.</span>
                    </h2>

                    <p>
                        A modern parking management application built to make
                        finding and booking parking spaces simple and convenient.
                    </p>
                </div>

                <div className="project-card">

                    {/* Project Gallery */}

                    <div className="project-gallery">

                        <div className="project-main-image">
                            <img
                                src={projectImages[selectedImage].src}
                                alt={projectImages[selectedImage].alt}
                            />
                        </div>

                        <div className="project-thumbnails">

                            {projectImages.map((image, index) => (
                                <button
                                    key={image.src}
                                    className={`thumbnail ${selectedImage === index ? 'active' : ''
                                        }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* Project Information */}

                    <div className="project-info">

                        <p className="project-category">
                            Mobile Application
                        </p>

                        <h3>ParkEase — Parking App</h3>

                        <p className="project-description">
                            A modern Android parking application that allows
                            users to find available parking spaces, make
                            bookings, manage their reservations, and view
                            their booking history.
                        </p>

                        <div className="project-technologies">
                            <span>Flutter</span>
                            <span>Firebase</span>
                            <span>Clean Architecture</span>
                            <span>Cubit</span>
                        </div>

                        <a
                            href="https://github.com/hodawahied10/parking_app"
                            className="project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects