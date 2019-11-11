import React from 'react';
import ReactDom from 'react-dom';
import headShot from './head-shot.jpg';
import { Image, Jumbotron, Tabs, Tab } from 'react-bootstrap';

const Home: React.FC = () => {
    return (
        <div>
            <Jumbotron>
            <div className="row">
                <div className="col-1"></div>
                <Image src={headShot} roundedCircle/>
                <div className="col-lg-6">
                    <h1 className="text">Thomas Noelcke</h1>
                    <div className="text">Systems Development Engineer</div>
                    <div className="text">noelcket@gmail.com</div>
                    <div>(971) 645 - 1311</div>
                </div>
            </div>
            </Jumbotron>

            <div className="row">
            <div className="col-1"></div> 
            <Tabs defaultActiveKey="about" id="tabs" className="col-8">
                <Tab eventKey="about" title="About Me">
                    <div>
                        About me
                    </div>
                </Tab>
                <Tab eventKey="expirence" title="Expirence">
                    <div>
                        Expirence Content
                    </div>
                </Tab>
                <Tab eventKey="tech" title="Technologies">
                    <div>
                        My Technologies
                    </div>
                </Tab>
                <Tab eventKey="education" title="Education">    
                    <div>
                        My Education
                    </div>
                </Tab>
            </Tabs>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default Home;