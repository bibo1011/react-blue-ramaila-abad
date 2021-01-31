import React, { useState } from 'react';
import Project from '../Project';
import projects from '../../projects.json';
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Carousel, Slide, Slider, Caption } from 'react-materialize';

function Portfolio() {

    const [projectList, setProjectList] = useState(projects)
    return (
        <section id="portfolio">
            
            {/* {projectList.map(project => (
                <Project
                    id={project.id}
                    title={project.title}
                    image={project.image}
                    link={project.link}
                    github={project.github}
                />
                ))} */}
             
             
             <div className="container" style={{padding:"100px 0 100px 0", textAlign:"center"}}>
                {/* <h1>Portfolio</h1> */}
                <Slider
                    fullscreen={false}
                    options={{
                        duration: 500,
                        height: 800,
                        indicators: true,
                        interval: 4000
                    }}
                >
                    {projectList.map(project => (
                    <Slide image={<img alt="" src={require(`../../assets/images/${project.id}/${project.id}.png`).default}/>}>
                        <Caption placement="center">
                            <h3>{project.title}</h3>     
                            <h3><a href={project.link} className="grey-text text-lighten-3">{project.link} </a></h3>
                        </Caption>
                    </Slide>
                    ))}
                    
                </Slider>
            </div>
            
            
            
            {/* <Carousel
                
                carouselId="Carousel-2"
                images={[
                    require("../../assets/images/1/1.png").default,
                    require("../../assets/images/2/2.png").default,
                    require("../../assets/images/3/3.png").default
                ]}
                options={{
                    dist: -100,
                    duration: 200,
                    fullWidth: false,
                    indicators: false,
                    noWrap: false,
                    numVisible: 5,
                    onCycleTo: null,
                    padding: 0,
                    shift: 0
                }}
            /> */}
        </section>
    );
}

export default Portfolio