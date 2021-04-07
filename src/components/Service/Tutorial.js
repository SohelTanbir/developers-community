import React from 'react';
import TutorialCard from '../TutorialCard/TutorialCard';
import './Tutorial.css';
import tutorials from '../../FakeDate/TutorialsDate';


const Tutorial = () => {
    return (
        <>
            <div className="tutorialContainer">
                <div className="tutorialsText">
                    <h2>Do you want to Develop your skill? <br/> </h2>
                    <p>You can start learning with our free online Course</p>
                </div>
            </div>
            {
                tutorials.map(tutorial => < TutorialCard tutorial={tutorial}/>)
            }
        </>
    );
};

export default Tutorial;