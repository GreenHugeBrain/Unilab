import Logo from '../assets/logo.svg'
import MainImage from '../assets/dogandhuman.svg'
import style from '../css/HomeHeader.module.css'

const Header = () => {
    return (
        <header>
            <div>
                <div className={style.rect1}></div>
                <div className={style.rect2}></div>
                <div className={style.rect3}></div>
                <div className={style.rect4}></div>
            </div>
            <nav>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Category</li>
                    <li>Contact</li>
                </ul>
                <div className={style.buttons}>
                    <button>Join the community</button>
                    <select>
                        <option>🇬🇪</option>
                        <option>🇺🇸</option>
                    </select>
                </div>
            </nav>

            <div className={style.header_main}>
                <div className={style.header_main_textes}>
                    <h1>One More Friend</h1>
                    <p className={style.header_main_textes_first}>Thousands More Fun!</p>
                    <p className={style.miniP}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                    <div className={style.main_buttons}>
                        <button>View Intro <span class="material-symbols-outlined">
                            play_circle
                        </span></button>
                        <button>Explore Now</button>
                    </div>
                </div>
                <div className={style.header_main_images}>
                    <img src={MainImage} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;