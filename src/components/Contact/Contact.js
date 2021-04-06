import React, { useState } from 'react';
import contactImg from '../../images/contact2.jpg'
import './Contact.css'

const Contact = () => {
    const [userInfo, setUserInfo] = useState();
    const handleForm = () => {
        alert('Thanks for contact with us!')
    }
    return (
        <div className="contact">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-7">
                        <div className="contact-image">
                            <img src={contactImg} alt="contactImage" />
                        </div>
                    </div>
                    <div className="col-md-4 pt-4 px-4 mx-auto shadow">
                        <form >
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" required />
                                    </div>

                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" placeholder="Phone" required />
                                </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Country" required />
                                </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Your comment..."></textarea>
                            </div>
                            <input onClick={handleForm} type="submit" className="btn btn-primary float-right mt-3" value="Send message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;