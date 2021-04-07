import React from 'react';
import { Link } from 'react-router-dom';
import './TutorialCard.css'

const TutorialCard = (props) => {
    const { title, img, description } = props.tutorial;
    return (
        <div className="container-fluid">
            <div className="courseContainer">
                <div className="CourseCard shadow float-left">
                    <img className="card-img-top" style={{ height: '150px' }} src={img} alt="Card" />
                    <div className="courseBody">
                        <h5 className="card-title my-3">{title}</h5>
                        <p className="card-text mb-5">{description}</p>
                        <Link className="btn btn-primary right">Start learn</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialCard;