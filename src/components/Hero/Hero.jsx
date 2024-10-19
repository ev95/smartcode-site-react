import MainButton from '../MainButton/MainButton';
import './Hero.css'


function Hero({ socials }) {
    const img_url = 'https://smartcode.am/public/image/header.svg';

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
                            <i className="far fa-play-circle"></i> Տեսանյութ</a>
                    </div>
                    <ul className="social-links">
                        {
                            socials.map((el) => (
                                <li>
                                    <a href={el.url} target="_blank" rel="noreferrer">{el.icon}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <img src={img_url} className="header-image" alt='Hero' />
            </div>
        </div>
    )
}

export default Hero;