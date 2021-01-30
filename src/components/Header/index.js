import React, { useState } from 'react';
import Nav from '../Nav';
import background from '../../assets/images/pexels-dominika-roseclay-5462214.jpg'
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Parallax } from 'react-materialize';

function Header() {

    return (
        // <header id="home" style={{
        //     backgroundImage: `url(${background})`, backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        // }}>
        <header>
            <div>
                <Nav />
            </div>
            <div>
                <Parallax
                    image={<img alt="beach from sky" src={require("../../assets/images/pexels-dominika-roseclay-5462214.jpg").default} />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">
                            Blue Ramaila Abad
      </h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
      </p>
                        <img alt="circle-blue" src={require("../../assets/images/me.png").default} style={{borderRadius: "50%"}} />
                    </div>
                </div>
                <Parallax
                    image={<img alt="forest from ground" src={require('../../assets/images/pexels-elina-sazonova-2072600.jpg').default} />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
            </div>

        </header>

    );
}

export default Header