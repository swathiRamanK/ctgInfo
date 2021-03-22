import React from 'react';
import placeholder from'../images/placeholder.jpg'
import { CardDeck, Card, Form,Button,Image } from 'react-bootstrap';

function ContactUs() {
    return (

        <div className="contact-us">
            <h5 className="heading">CONTACT US</h5>

            <CardDeck>
                <Card>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter your name"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Message
                            </Form.Label>
                            <Form.Control type="textarea" placeholder="Enter your message"></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button Variant="primary" type="submit" className="contact-us-submit">Submit</Button>
                </Card>
                <Card>
                   <Image src={placeholder}></Image>
                </Card>
            </CardDeck>

        </div>
    )
}
export default ContactUs;