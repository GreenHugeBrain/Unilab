import React, { useState } from 'react';
import petSliderData from '../jsons/petslider.js';
import '../css/PetSlider.css'

const PetCard = ({ image, title, description, category }) => (
    
    <div className="pet-card">
        <img src={image} alt={title} className="pet-image" />
        <div className="pet-content">
            <span className="pet-category">{category}</span>
            <h3 className="pet-title">{title}</h3>
            <p className="pet-description">{description}</p>
        </div>
    </div>
);

const PetsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % petSliderData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + petSliderData.length) % petSliderData.length);
    };

    return (
        <div className="slider_container">
            <div className="pets-slider">
                <div className="slider-container">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                    >
                        {[...petSliderData, ...petSliderData.slice(0, 2)].map((pet, index) => (
                            <PetCard key={index} {...pet} />
                        ))}
                    </div>
                </div>
                <button onClick={prevSlide} className="slider-button prev-button">&#8249;</button>
                <button onClick={nextSlide} className="slider-button next-button">&#8250;</button>
            </div>
        </div>
    );
};

export default PetsSlider;