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
                <Tabs defaultActiveKey="about" id="tabs" className="col-10">
                    <Tab eventKey="about" title="About Me">
                        <div className="text-content-about">
                            <div className="col-6">
                            <p>Welcome to my Personal Website!</p>

                            <p>My name is Thomas Noelcke and I'm a software professional committed to providing quality software solutions. I am currently working at the Center for Applied Systems and Software (CASS) at Oregon State University.</p>

                            <p>I started my Computer Science career because of my interest in Atmospheric Science. Part of the curriculum for that computer science class was to take an intro series programming class. After taking this class I was hooked and decided Software Engineering was for me. I then transferred to PSU and later OSU where I completed my BS in Computer Science with a minor in Business and Entrepreneurship.</p>

                            <p>Today at CASS I manage groups of students to complete for hire software work. In this role my responsibilities include, Project Management, Systems Architect, Office Manager, Systems Administration, Software Development, QA Engineer, Systems Analyst and Mentor. I enjoy the challenge that fulfilling multiple roles brings.</p>

                            <p>Technically, I enjoy working on cloud distributed applications. At CASS I’ve worked with clients to produce multiple cloud based solution. I also enjoy creating JavaScript based SPA applications. At CASS I’ve created applications in Reactjs as well as Angular and Vue.js. I enjoy the flexibility and rich functionality that SPAs can provide.</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="experience" title="Experience">
                        <div className="text-content">
                        <div className="col-10">
                            <h3>Center For Applied Systems and Software</h3> 
                            <Badge variant="secondary">Systems Development Engineer</Badge>
                            <Badge variant="secondary">June 2018 - Present</Badge>
                        </div>
                        <div className="col-10">
                            <ul>
                                <li>
                                    <span className="font-weight-bold">Project Management:</span> Organized team of students to plan implement and deploy software projects.
                                </li>
                                <li>
                                    <span className="font-weight-bold">Business Analysis:</span> Worked with clients to analyze existing business processes identifying pain points. Worked with client to propose software solutions that create value.
                                </li>
                                <li>
                                    <span className="font-weight-bold">Systems Architect:</span> Design software systems using best practices to solve business problems in a way that is sustainable and maintainable. 
                                </li>
                                <li>
                                    <span className="font-weight-bold">Office Manager:</span> Forecast project load to determine what adjustments need to be made to staffing levels to meet project demand.
                                </li>
                            </ul>

                        </div>
                        <div className="col-10">
                            <h3>Center For Applied Systems and Software</h3> 
                            <Badge variant="secondary">Student Developer</Badge>
                            <Badge variant="secondary">May 2017 - June 2018</Badge>
                        </div>
                        <div className="col-10">
                            <ul>
                                <li>
                                    <span className="font-weight-bold">ODOT Response Planning:</span> Suite of C#, WinForms and WPF application that creates dynamic messages 
                                    for electronic message signs on roads. Created WCF services that communicates with external services.
                                </li>
                                <li>
                                    <span className="font-weight-bold">ODOT Trip Check Local Entry: </span> Created Interactive prototype of an application that allows entry of
                                    road events for municipalities. Met with clients to determine basic application requirements and business needs.
                                </li>
                            </ul>
                        </div>
                        </div>
                    </Tab>
                    <Tab eventKey="tech" title="Technologies">
                        <div className="text-content">
                            <div className="col-8">
                                My Technologies
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="education" title="Education">
                        <div className="text-content">    
                            <div className="col-10">
                                <h3>Oregon State University</h3>
                                <div className="font-weight-bold">B.S. Computer Science</div>
                                <Badge variant="secondary">Business and Entrepreneurship Minor</Badge>
                                <Badge variant="secondary">Fall 2016 - Summer 2019</Badge>
                            </div>
                            <div className="col-10">
                                <h3>St.Helens High School</h3>
                                <div className="font-weight-bold">High School Diploma</div>
                                <Badge variant="secondary">Fall 2006 - Sprint 2010</Badge>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
                </div>
            </div>
    );
}

export default Home;