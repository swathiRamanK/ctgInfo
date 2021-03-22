import React, { Component } from "react";
import { Link } from "react-router-dom";
import {CardDeck,Card,Button} from "react-bootstrap"
class Landing extends Component {
  render() {
    return (
      <div className="timesheet-landing-page">

        <CardDeck>
          <Card>
            <Card.Body>
              <h3>So!are you yet to register?</h3>
              <h3>Please click on the below link and go ahead</h3>
            <Button href="/register" variant="primary">Sign Up</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
            <h3>Have you already got an account?</h3>
            <h3>Please go ahead and login:)</h3>
            <Button href="/login" variant="primary">Log In</Button>
            </Card.Body>
          </Card>
          </CardDeck>
      </div>
    );
  }
}
export default Landing;