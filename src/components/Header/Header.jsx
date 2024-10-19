import MainButton from '../MainButton/MainButton.jsx';
import './Header.css';

function Header({ menu }) {

    return (
        <nav className="navtop">
            <div className="container">
                <a className="navtop-logo" href="/">
                    <img src='https://smartcode.am/public/image/logo.png?v=1' alt="Smart Code Logo" title="Smart Code Logo" />
                </a>
                <ul className="navtop-menu">
                    {
                        menu.map((val, index) => {
                            return (
                                <li key={index}>
                                    <a href={val.url}>{val.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <MainButton />
            </div>
        </nav>
    )
}

export default Header;
