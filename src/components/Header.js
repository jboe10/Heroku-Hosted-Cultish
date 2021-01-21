import React, { Component } from 'react'
import {Link} from "react-router-dom";
// import Work from './work/Work';
// import Info from './info/Info';
// import Store from './store/Store';
// import Contact from './contact/Contact';

export default class Header extends Component {
	constructor(props) {
		super(props);
		var date = new Date(); /* creating object of Date class */
		this.state = {
			currentPath:window.location.pathname,
   		hour : date.getHours(),
  		min : date.getMinutes(),
   		sec : date.getSeconds()
		};
	}

	currentTime() {
		 this.setState({
			hour: this.updateTime(this.state.hour),
			min: this.updateTime(this.state.min),
			sec: this.updateTime(this.state.sec)
		 })
	}

	updateTime(k) {
		if (k < 10) {
			return "0" + k;
		}
		else {
			return k;
		}
	}

	render() {
		return (
			<div className="header" id="top">
				<ul className="header-links">
					<li>
						<Link to="/" className={(this.props.to === this.state.currentPath)?"active-page":"inactive-page"}>Cultish R</Link>
					</li>
					<li>  
						<Link to="/" className={(this.props.to ===  this.state.currentPath)?"active-page":"inactive-page"}>Work</Link>
					</li>
					<li>
						<Link to="/" className={(this.props.to ===  this.state.currentPath)?"active-page":"inactive-page"}>Info</Link>
					</li>
					<li>
						<Link to="/" className={(this.props.to ===  this.state.currentPath)?"active-page":"inactive-page"}>Store</Link>
					</li>  
					<li>
						<Link to="/" className={(this.props.to ===  this.state.currentPath)?"active-page":"inactive-page"}>Contact</Link>
					</li>
				</ul>
				<div className="header-info">
					<ul >
						<li>
							PST 22°C&nbsp; 
						</li>
						<li>
							{this.state.hour} : {this.state.min} : {this.state.sec}
						</li>
					</ul>
				</div> 
			</div>
		)
	}
}
