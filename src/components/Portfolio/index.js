import React, { useState } from 'react';
import projects from '../../projects.json';
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Carousel, Slide, Slider, Caption } from 'react-materialize';

function Portfolio() {

    const [projectList, setProjectList] = useState(projects)
    return (
        <section id="portfolio">             
             <div className="container" style={{padding:"100px 0 100px 0", textAlign:"center"}}>


                
                {/* <Slider
                    fullscreen={false}
                    options={{
                        duration: 500,
                        height: 400,
                        indicators: false,
                        interval: 4000
                    }}
                >
                    {projectList.map(project => (
                    <Slide image={<img alt="" src={require(`../../assets/images/${project.id}/${project.id}.png`).default}/>}>
                        <Caption placement="center" >
                            <h3>{project.title}</h3>     
                            <h3><a href={project.link} className="grey-text text-lighten-3">{project.link} </a></h3>
                        </Caption>
                    </Slide>
                    ))}
                    
                </Slider> */}
            
            
            
            
            <Carousel
                
                carouselId="Carousel-2"
                
                images={[projectList.map(project => (
                    require(`../../assets/images/${project.id}/${project.id}.png`).default
                    ))]}
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
            />
            
            </div>
        </section>
    );
}

export default Portfolio