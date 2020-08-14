import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Button, Row, Col, CardDeck, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    console.log('this.props', this.props);

  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log('newUser', newUser, this.props.history, this.props);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="register-form-page">
        <CardDeck>
          <Card className="left-card">
            <p>
              <h4>
                Register here with your credentials.
              </h4>
            </p>

            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Card>
          <Card>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group as={Row} >
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    isInvalid={!!errors.name} />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    isInvalid={!!errors.email} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Col>
              </Form.Group >
              <Form.Group as={Row} >
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    isInvalid={!!errors.password} />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm={2}>
                  Confirm Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    isInvalid={!!errors.password2} />
                  <Form.Control.Feedback type="invalid">{errors.password2}</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Button type="submit" variant="primary">Sign up </Button>
            </Form>
          </Card>
        </CardDeck>


      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired // TODO - made its as string from object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

console.log(mapStateToProps)
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));