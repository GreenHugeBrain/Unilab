import { useState } from 'react';
import pets from '../jsons/pets.js';
import style from '../css/PetCard.module.css'

const PetCards = () => {
    const [petsData] = useState(pets);

    return (
        <div className={style.cards}>
            {petsData.map((pet) => (
                <div className={style.petCard} key={pet.id}>
                    <img src={pet.src} alt={pet.breed} />
                    <h3>{pet.id} - {pet.breed}</h3>
                    <p>Gene: {pet.gender} ▫ Age: {pet.age}</p>
                    <p>{pet.price} {pet.currency}</p>
                </div>
            ))}
        </div>
        );
}

export default PetCards;
