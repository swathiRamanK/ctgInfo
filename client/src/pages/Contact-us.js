import React from 'react';
import placeholder from'../images/placeholder.jpg'
import { CardDeck, Card, Form,Button,Image } from 'react-bootstrap';

function ContactUs() {
    return (

        <div className="contact-us">
            <h3 className="heading">GET IN TOUCH WITH US</h3>

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
                                Subject
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter Subject"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Message
                            </Form.Label>
                            <Form.Control type="textarea" placeholder="Enter your message"></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="width-100" >Submit</Button>
                        
                    </Form>
                
                </Card>
                <Card>
                   <p>Let us tailor a service package that meets your needs. 
                       Tell us a little about your business, and we will get back to you with some suggestions.</p>
                    <h3 className="marginT5px blue-color">CTG INFOTECH</h3>
                    <h5 className="marginT5px">+27 84 816 5852</h5>
                    <h4 className="marginT5px blue-color">Working Hours</h4>
                    <h5 className="marginT5px">Monday - Friday: 9am - 5pm</h5>
                    <h5 className="marginT5px">Saturday - Sunday: Closed</h5>
                    <h5 className="marginT5px">NO.706/84-A, NANJAPPA NAGAR KCC NAGAR NEAR, <br></br>HOSUR DHARMAPURI Dharmapuri TN 635109 IN</h5>
                </Card>
            </CardDeck>

        </div>
    )
}
export default ContactUs;