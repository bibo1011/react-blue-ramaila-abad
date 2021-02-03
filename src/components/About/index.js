import React from 'react';

function About() {
    return (
        <section id="about" >
            <div className="section white">
                <div className="row container">
                    <div className="col s6">
                        <h2 className="header">Blue Ramaila Abad</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            is an aspiring web developer with a background of space technology. <br/>
                            is focused on creating applications with mobile-first design.<br/>
                            is adventurous and willing to try new things.<br/>
                            is a traveler. <i className="fas fa-ruler-combined zoom"></i> & <i className="fas fa-drafting-compass zoom"></i>

                        </p>
                    </div>
                    <div className="col s6" style={{padding:"2% 0 0 30%"}}> 
                            <img alt="circle-blue" src={require("../../assets/images/me-round.png").default} style={{borderRadius: "50%", width:"100%"}} />
                    </div>
                </div>
            </div>

        </section >
    )
}

export default About
