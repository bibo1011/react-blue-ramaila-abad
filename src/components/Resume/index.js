import React from 'react';
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Row, Col, Collection, CollectionItem, Card, Icon } from 'react-materialize';
import Button from 'react-materialize/lib/Button';

function Resume() {
    return (
        <section id="resume" >
            <Row >
                <Col  m={6}
                    s={12}
                    >
                    <div style={{display:"flex", justifyContent:"center", paddingTop:"50px"}} >
                        <Card
                        actions={[
                            <a >San Jose, CA 95127</a>,
                            <br></br>,
                            <a >(408) 834-9225</a>,
                            <br></br>,
                            <a >bibo_1011@yahoo.com</a>,
                            <br></br>,
                            <a >follow me on links below</a>
                        ]}
                        className="blue-grey darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="Contact Details"
                        >
                        <h5>Blue Ramaila Abad</h5>
                        </Card>
                    </div>
                </Col>
                <Col
                    m={3}
                    s={12}
                >
                    <Collection header="Skills" m={6} style={{border:"0"}} >
                        <CollectionItem >
                            HTML5
        
                            <i style={{color:"black"}} className="secondary-content small fab fa-html5"></i>
                            
                        </CollectionItem>
                        <CollectionItem>
                            CSS3

                                <i style={{color:"black"}} className="secondary-content small fab fa-css3-alt"></i>
                        
                        </CollectionItem>
                        <CollectionItem>
                            Github

                                <i style={{color:"black"}} className="secondary-content small fab fa-github-square"></i>
                
                        </CollectionItem>
                        <CollectionItem>
                            Javascript
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-js-square"></i>
                    
                        </CollectionItem>
                        <CollectionItem>
                            React
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-react"></i>
                    
                        </CollectionItem>
                        <CollectionItem>
                            Nodejs
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-node-js"></i>
                    
                        </CollectionItem>
                        <CollectionItem>
                            Expressjs
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-js-square"></i>
                    
                        </CollectionItem>
                    </Collection>

                </Col>
                <Col m={3} s={12}>
                    <div style={{display:"flex", justifyContent:"center", paddingTop:"100px"}} >

                            <Button large node="a" className="grey darken-3 "><a target="_blank" href={require(`../../assets/documents/BLUE-WebDev.pdf`).default} >
                                <i className="fa fa-download"></i> Download Resume</a>
                            </Button>
                      
                    </div>
                </Col>

            </Row>

        </section>

        // <div className="resume" id="resume">
        //     <div className="list">
        //         <h6>List of proficiencies</h6>
        //         <ul>
        //             <li>HTML</li>
        //             <li>CSS</li>
        //             <li>Git</li>
        //             <li>Javascript</li>
        //             <li>API</li>
        //             <li>Node.js</li>
        //             <li>Express.js</li>
        //             <li>ORM</li>
        //             <li>MVC</li>
        //             <li>PWA</li>
        //             <li>React</li>
        //         </ul>
        //     </div>
        //     <div className="download">
        //         <h6> download my resume here <a target="_blank" href={require(`../../assets/documents/blue-VehTestOps.pdf`).default} ><i class="far fa-file"></i></a></h6>
        //     </div>
        // </div>
    )
}

export default Resume