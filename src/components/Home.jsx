/* File Name: Home.jsx
   File Description: Home component to my cycling app
   Author: Erica Li
   Date Updated: 7-06-2022
*/

import React from "react";
import './stylesheet.css';
import {Cyclist} from '../Cyclist.js';
import {Log} from '../Log.js';

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			displayEnterCyclist: true,
			displayCyclistDetails: false,
			mycyclist: '',
			idNum: global.mycyclist.id,
			firstName: global.mycyclist.firstName,
			lasttName: global.mycyclist.lastName,
			weight: global.mycyclist.weight,
			height: global.mycyclist.height,
			firstTime: global.firstTime
			
		}
		this.updateFirstName = this.updateFirstName.bind(this)
		this.updateLastName = this.updateLastName.bind(this)
		this.updateId = this.updateId.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.updateWeight = this.updateWeight.bind(this)
		this.updateHeight = this.updateHeight.bind(this)
		this.toUpdatePage = this.toUpdatePage.bind(this)
		
		this.save = this.save.bind(this)
		this.load = this.load.bind(this)

	}

	updateId(e) {
		this.setState({idNum: e.target.value})
	}	
	
	updateFirstName(e) {
		this.setState({firstName: e.target.value})
	}

	updateLastName(e) {
		this.setState({lasttName: e.target.value})
	}
	
	updateWeight(e) {
		this.setState({weight: e.target.value})
	}
	
	updateHeight(e) {
		this.setState({height: e.target.value})
	}
	
	handleSubmit(e) {
		e.preventDefault();
		//const form = document.getElementById('Submit')
		this.setState({displayEnterCyclist: false})
		this.setState({displayCyclistDetails: true})
		if (this.state.firstTime) {
			global.mycyclist = global.initialcyclist
			global.firstTime = false
			this.setState({firstTime: global.firstTime})
			
		} else {
			global.mycyclist.firstName = global.initialcyclist.firstName
			global.mycyclist.lastName = global.initialcyclist.lastName
			global.mycyclist.weight = global.initialcyclist.weight
			global.mycyclist.height = global.initialcyclist.height
		}
	}
	
	toUpdatePage(e) {
		//e.preventDefault();
		//const form = document.getElementById('Submit')
		this.setState({displayEnterCyclist: true})
		this.setState({displayCyclistDetails: false})	
	}
	
	// Local Storage
	
	save(e) {
		global.mycyclist.addAllLogsToLocalStorage()
	}
	
	load(e) {
		var loadObj = global.mycyclist.loadAllLogsFromLocalStorage()
		
		function convertToCyclistClass(loadObj) {
			var cyclistObj = new Cyclist();
			for( var key in loadObj ) {
				cyclistObj[key] = loadObj[key];
			}	
			
			for (var i = 0; i < cyclistObj.allMyLogs.length; i++) {
				
				cyclistObj.allMyLogs[i].date = new Date(cyclistObj.allMyLogs[i].date.toString().slice(0,10))
				console.log(`Bien: ${cyclistObj.allMyLogs[i].date}`)
				
				cyclistObj.allMyLogs[i] = Object.assign(new Log(), cyclistObj.allMyLogs[i])
				//console.log(cyclistObj.allMyLogs[i])
			}
			return cyclistObj;
		}
			
		var loadCyclist = convertToCyclistClass(loadObj)
		global.mycyclist = loadCyclist
		this.setState({allLogs: global.mycyclist.getAllLogs()})
		global.firstTime = false
		
		this.setState({firstTime: global.firstTime})
		this.setState({firstName: global.mycyclist.firstName})
		this.setState({lastName: global.mycyclist.lastName})
		this.setState({idNum: global.mycyclist.id})
		this.setState({weight: global.mycyclist.weight})
		this.setState({height: global.mycyclist.height})
	}
	
	render() {
		let { displayEnterCyclist, displayCyclistDetails, ...other} = this.state;
		global.initialcyclist = new Cyclist (this.state.idNum, this.state.firstName, this.state.lasttName, this.state.weight, this.state.height)
		this.state.mycyclist = global.mycyclist
		return (
			<div className="home">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-lg-9 mx-auto d-block">
							<h1 className="font-weight-light mb-5">Welcome To MyCyclist</h1>
							{displayEnterCyclist && (
								<div>
									<p className="mb-4" style={{ textAlign: 'center' }}>Enter/ update my details: <span style={{ fontWeight: 'bold' }} >(Note: Your ID is 1)</span></p>
									<div className="col-lg-6 mx-auto d-block border border-secondary p-5" style={{ background: '#e3f6f5' }}>
										<form onSubmit={this.handleSubmit}>
											<label className="mb-3">ID:		
												<input className="ms-3" type="number" min="1" max="1" required defaultValue={global.mycyclist.id} onChange={this.updateId} 
												/>
											</label>
											 <br /><label className="mb-3" >First name:		
												<input className="ms-3" maxLength="10" required type="text" name="firstname" id="firstname" required defaultValue={global.mycyclist.firstName} onChange={this.updateFirstName}
												/>
											</label>
											 <br /><label className="mb-3">Last name:		
												<input className="ms-3" maxLength="10" required defaultValue={global.mycyclist.lastName} type="text" onChange={this.updateLastName}
												/>
											</label>
											 <br /><label className="mb-3">Weight (in kg):		
												<input className="ms-3" type="number" min="30" max="150" required defaultValue={global.mycyclist.weight} onChange={this.updateWeight}
												/>
											</label>
											<br /><label className="mb-3">Height (in cm):		
												<input className="ms-3" type="number" min="120" max="210" required defaultValue={global.mycyclist.height} onChange={this.updateHeight}
												/>
											</label>											
											<br></br><input type="submit" value="Submit" className="mx-auto d-block mt-4"/>
										</form>										
									</div>

								</div>
								
							)}
							{displayCyclistDetails && (
								<div>
									<p className="mb-4" style={{ textAlign: 'center' }}>My Details:</p>
									<div className="col-lg-6 mx-auto d-block border border-secondary p-5" style={{ background: '#e3f6f5' }}>
										<p><span className="me-3" style={{ fontWeight: 'bold' }}>ID:</span>{global.mycyclist.id}</p>
										<p><span className="me-2" style={{ fontWeight: 'bold' }}>Full Name: </span>{global.mycyclist.firstName} {global.mycyclist.lastName}</p>
										<p><span className="me-2" style={{ fontWeight: 'bold' }}>Weight: </span>{global.mycyclist.weight}</p>
										<p><span className="me-2" style={{ fontWeight: 'bold' }}>Height: </span>{global.mycyclist.height}</p>
										<button className="mx-auto d-block btn-success mt-3" onClick={this.toUpdatePage} style={{ background: '#24527a' }}>Update Your Details</button>
									</div>
								</div>
							)}
							<br /><br />
							<div className="col-lg-3 mx-auto d-block">
								<button type="button" class="btn btn-success mx-3 ms-5 p-2" onClick={this.save}>Save</button>
								<button type="button" class="btn btn-success mx-3 p-2" onClick={this.load}>Load</button>
							</div> <br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;