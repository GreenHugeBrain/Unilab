  import Header from '../components/HomeHeader.jsx';
  import Pet from '../components/PetCards.jsx';
  import LogoAndHuman from '../assets/dogandhuman2.svg';
  import Techs from '../components/techCards.jsx';
  import Seller from '../assets/petsellers.svg';
  import Footer from '../components/Footer.jsx';
  import CountDown from '../components/CountDown.jsx';
  import HandToHand from '../assets/handtohand.svg';
  import PetsSlider from '../components/PetSlidersCards.jsx';
  import '../css/Home.css';

  function App() {
    return (
      <>
        <Header />
        <main>
          <Section title="What's new?" subtitle="Take a look at some of our pets">
            <Button text="View More" />
          </Section>

          <Pet />

          <Banner 
            image={LogoAndHuman} 
            heading="One More Friend" 
            subheading="Thousands More Fun!" 
            description="Having a pet means you have more joy, a new friend, a happy companion who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
            buttons={[
              { text: "View Intro", icon: "play_circle" },
              { text: "Explore Now" }
            ]}
          />

          <Section title="Hard to choose right products for your pets?" subtitle="Our Products">
            <Button text="View More" />
          </Section>

          <Techs />

          <Section title="Proud to be part of" subtitle="PetSellers">
            <Button text="View all our sellers" />
          </Section>

          <ImageContainer src={Seller} alt="Seller" />

          <div className="AdoptionBanner">
            <div className="AdoptionRects">
              <div className="AdoptionRect1"></div>
              <div className="AdoptionRect2"></div>
            </div>
            <div className="AdoptionTextes">
              <h1>Adoption</h1>
              <p className="AdoptionOne">We need help. So do they.</p>
              <p className="AdoptionP">Adopt a pet and give it a home, it will love you back unconditionally.</p>
              <div className="AdoptionButton">
                <button>Explore Now</button>
                <button>View Intro <span className="material-symbols-outlined">play_circle</span></button>
              </div>
            </div>
            <div className="AdoptionsImages">
              <img src={HandToHand} alt="HandToHand" />
            </div>
          </div>

          <Section title="What's new?" subtitle="Take a look at some of our pets">
            <Button text="View" />
          </Section>

          <PetsSlider />

          <p className="countdown-title">Big Summer Event</p>
          <CountDown />
        </main>

        <Footer />
      </>
    );
  }

  const Section = ({ title, subtitle, children }) => (
    <div className="main_collect">
      <div className="main_text">
        <p className="new">{title}</p>
        <p className="after_new">{subtitle}</p>
      </div>
      <div className="main_button">
        {children}
      </div>
    </div>
  );

  const Button = ({ text, icon }) => (
    <button>
      {text}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  );

  const Banner = ({ image, heading, subheading, description, buttons }) => (
    <div className="main_banner">
      <div className="banner_rects">
        <div className="banner_rect1"></div>
        <div className="banner_rect2"></div>
      </div>
      <div className="banner_components">
        <div className="banner_image">
          <img src={image} alt="Banner" />
        </div>
        <div className="header_main_textes">
          <h1 className="main_textes_omf">{heading}</h1>
          <p className="header_main_textes_first">{subheading}</p>
          <p className="miniP">{description}</p>
          <div className="main_buttons">
            {buttons.map((btn, index) => (
              <Button key={index} text={btn.text} icon={btn.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ImageContainer = ({ src, alt }) => (
    <div className="SellerContainer">
      <img src={src} alt={alt} />
    </div>
  );

  export default App;
