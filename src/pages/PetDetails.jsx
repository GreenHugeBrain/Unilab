import React from 'react';
import { useParams } from 'react-router-dom';
import pets from '../jsons/category_pets.js'; 
import styles from '../css/PetDetails.module.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const PetDetails = () => {
    const { id } = useParams();
    const pet = pets.find(pet => pet.id === id);

    if (!pet) {
        return <div>Pet not found!</div>;
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.breadcrumb}>
                Home &gt; Dog &gt; Large Dog &gt; Shiba Inu Sepia
            </div>
            <div className={styles.petDetails}>
                <div className={styles.imageContainer}>
                    <img src={pet.src} alt={pet.breed} className={styles.petImage} />
                </div>
                <div className={styles.infoContainer}>
                    <h1>{pet.breed}</h1>
                    <p className={styles.price}>{pet.price} {pet.currency}</p>
                    <div className={styles.buttons}>
                        <button className={styles.contactButton}>Contact us</button>
                        <button className={styles.chatButton}>Chat with Monito</button>
                    </div>
                    <table className={styles.petInfo}>
                        <tbody>
                            <tr><td>SKU</td><td>D32AF</td></tr>
                            <tr><td>Gender</td><td>{pet.gender}</td></tr>
                            <tr><td>Age</td><td>{pet.age}</td></tr>
                            <tr><td>Size</td><td>Large</td></tr>
                            <tr><td>Color</td><td>Apricot & Tan</td></tr>
                            <tr><td>Vaccinated</td><td>Yes</td></tr>
                            <tr><td>Dewormed</td><td>Yes</td></tr>
                            <tr><td>Cert</td><td>Yes (MKA)</td></tr>
                            <tr><td>Microchip</td><td>Yes</td></tr>
                            <tr><td>Location</td><td>Vietnam</td></tr>
                            <tr><td>Published Date</td><td>12-Oct-2022</td></tr>
                            <tr><td>Additional Information</td><td>Pure breed Shib Inu. Inu is charming and adaptable. He is alert, strong, and confident with a touch of stubbornness. Come with MKA cert and Microchip. Father from champion lineage.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PetDetails;