import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Hero = () => {
    const text = "Welcome to Science College ";

    const TypingEffect = () => {
        const [displayedText, setDisplayedText] = useState("");

        useEffect(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                if (i === text.length) clearInterval(interval);
            }, 80);
            return () => clearInterval(interval);
        }, []);

        return <h1>{displayedText}</h1>;
    };

    return (
        <div>
            <main>
                <div className="text-box">
                    <TypingEffect />
                    <p>
                        Science College is dedicated to fostering curiosity, innovation, and academic excellence. Our vibrant community empowers students to explore the wonders of science and achieve their full potential.
                    </p>
                    <Link to="/Contact" className="hero-btn">Contact Us Here</Link>
                </div>
            </main>
        </div>
    )
}

export default Hero;