import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom';
import {Container} from "react-bootstrap";

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className="pc">
                <div className="login-wrap">
                    <div className="login-button" onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그인</span>
                    </div>
                </div>
                <div className="nav-section">
                    <a href="/">
                        <img
                            width={100}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1418px-H%26M-Logo.svg.png"
                        />
                    </a>
                </div>
                <div className="menu-area">
                    <ul className="menu-list">
                        {menuList.map((menu, index) => (
                            <li key={index}>{menu}</li>
                        ))}
                    </ul>
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="제품검색"/>
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="nav-header">
                    <div className="burger-menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="login-button" onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그인</span>
                    </div>
                </div>
                <div className="nav-section">
                    <a href="/">
                        <img
                            width={100}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1418px-H%26M-Logo.svg.png"
                        />
                    </a>
                </div>
                {/*<div className="menu-area">*/}
                {/*    <ul className="menu-list">*/}
                {/*        {menuList.map((menu, index) => (*/}
                {/*            <li key={index}>{menu}</li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Navbar;