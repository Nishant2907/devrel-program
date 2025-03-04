import React from 'react';
import heroPic from '../assets/images/heroPic.gif';
import './LandingPage.css'; 

const LandingPage = () => {
    return (
        <>
            <section id="landingPage" className="container section">
                <div className="row col-reverse">
                    <div className="col-lg-6 container">
                        <div className="landingPageContent">
                            <h2 className="landingPageHeader">Keploy Developer Relations Program</h2>
                            <p className="landingPageSubHeader">Get into the world of DevRels and experience of being one for a month</p>
                            <a href="" target="_blank">
                                <button type="button" className="btn btn-dark landingPageButton px-4 py-2">
                                Get Started
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 imgBox">
                        <img src={heroPic} className="searching" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;