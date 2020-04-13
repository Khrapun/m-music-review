import React from 'react';

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href='#'>
                    M.Play
                </a>
            </h3>
                <ul className="d-flex">
                    <li>
                        <a href="#">Charts</a>
                    </li>
                    <li>
                        <a href="#">Radio</a>
                    </li>
                    <li>
                        <a href="#">Search</a>
                    </li>
                </ul>
        </div>
    )
};

export default Header