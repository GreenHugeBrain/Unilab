import React, { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ManyDogs from '../assets/manydogs.svg';
import Filter from '../components/Filter.jsx';
import css from '../css/Category.module.css';
import petsData from '../jsons/category_pets.js';

const CategoryBanner = () => (
    <div className={css.category_banner}>
        <div className={css.rects}>
            <div className={css.rect1}></div>
        </div>
        <div className={css.category_component}>
            <div className={css.category_banner_img}>
                <img src={ManyDogs} alt="ManyDogs" />
            </div>
            <div className={css.category_banner_texts}>
                <h1>One more friend</h1>
                <h2>Thousands more fun!</h2>
                <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                <div className={css.category_banner_btns}>
                    <button>View Intro</button>
                    <button>Explore Now</button>
                </div>
            </div>
        </div>
    </div>
)

const Category = () => {
    const [filteredPets, setFilteredPets] = useState(petsData);
    const [filters, setFilters] = useState({
        gender: [],
        color: [],
        breed: [],
        minPrice: 0,
        maxPrice: Infinity,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const petsPerPage = 6; 

    const applyFilters = () => {
        let newFilteredPets = petsData.filter(pet => {
            const matchGender = filters.gender.length === 0 || filters.gender.includes(pet.gender.toLowerCase());
            const matchColor = filters.color.length === 0 || filters.color.some(color => pet.breed.toLowerCase().includes(color));
            const matchBreed = filters.breed.length === 0 || filters.breed.includes(pet.breed.toLowerCase());
            const matchPrice = (parseFloat(pet.price.replace(/\./g, '')) >= filters.minPrice) && (parseFloat(pet.price.replace(/\./g, '')) <= filters.maxPrice);

            return matchGender && matchColor && matchBreed && matchPrice;
        });

        setFilteredPets(newFilteredPets);
    };

    const updateFilter = (type, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: prevFilters[type].includes(value) ? prevFilters[type].filter(v => v !== value) : [...prevFilters[type], value]
        }));
    };

    const updatePriceFilter = (min, max) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            minPrice: min,
            maxPrice: max,
        }));
    };

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredPets.length / petsPerPage);

    return (
        <>
            <Header />
            <main>
                <CategoryBanner />
                <div className={css.main_headline}>
                    <div className={css.headline_first}>
                        <p>Filter</p>
                        <p>Small Dog</p>
                        <p>{filteredPets.length} puppies</p>
                    </div>
                    <div>
                        <button className={css.headline_btn}>Sort by: Popular</button>
                    </div>
                </div>
                <div className={css.main_content}>
                    <div className={css.main_filter}>
                        <Filter updateFilter={updateFilter} updatePriceFilter={updatePriceFilter} />
                    </div>
                    <div className={css.main_pets}>
                        {currentPets.map((pet) => (
                            <a href={`/pets/${pet.id}`} className={css.petCard} key={pet.id}>
                                <img src={pet.src} alt={pet.breed} />
                                <h3>{pet.id} - {pet.breed}</h3>
                                <p>Gender: {pet.gender} ▫ Age: {pet.age}</p>
                                <p>{pet.price} {pet.currency}</p>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={css.pagination}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? css.activePage : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Category;
