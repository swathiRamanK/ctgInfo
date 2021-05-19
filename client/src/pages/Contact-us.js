import React , { Component } from 'react'
import placeholder from '../images/placeholder.jpg';
import * as emailjs from 'emailjs-com'
import { CardDeck, Card, Button, Image, FormFeedback, Form, FormGroup, Label } from 'react-bootstrap';

class ContactUs extends Component  {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        
        let templateParams = {
            from_name: email,
            to_name: 'talents@ctginfotech.co.in',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'service_rjeesvz',
            'template_tl3l77n',
             templateParams,
            'user_PGryMcHBAX8mkNJ8YcWej'
        )
        this.resetForm();
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
    render() {
    return (

        <div className="contact-us">
            <h3 className="heading">GET IN TOUCH WITH US</h3>
            
            <CardDeck>
                <Card>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Group>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Subject
                            </Form.Label>
                            <Form.Control type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Message
                            </Form.Label>
                            <Form.Control type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}></Form.Control>
                        </Form.Group>
                        <Button className="ctg-btn-primary" variant="primary">Submit</Button>

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
}
export default ContactUs;