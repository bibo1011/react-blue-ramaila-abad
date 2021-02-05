import React, { useState } from 'react';
import Nav from '../Nav';
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Parallax } from 'react-materialize';
import About from '../About'

function Header() {

    return (
        <header>
            <div >
                <Nav />
            </div>
            <div>
                <Parallax
                    image={<img alt="beach from sky" src={require("../../assets/images/pexels-dominika-roseclay-5462214.jpg").default} />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
                    <About/>
                
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