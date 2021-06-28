import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import MainLogo from '../images/Logo.png'
import {
    faUserCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import './Header.scss'

const Header = () => {
    return (
        <div className="forBorder">
        <Container>
            <div className="header">
                <div className="mainLogo">
                    <img src={MainLogo} alt="" />
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navigateButtons"> 
                    <FontAwesomeIcon className="navIcons" icon={faUserCircle} />
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Header;