import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, CardDeck, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div class="login-form-page">
        <CardDeck>
          <Card className="left-card">
            <p>
              <h4>
                Login here with your credentials.
              </h4>
            </p>

            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </Card>
          <Card>
          <Form noValidate onSubmit={this.onSubmit}>
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
                    isInvalid={!!errors.name || !!errors.emailnotfound } />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid"> {errors.emailnotfound}</Form.Control.Feedback>
                </Col>
              </Form.Group>
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
                    isInvalid={!!errors.password || !!errors.passwordincorrect} />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid"> {errors.passwordincorrect}</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Button type="submit" variant="primary">Login</Button>
          </Form>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);