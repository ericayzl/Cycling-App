/* eslint-env es6 */
/* eslint quotes: ["error", "single"] */
/* eslint semi: ["error", "never"] */
/* globals */
/* eslint no-undef: "error" */
/* eslint-env node */
/* globals localStorage */

/* File Name: Cyclist.js
   File Description: Contains the Cyclist class of the cycling app
   Author: Erica Li
   Date Updated: 7-06-2022
*/

//let Log = require('./Log')

//module.exports = class Cyclist {
	
import {Log} from './Log.js'

export class Cyclist {
	constructor (newId, newFirstName, newLastName, newWeight, newHeight) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.weight = newWeight
		this.height = newHeight
		this.totalLogs = 0
		this.allMyLogs = []
		this.deletedLog = null
		this.previousEdit = null
		this.currentLogIndex = 1
		this.totalPoints = 0
	}
	
	addLog (newDate, newDistance, newTime) {
		let newLog = new Log(this.currentLogIndex, newDate, newDistance, newTime)
		newLog.generatePoints()
		let message
		if (newLog.isValidLogEntry()) {
			this.allMyLogs.push(newLog)
			this.totalLogs += 1
			this.generateTotalPoints() 
			this.currentLogIndex += 1
			message = 'Log is successfully entered'
		} else {
			message = 'Invalid log entry. Please try again'
		}
		return message
	}
	
	sortLog () {
		this.allMyLogs.sort(function (a, b) {
			return a.logId - b.logId
		})
	}
	
	sortLogByDate () {
		this.allMyLogs.sort(function (a, b) {
			return a.date - b.date
		})
	}
	
	sortLogByPoints () {
		this.allMyLogs.sort(function (a, b) {
			return a.pointsEarned - b.pointsEarned
		})
	}
	
	findLog (targetlogId=1) {
		let foundLogId = null
		for (let aLog of this.allMyLogs) {
			if (aLog.logId === targetlogId) {
				foundLogId = aLog
				break
			}
		}
		return foundLogId
	}
	
	deleteLog (targetlogId) {
		this.deletedLog = this.findLog(targetlogId)
		if (this.deletedLog != null) {
			let index = this.allMyLogs.indexOf(this.deletedLog)
			this.allMyLogs.splice(index, 1)
			this.totalLogs -= 1		
		}	
	}
	
	revertDelete () {
		if (this.deletedLog != null) {
			this.allMyLogs.push(this.deletedLog)
			this.totalLogs = this.allMyLogs.length
			this.deletedLog = null
		}
		
	}
	
	replaceLog(oldLog, newLog) {
		let index = this.allMyLogs.indexOf(oldLog)
		this.allMyLogs[index] = newLog
	}
	
	updateLog (targetlogId, newDate, newDistance, newTime) {
		console.log('Into function 1')
		let message
		this.previousEdit = this.findLog(targetlogId)
		if (this.previousEdit != null) {
			let updatedLog = new Log(targetlogId, newDate, Number(newDistance), Number(newTime))
			console.log('Updated log is:')
			console.log(updatedLog)
			if (updatedLog.isValidLogEntry()) {
				console.log('Into function 2')
				updatedLog.generatePoints()
				this.replaceLog(this.previousEdit, updatedLog)
				message = 'Log is successfully updated.'
			}
		} 
	}
	
	revertEdit () {
		if (this.previousEdit != null) {
			let newUpdate = this.findLog(this.previousEdit.logId)
			this.replaceLog(newUpdate, this.previousEdit)
			this.previousEdit = null
		}	
	}
	
	generateTotalPoints () {
		let totalPoints = 0
		for (let aLog of this.allMyLogs) {
			totalPoints += aLog.pointsEarned
		}
		this.totalPoints = totalPoints
	}
	
	getFastLogs() {
		let result = this.allMyLogs.filter(log => log.speed > 25)
		return `${result}`
	}
	
	getSlowLogs() {
		let result = this.allMyLogs.filter(log => log.speed < 10)
		return `${result}`
	}
	
		getModerateSpeedLogs() {
		let result = this.allMyLogs.filter(log => ( log.speed <= 25 && log.speed >= 10))
		return `${result}`
	}
	
	// String Methods
	
	getAllLogs() {
		let message = `${this.firstName} ${this.lastName} (Cyclist ID: ${this.id}) has ${this.totalLogs} logs: \n`
		this.allMyLogs.forEach((aLog) => {
			message += aLog + '\n'
		})
		return message
	}
	
	// Local Storage Methods
	
	addAllLogsToLocalStorage() {
		localStorage.clear()	
		let storageObj = this
		localStorage.setItem('cyclist', JSON.stringify(storageObj))
	}
	
	loadAllLogsFromLocalStorage() {
		let mycyclist = JSON.parse(localStorage.getItem('cyclist'))
		return mycyclist
	}

}