import React from 'react';
import { CardDeck, Card ,Button } from 'react-bootstrap';
import networkEngineer from '../images/networkEngineer.jpg'
function Services() {
    return (
        <div className="Services">
            <h5 className="heading">SERVICES</h5>

            <CardDeck>
                <Card>
                    <Card.Img src={networkEngineer}></Card.Img>
                    <Card.Body>
                        <h4>Network Support & Maintenance</h4>
                        <p>We can set up and maintain your business's network,
                           or help troubleshoot and maintain your existing network. </p>
                        <Button variant="primary">View More</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src={networkEngineer}></Card.Img>
                    <Card.Body>
                        <h4>IT Support</h4>
                        <p>We are available to consult with your or your staff
                        when problems arise with your software.
                           This service can be either remote </p>
                        <Button variant="primary">View More</Button>

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src={networkEngineer}></Card.Img>
                    <Card.Body>
                        <h4>Cloud Services & Data Management</h4>
                        <p>We will work with you to establish the appropriate cloud
                           size and available resources for your business.</p>
                        <Button variant="primary">View More</Button>

                    </Card.Body>
                </Card>

            </CardDeck>
        </div>
    )
}
export default Services;