import React from 'react';

function Account() {
    return (
        <div className="account">
            <div className="navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Harpreet
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Account Settings</a>
                            <a className="dropdown-item" href="#">User Management</a>
                            <a className="dropdown-item" href="#">My Team</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accountIcon">
                <svg focusable="false" viewBox="2 2 24 24" className="pl-BaseIcon BaseIcon pl-BaseIcon--scalable MyAccountLinkCard-icon" role="img" aria-label="My Account" data-hb-id="pl-icon">
                    <title>My Account</title>
                    <path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zM9.26 21.05v-2.17a3.37 3.37 0 013.36-3.36h2.74a3.37 3.37 0 013.36 3.36v2.19a8.47 8.47 0 01-9.48 0zM14 14.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm5.73 5.76v-1.38a4.37 4.37 0 00-3.44-4.26A3.45 3.45 0 0017.5 12a3.5 3.5 0 00-7 0 3.45 3.45 0 001.21 2.62 4.37 4.37 0 00-3.44 4.26v1.38a8.5 8.5 0 1111.46 0z">
                    </path>
                </svg>
            </div>
        </div>
    )
}

export default Account;