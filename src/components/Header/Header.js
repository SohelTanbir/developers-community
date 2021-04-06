import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="navbar-brand logo">
                            <Link to="/">Developers</Link>
                        </div>
                    </div>
                    <div className="col-md-10 text-right">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Tutorials</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;