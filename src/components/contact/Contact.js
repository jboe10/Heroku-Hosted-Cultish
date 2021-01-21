import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../ContactFooter';

export default class Contact extends Component{
	constructor(props){
		super(props);

	}

	componentDidMount() {
	}
	
	render () {
		return (
			<>
			<div className="contact">
				<Header/>
				<div className="contact-body">
					<div className="title-wrap">
						<h1>CONT-</h1>
						<h1>ACT C®</h1>
					</div>

					<div className="directions-wrap">
						<div className="direction">
							<ul>
								<li>THE STACK</li>
								<li>7 WELTEVERDEN ST</li>
								<li>GARDENS</li>
								<li>CAPE TOWN</li>
								<li>8001</li>
							</ul>
							<h5>DIRECTIONS</h5>
						</div>
						<div className="direction">
							<ul>
								<li>IDEAS CARTEL</li>
								<li>SAND HILL RD</li>
								<li>GREEN POINT</li>
								<li>CAPETOWN</li>
								<li>8001</li>
							</ul>
							<h5>DIRECTIONS</h5>
						</div>
						<div className="direction">
							<ul>
								<li>SHOP 303B</li>
								<li>MENLYN MAINE</li>
								<li>COROBAY AVE</li>
								<li>PRETORIA</li>
								<li>0081</li>
							</ul>
							<h5>DIRECTIONS</h5>
						</div>
					</div>

					<div className="gram">
						<h3>HEY@CULTISH.STUDIO</h3>
					</div>
				</div>

				<div className="pic-title">
					CAPE TOWN, ZA
				</div>

				<div className="marquee-wrap">
					<div className="marquee">
						<ul className="marquee-content">
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
							<li>'TILL DEATH, WE DO ART</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer/>
		</>
		)
	}
}
