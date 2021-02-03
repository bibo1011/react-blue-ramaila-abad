import React, { useState } from 'react';
import projects from '../../projects.json';
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Carousel, Slide, Slider, Caption } from 'react-materialize';

function Projects() {

    const [projectList, setProjectList] = useState(projects)
    return (
        <section id="projects" className="container" style={{paddingTop:"100px"}}>             
             <div >
             
                
                <Slider
                    fullscreen={false}
                    options={{
                        duration: 500,
                        height: 800,
                        indicators: true,
                        interval: 4000,
                    }}
                    
                >
                    {projectList.map(project => (
                    <Slide image={<a href={project.link} target="_blank"><img style={{height:"70%"}} alt="" src={require(`../../assets/images/${project.id}/${project.id}.png`).default} /></a>}>
                        <Caption placement="left"  >
                            <div style={{marginTop:"500px", backgroundColor:"dark blue"}}>
                                <div className="yellow-text text-darken-3 ">
                                    <h3>{project.title}</h3>
                                    <h6><a href={project.github} target="_blank">{project.github}</a></h6>     
                                    <h6><em><a href={project.link} target="_blank">{project.link}</a></em></h6>
                                </div>
                            </div>
                        </Caption>
                    </Slide>
                    ))}
                    
                </Slider>
            
            
            
            
            {/* <Carousel
                
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
            /> */}
            
            </div>
        </section>
    );
}

export default Projects