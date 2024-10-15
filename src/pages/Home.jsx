import Header from '../components/HomeHeader.jsx';
import Pet from '../components/PetCards.jsx';
import LogoAndHuman from '../assets/dogandhuman2.svg';
import Techs from '../components/techCards.jsx'
import Seller from '../assets/petsellers.svg'
import Footer from '../components/Footer.jsx'
import CountDown from '../components/CountDown.jsx'
import HandToHand from '../assets/handtohand.svg'
import PetsSlider from '../components/PetSlidersCards.jsx';
import '../css/Home.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="main_collect">
          <div className="main_text">
            <p className='new'>Whats new?</p>
            <p className='after_new'>Take a look at some of our pets</p>
          </div>
          <div className="main_button">
            <button>View More</button>
          </div>
        </div>
        <Pet />
        <div className="main_banner">
          <div className="banner_rects">
            <div className="banner_rect1"></div>
            <div className="banner_rect2"></div>
          </div>
          <div className="banner_components">
            <div className="banner_image">
              <img src={LogoAndHuman} alt="Logo" />
            </div>
            <div className="header_main_textes">
              <h1 className='main_textes_omf'>One More Friend</h1>
              <p className="header_main_textes_first">Thousands More Fun!</p>
              <p className="miniP">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              <div className="main_buttons">
                <button>View Intro <span class="material-symbols-outlined">
                  play_circle
                </span></button>
                <button>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main_collect firstdowncollect">
          <div className="main_text">
            <p className='new'>Hard to choose right products for your pets?</p>
            <p className='after_new'>Our Products</p>
          </div>
          <div className="main_button">
            <button>View More</button>
          </div>
        </div>
        <Techs />
        <div className="main_collect downcollect">
          <div className="main_text">
            <p className='new'>Proud to be part of</p>
            <p className='after_new'>PetSellers</p>
          </div>
          <div className="main_button">
            <button>View all our sellers</button>
          </div>
        </div>
        <div className="SellerContainer">
          <img src={Seller} alt="Seller" />
        </div>
        <div className="AdoptionBanner">
          <div className="AdoptionRects">
            <div className="AdoptionRect1"></div>
            <div className="AdoptionRect2"></div>
          </div>
          <div className="AdoptionTextes">
            <h1>Adoption</h1>
            <p className="AdoptionOne">We need help. so do they.</p>
            <p className="AdoptionP">Adopt a pet and give it a home,
            it will be love you back unconditionally.</p>
            <div className="AdoptionButton">
              <button>Explore Now</button>
              <button>View Intro <span class="material-symbols-outlined">
                play_circle
              </span></button>
            </div>
          </div>
          <div className="AdoptionsImages">
            <img src={HandToHand} alt="HandToHand" />
          </div>
        </div>
        <PetsSlider />
        <p className="countdown-title">Big Summer Event</p>

        <CountDown />
      </main>
      <Footer />
    </>
  )
}

export default App;
