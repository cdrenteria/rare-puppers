import React from "react"
import PuppyCollage from "../images/dog-collage.png"

export default function Hero() {
    return (
        <nav className="hero">
            <img src={PuppyCollage} className="photo-grid"></img>
            <div className="hero-text">
                <h1>Special needs dogs looking for their forever home.</h1>
                <h4>Sometimes life deals them a rough hand at birth, other times it shows the worst of what humanity has to offer, but they always have more love to give.</h4>
            </div>
        </nav>
    )
}