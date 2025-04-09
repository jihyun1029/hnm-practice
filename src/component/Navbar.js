import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    let [width, setWidth] = useState(0);
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className="nav-logo">
                <Link to="/">
                    <img
                        width={100}
                        src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
                    />
                </Link>
            </div>
            <div className="nav-menu-area">
                <ul className="menu">
                    {menuList.map((menu, index) => (
                        <li>
                            <a href="#" key={index}>
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;