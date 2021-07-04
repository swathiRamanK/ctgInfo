import React , { Component } from 'react'
import placeholder from '../images/placeholder.jpg';
import * as emailjs from 'emailjs-com';
import { CardDeck, Card, Button, Image, FormFeedback, Form, FormGroup,FormControl,FormLabel, Label } from 'react-bootstrap';
import axios from 'axios';

class ContactUs extends Component  {

    
      constructor(props){
        super(props)
        this.state = { email:'',name:'',  subject:'',message:'',show:false,successMsg:false,errorMessage:false}
        // this.state = {
        //     name: '',
        //     email: '',
        //     subject: '',
        //     message: '',
        //   }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    //   handleSubmit(event){
    //     const { email, name, subject, message } = this.state
    //     event.preventDefault()
    //     alert(`
    //       ____Your Details____\n
    //       Email : ${email}
    //       Name : ${name}
    //       Subject : ${subject}
    //       Message : ${message}
    //     `)
    //   }
      handleChange(event){
        this.setState({
          // Computed property names
          // keys of the objects are computed dynamically
          [event.target.name] : event.target.value
        })
      }
      componentDidMount() {

        axios.get('https://reqres.in/api/products/3')
        .then(response => 
            {console.log('response',response);}
            
            )
        .catch(error => {
         
            console.error('There was an error!', error);
        });
      }
    handleSubmit(e) {
        console.log('e',e)
       e.preventDefault()
        const { name, email, subject, message } = this.state
        
        let templateParams = {
            from_name: email,
            to_name: 'talents@ctginfotech.co.in',
            subject: subject,
            message_html: message,
        }
        
        if(this.state.name !== null && this.state.name !== null &&
            this.state.email !== null && this.state.email !== null &&
            this.state.subject !== null && this.state.subject !== null && 
            this.state.message !== null && this.state.message !== null  && isNaN(this.state.name)){
         emailjs.send(
            'service_rjeesvz',
            'template_qzjo0rl',
             templateParams,
            'user_PGryMcHBAX8mkNJ8YcWej'
        ).then(res=>{
            if(res.status === 200){
                this.setState({successMsg:true})
            }
        }).catch(error => {
            this.setState({errorMsg:true})
        });
        }else{
            this.setState({show:true})
         }
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
    // handleChange = (param, e) => {
    //     this.setState({ [param]: e.target.value })
    //   }
     
    render() {
    return (

        
        <div className="contact-us">
            <h3 className="heading">GET IN TOUCH WITH US</h3>
            {this.state.show && <span className="error-msg">*Please Enter valid Input</span>}
            {this.state.successMsg && <span className="success-msg">Email Submitted Successfully!</span>}
            {this.state.errorMsg && <span className="error-msg">Error! Email not Sent</span>}
            <CardDeck>
                <Card>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <FormLabel>
                                Name
                            </FormLabel>
                            <FormControl type="text"
                name="name"
                value={this.state.name}
                className="text-primary color-black"
                onChange={this.handleChange}
                placeholder="Name"
                maxLength="50"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl type="email"
                name="email"
                value={this.state.email}
                className="text-primary color-black"
                onChange={this.handleChange}
                placeholder="Enter email"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Subject
                            </FormLabel>
                            <FormControl type="text"
                name="subject"
                className="text-primary color-black"
                value={this.state.subject}
                onChange={this.handleChange}
                placeholder="Subject"
                maxLength="50"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Message
                            </FormLabel>
                            <FormControl type="textarea"
                name="message"
                className="text-primary color-black"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Message"
                maxLength="100"></FormControl>
               
                        </FormGroup>
                        <Button type="submit" className="ctg-btn-primary" variant="primary">Submit</Button>
                        

                    </form>

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