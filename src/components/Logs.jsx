/* File Name: Logs.jsx
   File Description: Footer component to my cycling app
   Author: Erica Li
   Date Updated: 7-06-2022
*/

import React from "react";
import './stylesheet.css';
import {Cyclist} from '../Cyclist.js';
import {Log} from '../Log.js';

class Logs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showAdd: false,
			showDelete: false,
			showUpdate: false,
			showSort: false,
			showFilter: false,
			showFind: false,
			showPoints: false,
			allLogs: global.mycyclist.getAllLogs(),
			deleteId: '',
			updateId: '',
			updateDate: '',
			updateDistance: '',
			updateTime: '',
			sortType: '',
			filterType: '',
			findId: '',
			findMessage: '',
			totalPoints: global.mycyclist.totalPoints
			
			
			

		}
		this.addDistance = React.createRef()
		this.addTime = React.createRef()
		this.addDate = React.createRef()

		this.handleAddSubmit = this.handleAddSubmit.bind(this)
		this.toShowAdd = this.toShowAdd.bind(this)
		
		this.updateDeleteId = this.updateDeleteId.bind(this)
		this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this)
		this.toShowDelete = this.toShowDelete.bind(this)
		this.toRevertDelete = this.toRevertDelete.bind(this)
		
		this.updateUpdateId = this.updateUpdateId.bind(this)
		this.updateUpdateDate = this.updateUpdateDate.bind(this)	
		this.updateUpdateDistance = this.updateUpdateDistance.bind(this)
		this.updateUpdateTime = this.updateUpdateTime.bind(this)
		this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
		this.toShowUpdate = this.toShowUpdate.bind(this)
		this.toRevertUpdate = this.toRevertUpdate.bind(this)
		
		this.handleSortChange = this.handleSortChange.bind(this)
		this.handleSortSubmit = this.handleSortSubmit.bind(this)
		this.toShowSort = this.toShowSort.bind(this)
		
		this.handleFilterChange = this.handleFilterChange.bind(this)
		this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
		this.toShowFilter = this.toShowFilter.bind(this)
		
		this.updateFindId = this.updateFindId.bind(this)
		this.handleFindSubmit = this.handleFindSubmit.bind(this)
		this.toShowFind = this.toShowFind.bind(this)
		
		this.toShowTotalPoints = this.toShowTotalPoints.bind(this)
		
		this.save = this.save.bind(this)
		this.load = this.load.bind(this)
	} 
	
	/* updateAddDateId(e) {
		this.setState({addDate: e.target.value})
	}
	
	updateAddDistance(e) {
		this.setState({addDistance: e.target.value})
	}
	
	updateAddTime(e) {
		this.setState({addTime: e.target.value})
	} */
	
	// for add log functions
	handleAddSubmit(e) {
		e.preventDefault();
		//const form = document.getElementById('Submit')
		//this.setState({displayEnterCyclist: false})
		//this.setState({displayCyclistDetails: true})
		global.mycyclist.addLog(new Date(this.addDate.current.value), Number(this.addDistance.current.value), Number(this.addTime.current.value))
		console.log(global.mycyclist)
		this.setState({allLogs: global.mycyclist.getAllLogs()})
		this.setState({showAdd: false})
	}
	
	toShowAdd(e) {
		this.setState({showAdd: true})		
		this.setState({showDelete: false})
		this.setState({showUpdate: false})
		this.setState({showSort: false})
		this.setState({showFilter: false})
		this.setState({showFind: false})
		this.setState({showPoints: false})
		
	}
	
	// Delete-related funtions:
	
	updateDeleteId(e) {
		this.setState({deleteId: e.target.value})
	}
	
	handleDeleteSubmit(e) {
		e.preventDefault();
		global.mycyclist.deleteLog(Number(this.state.deleteId))
		this.setState({allLogs: global.mycyclist.getAllLogs()})
		this.setState({showDelete: false})
	}
	
	toShowDelete(e) {
		this.setState({showAdd: false})		
		this.setState({showDelete: true})
		this.setState({showUpdate: false})
		this.setState({showSort: false})
		this.setState({showFilter: false})
		this.setState({showFind: false})
		this.setState({showPoints: false})
	}
	
	toRevertDelete(e) {
		global.mycyclist.revertDelete()
		this.setState({allLogs: global.mycyclist.getAllLogs()})
	}	
	
	// Update functions
	
	updateUpdateId(e) {
		this.setState({updateId: e.target.value})
	}
	
	updateUpdateDate(e) {
		this.setState({updateDate: e.target.value})
	}
	
	updateUpdateDistance(e) {
		this.setState({updateDistance: e.target.value})
	}
	
	updateUpdateTime(e) {
		this.setState({updateTime: e.target.value})
	}
	
	handleUpdateSubmit(e) {
		e.preventDefault();
		global.mycyclist.updateLog(Number(this.state.updateId), new Date(this.state.updateDate), Number(this.state.updateDistance), Number(this.state.updateTime))
		console.log('Before:')
		console.log(this.state.allLogs)
		this.setState({allLogs: global.mycyclist.getAllLogs()})
		console.log('After:')
		console.log(this.state.allLogs)
		console.log(global.mycyclist)
		this.setState({showUpdate: false})
	}
	
	toShowUpdate(e) {
		this.setState({showAdd: false})		
		this.setState({showDelete: false})
		this.setState({showUpdate: true})
		this.setState({showSort: false})
		this.setState({showFilter: false})
		this.setState({showFind: false})
		this.setState({showPoints: false})
	}
	
	toRevertUpdate(e) {
		global.mycyclist.revertEdit()
		this.setState({allLogs: global.mycyclist.getAllLogs()})
	}
		
	// Sort functions
	
	handleSortChange(e) {
		this.setState({sortType: e.target.value})
	}	
	
	handleSortSubmit(e) {
		e.preventDefault();
		if (this.state.sortType == 'date') {
			global.mycyclist.sortLogByDate()
		} else if ( this.state.sortType == 'points') {
			global.mycyclist.sortLogByPoints()
		} else {
			global.mycyclist.sortLog()
			// this.setState({allLogs: global.mycyclist.getAllLogs()})
		}
		
		this.setState({allLogs: global.mycyclist.getAllLogs()})
		this.setState({showSort: false})
	}
	
	toShowSort(e) {
		this.setState({showAdd: false})		
		this.setState({showDelete: false})
		this.setState({showUpdate: false})
		this.setState({showSort: true})
		this.setState({showFilter: false})
		this.setState({showFind: false})
		this.setState({showPoints: false})
	}
	
	// Filter funtions
	
	handleFilterChange(e) {
		this.setState({filterType: e.target.value})
	}

	handleFilterSubmit(e) {
		e.preventDefault();
		
		if (this.state.filterType == 'fast') {
			this.setState({allLogs: global.mycyclist.getFastLogs()})
			if ( global.mycyclist.getFastLogs() == '' ) {
				this.setState({allLogs: 'None'})
			}
			
		} else if ( this.state.filterType == 'slow') {
			this.setState({allLogs: global.mycyclist.getSlowLogs()})
			if ( global.mycyclist.getSlowLogs() == '' ) {
				this.setState({allLogs: 'None'})
			}
			
		} else if ( this.state.filterType == 'moderate') {
			this.setState({allLogs: global.mycyclist.getModerateSpeedLogs()})
			if ( global.mycyclist.getModerateSpeedLogs() == '' ) {
				this.setState({allLogs: 'None'})
			}
			
		} else {
			this.setState({allLogs: global.mycyclist.getAllLogs()})
		}

		this.setState({showFilter: false})
	}

	toShowFilter(e) {
		this.setState({showAdd: false})		
		this.setState({showDelete: false})
		this.setState({showUpdate: false})
		this.setState({showSort: false})
		this.setState({showFilter: true})
		this.setState({showFind: false})
		this.setState({showPoints: false})
	}

	// Find functions
	
	updateFindId(e) {
		this.setState({findId: e.target.value})
	}	
	
	handleFindSubmit(e) {
		e.preventDefault();
		let result = global.mycyclist.findLog(Number(this.state.findId))
		result = `${result}`
		//console.log('Hello')
		//console.log(result)
		
		if (result == `${null}`) {
			this.setState({findMessage: 'The log ID you have entered is not correct.'})
			console.log('Hello again')
		} else {
			this.setState({allLogs: result})
			this.setState({findMessage: 'Your search is successful.'})
		}
		
		//const myTImeout = setTimeout(this.setState({findMessage: ''}), 5000)
		//this.setState({showFind: false})
		
		//global.mycyclist.deleteLog(Number(this.state.deleteId))
		//this.setState({allLogs: global.mycyclist.getAllLogs()})
		//this.setState({showDelete: false})
	}
	
	toShowFind(e) {
		this.setState({showAdd: false})		
		this.setState({showDelete: false})
		this.setState({showUpdate: false})
		this.setState({showSort: false})
		this.setState({showFilter: false})
		this.setState({showFind: true})
		this.setState({showPoints: false})
	}
	
	// Total Points
	
	toShowTotalPoints(e) {
		global.mycyclist.generateTotalPoints()
		this.setState({totalPoints: global.mycyclist.totalPoints})
		this.setState({showAdd: false})		
		this.setState({showDelete: false})
		this.setState({showUpdate: false})
		this.setState({showSort: false})
		this.setState({showFilter: false})
		this.setState({showFind: false})
		this.setState({showPoints: true})
		
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
	}
	

	
  render() {
		
		let allLogs = global.mycyclist.getAllLogs()
		let { showAdd, showDelete, showUpdate, showSort, showFilter, showFind, showPoints, ...other} = this.state;

		return (
			<div className="logs">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-lg-9 mx-auto d-block">
							<h1 className="font-weight-light mb-4 mt-4">Your Logs</h1>
							<p className="mb-4" style={{ textAlign: 'center' }}>
								Below are your logs:
							</p>
							<div className="col-lg-6 mx-auto d-block border border-secondary p-5" style={{ background: '#e3f6f5' }}>
								<p className="whitespace" >{this.state.allLogs}</p>
							</div>
							<div className="col-lg-7 mx-auto d-block">
								<br /><button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toShowAdd}>Add</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toShowDelete}>Delete</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toRevertDelete}>Revert Delete</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toShowUpdate}>Update</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toRevertUpdate}>Revert Update</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toShowSort}>Sort</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toShowFilter}>Filter</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toShowFind}>Find</button>
								<button type="button" class="btn text-white my-1 mx-2 p-2" style={{ background: '#24527a' }} onClick={this.toShowTotalPoints}>Total Points</button>
							</div>
							{showAdd && (
								<div className="mt-3 p-5" style={{ background: '#e3f6f5' }}>
									<form onSubmit={this.handleAddSubmit}>
										<label className="ms-5">Date:		
											<input className="ms-3" type="date" required defaultValue="2022-06-01" ref={this.addDate} 
											/>
										</label>
										<label className="ms-3">Distance (in kms):		
											<input className="ms-3" type="number" min="1" max="100" required defaultValue="5" ref={this.addDistance}
											/>
										</label>
										<label className="ms-3">Time (in mins):		
											<input className="ms-3" type="number" min="1" max="1200" required defaultValue='20' ref={this.addTime}
											/>
										</label>
										<input type="submit" value="Submit" className="ms-3"/>
									</form>
								</div>
							)}
							{showDelete && (
								<div className="mt-3 p-5" style={{ background: '#e3f6f5' }}>
									<form onSubmit={this.handleDeleteSubmit}>
										<label className="ms-5">Log ID to delete:
											<input className="ms-3" type="number" min="1" max={global.mycyclist.currentLogIndex} required value={this.state.deleteId} onChange={this.updateDeleteId}
											/>
											</label>
											<input type="submit" value="Submit" className="ms-3"/>
									</form>
								</div>
							)}
							{showUpdate && (
								<div className="mt-3 p-5" style={{ background: '#e3f6f5' }}>
									<p>Please enter all fields:</p>
									<form onSubmit={this.handleUpdateSubmit}>
										<label className="ms-5 mb-4">Log ID to update:
											<input className="ms-3" type="number" min="1" max={global.mycyclist.currentLogIndex} required value={this.state.updateId} onChange={this.updateUpdateId}
											/>
											</label>
										<br /><label className="ms-5">Date:		
											<input className="ms-3" type="date" required value={this.state.updateDate} onChange={this.updateUpdateDate} 
											/>
										</label>
										<label className="ms-3">Distance (in kms):		
											<input className="ms-3" type="number" min="1" max="100" required value={this.state.updateDistance} onChange={this.updateUpdateDistance}
											/>
										</label>
										<label className="ms-3">Time (in mins):		
											<input className="ms-3" type="number" min="1" max="1200" required value={this.state.updateTime} onChange={this.updateUpdateTime}
											/>
										</label>
										<input type="submit" value="Submit" className="ms-3"/>
									</form>
								</div>
							)}
							{showSort && (
								<div className="mt-3 p-5" style={{ background: '#e3f6f5' }}>
									<form onSubmit={this.handleSortSubmit}>
										<label>
											Pick choose your sort order:
											<select value={this.state.sortType} onChange={this.handleSortChange} className="ms-3">
												<option value="id">By Log Number</option>
												<option value="date">By Date</option>
												<option value="points">By Points</option>
											</select>
										</label>
										<input type="submit" value="Submit" className="ms-3"/>
									</form>
								</div>
							)}
							{showFilter && (
								<div className="mt-3 p-5" style={{ background: '#e3f6f5' }}>
									<form onSubmit={this.handleFilterSubmit}>
										<label>
											Filter:
											<select value={this.state.filterType} onChange={this.handleFilterChange} className="ms-3">
												<option value="none">OFF</option>
												<option value="fast">ON - By Fast Logs</option>
												<option value="moderate">ON - By Moderate Logs</option>
												<option value="slow">ON - By Slow Logs</option>
											</select>
										</label>
										<input type="submit" value="Submit" className="ms-3"/>
									</form>
								</div>
							)}
							{showFind && (
								<div className="mt-3 p-5" style={{ background: '#e3f6f5' }}>
									<form onSubmit={this.handleFindSubmit}>
										<label className="ms-5">Find Log ID:
											<input className="ms-3" type="number" min="1" max={global.mycyclist.currentLogIndex} required value={this.state.findId} onChange={this.updateFindId}
											/>
											</label>
											<input type="submit" value="Submit" className="ms-3"/>
									</form>
									<br /><p>{this.state.findMessage}</p>
								</div>
							)}
							{showPoints && (
								<div className="mt-3 p-5" style={{ background: '#e3f6f5' }}>
									<p>Total Points: {this.state.totalPoints}</p>
								</div>
							)}
							<br /><br />
							<div className="col-lg-3 mx-auto d-block border-top border-dark pt-5">
								<button type="button" class="btn btn-success mx-3 ms-5 p-2" onClick={this.save}>Save</button>
								<button type="button" class="btn btn-success mx-3 p-2" onClick={this.load}>Load</button>
							</div>
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Logs;