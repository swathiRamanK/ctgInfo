import React from 'react';


import { Image, CardDeck, Card } from 'react-bootstrap';
// import Herobanner from './hero-banner-2.jpg';
import Herobanner from './images/hero-banner-1.jpg';
//import './App.css';


function Home() {

  return (
    <div className="Home">

      <Image src={Herobanner} fluid></Image>
      <h5 className="heading image-text">CTG INFOTECH</h5>
      <p className="image-text-subheading">  We work with just the DATA and nothing else!</p>
      <CardDeck className="homepage-aboutus-header">
        <Card >
          <Card.Body>
            <h5 className="heading">WHO WE ARE</h5>
            <p className="caption">“Data really powers everything that we do.”</p>
            <p className="caption">– Jeff Weiner</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div className="content">
              Company To Grow Inc. (CTG Infotech, Inc.) is one of the major and successive providers of professional partner services related to computer Information Technology. The company contracts with many of the largest and leading companies in across the South Africa to offer consulting and migration services as a manage services partner. CTG began its journey in 2018 in Johannesburg, South Africa, offering a relatively new strategic and competitive service.
              CTG Infotech is passionate about Data and Business agility. We see data and business intelligence as means to a business end. Our philosophy is to begin with business drivers and end with business outcomes. It just so happens that we leverage data, business intelligence technology, and industry knowledge to achieve that goal.
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
