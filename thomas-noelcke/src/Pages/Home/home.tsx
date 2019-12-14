import React from 'react';
import ReactDom from 'react-dom';
import headShot from './head-shot.jpg';
import { Image, Jumbotron, Tabs, Tab, Badge } from 'react-bootstrap';

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
                <div className="row">
                <Tabs defaultActiveKey="about" id="tabs" className="col-10">
                    <Tab eventKey="about" title="About Me">
                        <div className="col-12 flex">
                            <h3>Center For Applied Systems and Software</h3> 
                            <Badge variant="secondary">Systems Development Engineer</Badge>
                            <Badge variant="secondary">June 2018 - Present</Badge>
                        </div>
                        <div className="col-12">
                            <h3>Center For Applied Systems and Software</h3> 
                            <Badge variant="secondary">Student Developer</Badge>
                            <Badge variant="secondary">May 2017 - June 2018</Badge>
                        </div>
                        <div className="col-12">
                            <ul>
                                <li>
                                    <div className="bold">ODOT Response Planning</div> Suite of C#, WinForms and WPF application that creates dynamic messages 
                                    for electronic message signs on roads. Created WCF services that communicates with external services.
                                </li>
                                <li>
                                    <div className="bold">ODOT Trip Check Local Entry</div> Created INteractive prototype of an application that allows entry of
                                    road events for municipalities. Met with clients to determine basic application requirements and business needs.
                                </li>
                            </ul>
                        </div>
                    </Tab>
                    <Tab eventKey="experience" title="Experience">
                        <div className="col-12">
                            Experience Content
                        </div>
                    </Tab>
                    <Tab eventKey="tech" title="Technologies">
                        <div className="col-12">
                            My Technologies
                        </div>
                    </Tab>
                    <Tab eventKey="education" title="Education">    
                        <div className="col-12">
                            My Education
                        </div>
                    </Tab>
                </Tabs>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default Home;