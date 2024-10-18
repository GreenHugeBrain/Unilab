import React, { useState } from 'react';
import css from '../css/Filter.module.css';

const Filter = ({ updateFilter, updatePriceFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handlePriceChange = () => {
        updatePriceFilter(Number(minPrice) || 0, Number(maxPrice) || Infinity);
    };

    return (
        <form className={css.filter_form}>
            <div className={css.form_section}>
                <h3>Gender</h3>
                <label><input type="checkbox" onChange={() => updateFilter('gender', 'male')} /> Male</label>
                <label><input type="checkbox" onChange={() => updateFilter('gender', 'female')} /> Female</label>
            </div>

            <div className={css.form_section}>
                <h3>Color</h3>
                <label><input type="checkbox" onChange={() => updateFilter('color', 'red')} /> Red</label>
                <label><input type="checkbox" onChange={() => updateFilter('color', 'apricot')} /> Apricot</label>
                <label><input type="checkbox" onChange={() => updateFilter('color', 'black')} /> Black</label>
                <label><input type="checkbox" onChange={() => updateFilter('color', 'blackwhite')} /> Black & White</label>
                <label><input type="checkbox" onChange={() => updateFilter('color', 'silver')} /> Silver</label>
                <label><input type="checkbox" onChange={() => updateFilter('color', 'tan')} /> Tan</label>
            </div>

            <div className={css.form_section} style={{display: 'grid', width: '50px'}}>
                <h3>Price</h3>
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min" />
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max" />
                <button type="button" onClick={handlePriceChange} style={{padding: '5px', borderRadius: '20px',
                  background: 'transparent', color: 'black', cursor: 'pointer', border: '1px solid black', borderRadius: '5px', marginTop: '10px', marginBottom: '10px'
                  }}>
                    
                Apply Price</button>
            </div>

            <div className={css.form_section}>
                <h3>Breed</h3>
                <label><input type="checkbox" onChange={() => updateFilter('breed', 'pomeranian')} /> Pomeranian</label>
                <label><input type="checkbox" onChange={() => updateFilter('breed', 'poodle')} /> Poodle</label>
                <label><input type="checkbox" onChange={() => updateFilter('breed', 'corgi')} /> Corgi</label>
                <label><input type="checkbox" onChange={() => updateFilter('breed', 'alaskan malamute')} /> Alaskan Malamute</label>
            </div>
        </form>
    );
};

export default Filter;
