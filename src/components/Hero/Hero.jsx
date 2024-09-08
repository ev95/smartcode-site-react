import MainButton from '../MainButton/MainButton';
import './Hero.css'

function Hero(){
    const img_url = 'https://smartcode.am/public/image/header.svg'
    return (
        <div className="header-main">
            <div className="container">
                <div className="header-info">
                    <h1>
                        <span>Սովորի՛ր</span> ծրագրավորում<br /><span>Դարձի՛ր</span> պահանջված մասնագետ</h1>
                        <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
                        <div className="header-action">
                            <MainButton />
                            <a className="but-play" href="https://smartcode.am/">
                            <i className="far fa-play-circle"></i>
                            {/* <FontAwesomeIcon icon={["far", "fa-play-circle"]} /> */}
                             Տեսանյութ</a>
                        </div>
                        <ul className="social-links">
                            <li>
                                <a href="https://www.facebook.com/SmartCode.am/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/smarttechnologyllc/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/smartcode.am/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@smartcode.am" target="_blank" rel="noreferrer"><i className="fab fa-tiktok"></i></a>
                            </li>
                        </ul>
                </div>
                <img src={img_url} className="header-image" alt='Hero' />
            </div>
        </div>
    )
}

export default Hero;