import React from 'react';
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Row, Col, Collection, CollectionItem, Card, Icon } from 'react-materialize';
import Button from 'react-materialize/lib/Button';

function Contact() {
    return (
        <section id="contact" style={{paddingTop:"250px"}}>
            <Row >
                <Col  m={6}
                    s={12}
                    >
                    <div style={{display:"flex", justifyContent:"center", paddingTop:"50px" }} >
                        <Card
                        actions={[
                            <a>San Jose, CA 95127</a>,
                            <br></br>,
                            <a>(408) 834-9225</a>,
                            <br></br>,
                            <a>bibo_1011@yahoo.com</a>,
                            <br></br>,
                            <a>Let's connect</a>,
                            <ul className="social-link"> 
                                <li><a target="_blank" href="mailto:bibo_1011@yahoo.com"><i className="small fas fa-envelope zoom"></i></a></li>
                                <li><a target="_blank" href="https://github.com/bibo1011"><i className="small fab fa-github zoom"></i></a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/blue-ramaila-abad/"><i className="small fab fa-linkedin zoom"></i></a></li>
                                <li><a target="_blank" href="https://www.facebook.com/bibo1011/"><i className="small fab fa-facebook zoom"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/channel/UCejBxvVwKs7Or6Yv6T9DKGw?view_as=subscriber"><i className="small fab fa-youtube zoom"></i></a></li>
                            </ul>
                        ]}
                        className="blue-grey darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="Contact Details"
                        style={{ height: "325px", width: "500px"}}
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
                            React
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-react"></i>
                    
                        </CollectionItem>
                        <CollectionItem>
                            Javascript
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-js-square"></i>
                    
                        </CollectionItem>
                        <CollectionItem>
                            Expressjs
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-js-square"></i>
                    
                        </CollectionItem>
                        <CollectionItem>
                            Nodejs
    
                                <i style={{color:"black"}} className="secondary-content small fab fa-node-js"></i>
                    
                        </CollectionItem>
                    </Collection>

                </Col>
                <Col m={3} s={12}>
                    <div style={{display:"flex", justifyContent:"center", paddingTop:"100px"}} >

                            <Button large node="a" className="blue-text grey darken-3 " target="_blank" href={require(`../../assets/documents/blue-WebDev.pdf`).default} >
                                <i className="fa fa-download"></i> Download Resume
                            </Button>
                      
                    </div>
                </Col>

            </Row>

        </section>
    )
}

export default Contact