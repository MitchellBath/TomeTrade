import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/Login Form/LoginForm';
import App from './Components/RegistrationForm/registrationForm'
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/home'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<section className="hero">
					<div className="hero-body">
						<div className="container ">
							<h1 className="title">Oops! Something went wrong!</h1>
							<h5>
								Please <a href="Dashboard/Home" >Click</a> on this link to go back to the home page and
								Please reach out to <a href="mailto:ykulkar2@uncc.edu">Yadnesh Kulkarni</a> if the
								problem persists after a retry.
							</h5>
						</div>
					</div>
				</section>
			);
		}		
		return this.props.children;
	}
}

const routing = (
	<Router>
		<ErrorBoundary>
      <ThemeProvider theme={theme}>
      <CssBaseline />
			<Route exact path="/" component={Login} />	
			<Route exact path="/registration" component={App} />		
       <Route exact path="/home" component={Home} />				
      </ThemeProvider>,
     
		</ErrorBoundary>
	</Router> 
);

ReactDOM.render(<>{routing}</>, document.getElementById('root'));

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//     <CssBaseline />
//     <App />
//     </ThemeProvider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
