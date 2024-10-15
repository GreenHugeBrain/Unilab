// src/components/ToyCard.jsx
import { useState } from 'react';
import pets from '../jsons/techs.js';
import style from '../css/ToyCard.module.css'

const ToyCard = () => {
    const [petsData] = useState(pets);

    return (
        <div className={style.cards}>
            {petsData.map((item) => (
                <div className={style.toyCard} key={item.id}>
                    <img src={item.src} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Type: {item.type}</p>
                    {item.size && <p>Size: {item.size}</p>}
                    <p>{item.price} {item.currency}</p>
                    <p className={style.promotion}>{item.promotion}</p>
                </div>
            ))}
        </div>
    );
}

export default ToyCard;