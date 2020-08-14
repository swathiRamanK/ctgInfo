import React from 'react';
import { ListGroup, Card, CardDeck } from 'react-bootstrap';

function Footer() {

    return (

        <div className="footer">
            <CardDeck className="footer-information">
                <Card>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Pages</Card.Title>
                        <Card.Text>
                            <span>Home</span><span>Meet the team</span>
                            <span> Services</span><span> Contact us</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Working Hours</Card.Title>
                        <Card.Text>
                            <span>Monday - Friday: 9am - 5pm</span>
                            <span>Saturday - Sunday: Closed</span>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Card className="footer-copyright">
                <Card.Body>
                    Copyright @2020 somecontent goes here
                    </Card.Body>
            </Card>
        </div>

    )

}
export default Footer;