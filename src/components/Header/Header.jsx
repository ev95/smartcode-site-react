import MainButton from '../MainButton/MainButton.jsx';
import './Header.css';

function Header(){
const logo = 'https://smartcode.am/public/image/logo.png?v=1'

    return(
        <nav className="navtop">
            <div className="container">
                <a className="navtop-logo" href="/">
                <img src={logo} alt="Smart Code Logo" title="Smart Code Logo" />
                </a>
                <ul className="navtop-menu">
                    <li>
                        <a href="https://smartcode.am/hy/courses">Դասընթացներ</a>
                    </li>
                    <li>
                        <a href="https://smartcode.am/hy/features">Առավելություններ</a>
                    </li>
                    <li>
                        <a href="https://smartcode.am/hy/staff">Թրեյներներ</a>
                    </li>
                    <li>
                        <a href="https://smartcode.am/hy/about-us">Մեր մասին</a>
                    </li>
                </ul>
               <MainButton />
            </div>
        </nav>
    )
}

export default Header;
