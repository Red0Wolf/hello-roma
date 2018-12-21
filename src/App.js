import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { fetchGreeting } from './connect/connectService';

import LoginPage from './Login/index';
import Username from './Username/index';

class App extends Component {
	componentDidMount() {
		fetchGreeting().then(responseJson =>
			console.log(responseJson)
		);
	}

  render() {
    return (
      <div className="App">
		<Router>
		  <div>
			<ul style={styles.nav}>
			  <li style={styles.li}>
				<Link to="/">Events</Link>
			  </li>
			  <li style={styles.li}>
				<Link to="/articles">Articles</Link>
			  </li>
			  <li style={styles.li}>
				<Link to="/authors">Authors</Link>
			  </li>
			  <li style={styles.li}>
				<Link to="/reviewers">Reviewers</Link>
			  </li>
			  <li style={styles.li}>
				<Link to="/login">Login</Link>
			  </li>
			</ul>

			<hr />

			<Route exact path="/" component={Events} />
			<Route path="/articles" component={Articles} />
			<Route path="/authors" component={Authors} />
			<Route path="/reviewers" component={Reviewers} />
			<Route path="/login" component={LoginPage} />
			<Route path="/register" component={Register} />
		
		  </div>
		</Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Hello World
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function Events() {
  return (
    <div>
      <h2>Event</h2>
    </div>
  );
}

function Articles() {
  return (
    <div>
      <h2>Articles</h2>
    </div>
  );
}

function Authors() {
  return (
    <div>
      <h2>Authors</h2>
    </div>
  );
}

function Reviewers() {
  return (
    <div>
      <h2>Reviewers</h2>
    </div>
  );
}

function Register() {
	return (
		<div>
			<div style={styles.register}>
				<h3>Register</h3>
				
				<form>
					<p>Email</p>
					<input type="mail" placeholder="Email address" value="" name="email" style={styles.registerInput} />
					
					<p>Password</p>
					<input type="password" placeholder="********" value="" name="password" style={styles.registerInput} />
					
					<p>Confirm Password</p>
					<input type="password" placeholder="********" value="" name="confirm_password" style={styles.registerInput} />
					
					<p>Birthdate</p>
					<input type="date" value="" name="birthdate" />
					
					<p><input type="checkbox" value="" name="terms_box" />I've read and accept <a href="#">The Terms of Service</a></p>
					
					<input type="submit" value="Confirm" style={styles.registerSubmit} />
				</form>
			</div>
		</div>
	);
}

const styles = {};

styles.nav = {
  padding: 0,
  margin: 0,
  marginLeft: "350px",
  marginTop: "20px",
  height: "50px",
  width: "100px",
  display: "flex"
};

styles.li = {
  marginRight: "150px",
  listStyleType: "none"
};

styles.login = {
	width: "400px",
	height: "500px",
	marginLeft: "550px",
	marginBottom: "100px",
	backgroundColor: "#D0D0D0",
	border: "1px solid black"
};

styles.loginInput = {
	width: "300px",
	height: "30px",
	marginTop: "20px"
};

styles.loginSubmit = {
	marginTop: "20px",
	width: "250px",
	height: "30px",
	backgroundColor: "#bae7ff"
};

styles.register = {
	width: "400px",
	height: "500px",
	marginLeft: "550px",
	marginBottom: "100px",
	backgroundColor: "#D0D0D0",
	border: "1px solid black"
};

styles.registerInput = {
	width: "250px",
	height: "30px"
};

styles.registerSubmit = {
	marginTop: "20px",
	width: "250px",
	height: "30px",
	backgroundColor: "#bae7ff"
};

export default App;