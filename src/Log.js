/* eslint-env es6*/
/* eslint quotes: ["error", "single"]*/
/* eslint semi: ["error", "never"]*/
/* globals*/
/*eslint no-undef: "error"*/
/*eslint-env node*/

/* File Name: Log.js
   File Description: Contains the Log class of the cycling app
   Author: Erica Li
   Date Updated: 7-0-2022
*/

//module.exports = class Log {

export class Log {
	constructor (newLogId, newDate, newDistance, newTime) {
		this.logId = newLogId
		this.date = newDate
		this.stringDate = `${this.date}`
		this.distance = newDistance
		this.time = newTime
		this.speed = Math.round(this.distance / (this.time/60))
		this.pointsEarned = 0
	}
	
	
	// Boolean Methods:
	
	
	isFast() {
		return this.speed >= 24
	}
	
	isSlow() {
		return this.speed < 10 && this.speed > 0
	}
	
	isValidDate() {
		return (Object.prototype.toString.call(this.date) === '[object Date]') 
	}
	
	isCorrectMeasurement(entry, minValue=0) {
		return (typeof entry === 'number') && (entry > minValue)
	}
	
	isValidLogEntry () {
		return this.isValidDate() && this.isCorrectMeasurement(this.distance) && this.isCorrectMeasurement(this.time)
	}

	// Calculation Methods

	generatePoints(valueForFast=4, valueForMedium=2, valueForSlow=1) {
		let calculationVariable
		if (this.isFast()) {
			calculationVariable = valueForFast
		} else if (this.isSlow()) {
			calculationVariable = valueForSlow
		} else {
			calculationVariable = valueForMedium
		}
		this.pointsEarned = calculationVariable * this.time		
	}
	
	// String Methods
	
	toString() {
		let date = this.date
		let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		let message = `\nLog ${this.logId} on ${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}: \n    Time taken: ${this.time}mins Distance: ${this.distance}km Speed: ${this.speed}km/h \n    Points Earned: ${this.pointsEarned}.`
		return message
	}	
}

