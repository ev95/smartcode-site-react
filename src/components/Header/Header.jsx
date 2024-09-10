import MainButton from '../MainButton/MainButton.jsx';
import './Header.css';

function Header(props){
const logo = 'https://smartcode.am/public/image/logo.png?v=1'

    return(
        <nav className="navtop">
            <div className="container">
                <a className="navtop-logo" href="/">
                    <img src={logo} alt="Smart Code Logo" title="Smart Code Logo" />
                </a>
                <ul className="navtop-menu">
                    {
                        props.menu.map((val)=> {
                            return (
                                <li>
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
