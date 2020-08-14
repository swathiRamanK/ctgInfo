import React from 'react';


import { Image, CardDeck, Card } from 'react-bootstrap';
import Herobanner from './hero-banner-2.jpg';
//import './App.css';


function Home() {

  return (
    <div className="Home">

      <Image src={Herobanner} fluid></Image>
      <CardDeck className="homepage-aboutus-header">
        <Card >
          <Card.Body>
            <h5 className="heading">WHO WE ARE</h5>
            <p className="caption">Some few captions about</p>
            <p className="caption">what you do and work</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck className="homepage-aboutus-body">
        <Card>
          <Card.Body>
            <div><i className="fa fa-desktop desktop-icon"></i></div>
            <h3 className="card-heading">Technical Experience</h3>
            <p className="card-content">
              We are well-versed in a variety of operating systems, networks,
              and databases. We use this expertise to help our customers
              with a variety of small to mid-sized projects.
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div><i className="fa fa-usd usd-icon"></i></div>
            <h3 className="card-heading">High ROI</h3>
            <p className="card-content">
              Many companies find that constant maintenance eats into
              their budget for new technology.
              By outsourcing your IT management to us, you can focus
              on what you do best--running your business.
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div><i className="fa fa-thumbs-up thumbs-up-icon"></i></div>
            <h3 className="card-heading">Satisfaction Guaranteed</h3>
            <p className="card-content">
              That's why our goal is to provide an experience that is tailored to your company's needs.
              No matter the budget, we pride ourselves on providing professional customer service.
            </p>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>

  );
}

export default Home;
