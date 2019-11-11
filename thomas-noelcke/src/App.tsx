import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/home';
import SideProject from './Pages/SideProjects/sideProjects';
import Blog from './Pages/Blog/blog';
import { Navbar, Nav } from 'react-bootstrap';
import { element } from 'prop-types';

export default function App() { 
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Nav.Link href="/">Thomas Noelcke</Nav.Link>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/side-projects">Side Projects</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Navbar>

        <Switch>
          <Route path="/side-projects">
            <SideProject/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
