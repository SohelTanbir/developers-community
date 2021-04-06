import React from 'react';
import './Home.css'
import banner from '../../images/banner2.png'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="hero-text">
                            <h1>Software <br/> <span>Development</span> </h1>
                            <p>Do you want to become a Software Developer?we are waiting for your response.we will help you to become a successful software developer.You can read our programming content to make easy to become a developer.</p>
                            <button className="heroBtn">Learn more</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="hero-banner">
                            <img src={banner} alt="banner"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
    );
};

export default Home;