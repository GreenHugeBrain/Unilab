import canOfCatFood from '../assets/tech1.svg';
import bagOfCatFood from '../assets/tech2.svg';
import catScratchingBall from '../assets/tech3.svg';
import catWarmNest from '../assets/tech4.svg';
import omegaGoldSupplement from '../assets/tech5.svg';
import petCowboyCostume from '../assets/tech6.svg';
import chickenDrumstickHeadband from '../assets/tech8.svg';
import plushPetToy from '../assets/tech9.svg';

const pets = [
    {
        id: "RF385",
        name: "Reflex Plus Adult Cat Food Salmon",
        type: "Cat Food",
        size: "385gm",
        price: '140,000',
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        src: canOfCatFood
    },
    {
        id: "RF15K",
        name: "Reflex Plus Adult Cat Food Salmon",
        type: "Cat Food",
        size: "1.5kg",
        price: '159,000',
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        src: bagOfCatFood
    },
    {
        id: "CT101",
        name: "Cat scratching ball toy kitten sisal rope ball",
        type: "Cat Toy",
        price: '1,100,000',
        currency: "VND",
        promotion: "Free Cat Food",
        src: catScratchingBall
    },
    {
        id: "CN001",
        name: "Cute Pet Cat Warm Nest",
        type: "Cat Bed",
        price: '410,000',
        currency: "VND",
        promotion: "Free Cat Food",
        src: catWarmNest
    },
    {
        id: "NV385",
        name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
        type: "Dog Supplement",
        size: "385gm",
        price: '350,000',
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        src: omegaGoldSupplement
    },
    {
        id: "PC001",
        name: "Costumes Fashion Pet Clother Cowboy Rider",
        type: "Pet Costume",
        size: "1.5kg",
        price: '500,000',
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        src: petCowboyCostume
    },
    {
        id: "PC002",
        name: "Costumes Chicken Drumstick Headband",
        type: "Pet Costume",
        price: '400,000',
        currency: "VND",
        promotion: "Free Cat Food",
        src: chickenDrumstickHeadband
    },
    {
        id: "PT001",
        name: "Plush Pet Toy",
        type: "Pet Toy",
        price: '250,000',
        currency: "VND",
        promotion: "Free Food & Shaker",
        src: plushPetToy
    }
];

export default pets;