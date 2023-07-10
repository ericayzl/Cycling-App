/* eslint linebreak-style: ["error", "unix"]*/
/* eslint-env es6*/
/* eslint semi: ["error", "never"]*/
/* globals*/
/* eslint no-undef: "error" */
/* eslint-env node */
/* eslint-env jest */
/* globals localStorage */

/* File Name: cyclistlog.test.js
   File Description: Contains the Jest unit tests for the cycling app
   Author: Erica Li
   Date Updated: 7-06-2022
*/

import {Cyclist} from '../Cyclist.js';
import {Log} from '../Log.js';
import {LocalStorageMock} from '../LocalStorageMock.js';



// let Log = require("../Log")
//let Cyclist = require("../Cyclist")

// import { Cyclist } from "./CyclistClassv1"

// https://jestjs.io/docs/getting-started#using-typescript

//let LocalStorageMock = require("../LocalStorageMock")
// import {Cyclist} from "../CyclistClass"


describe("Cyclist App Test File 1", function() {
	let theCyclist, aLog, expectedLog, loadedItem, foundLog, oldLogOne, beforePropertyValue, loadedLog, secondLog, firstLog, updatedLogOne, thirdLog, fastLogs, afterPropertyValue, expectedObj, loadedObj, originalArrayOne, originalArrayTwo, originalArrayThree, dateArrayOne, dateArrayTwo, dateArrayThree, idArrayOne, idArrayTwo, idArrayThree, pointsArrayOne, pointsArrayTwo, pointsArrayThree, moderateLogs, slowLogs, fourthLog
	
	beforeEach(() => {
        theCyclist = new Cyclist(10000, "Jo", "Baker", 60, 165)
    })
	
	describe("Cyclist Jo Baker (ID:10000) with no logs", function() {
		
		test("should have a .firstName property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "firstName")).toBeTruthy()
        })
		
		test("should have a .lastName property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "lastName")).toBeTruthy()
        })
		
		test("should have a .id property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "id")).toBeTruthy()
        })
		
		test("should have a .firstName of \"Jo\"", function() {
                let theValue = theCyclist.firstName
                expect(theValue).toBe("Jo")
            })
			
		test("should have a .lastName of \"Baker\"", function() {
                let theValue = theCyclist.lastName
                expect(theValue).toBe("Baker")
            })
			
		test("should have a .id of 10000", function() {
                let theValue = theCyclist.id
                expect(theValue).toBe(10000)
            })
			
		test("should have a .totalLogs property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "totalLogs")).toBeTruthy()
        })
		
		test("should have a log count of 0", function() {
            const count = theCyclist.totalLogs
            expect(count).toBe(0)
        })
		
		test("should have an .allMyLogs property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "allMyLogs")).toBeTruthy()
        })

        test("should have an array for the .allMyLogs ", function() {
            expect(Array.isArray(theCyclist.allMyLogs)).toBeTruthy()
        })

        test("should have nothing in the allMyLogs array", function() {
            const arraySize = theCyclist.allMyLogs.length
            expect(arraySize).toBe(0)
        })
		
		test("should have a .currentLogIndex property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "currentLogIndex")).toBeTruthy()
        })
		
		test("should have a current Log Index of 1", function() {
            const count = theCyclist.currentLogIndex
            expect(count).toBe(1)
        })
		
		test("should have a .totalPoints property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "totalPoints")).toBeTruthy()
        })
		
		test("should have a total points of 0", function() {
            const count = theCyclist.totalPoints
            expect(count).toBe(0)
        })
		
		test("should have a .deletedLog property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "deletedLog")).toBeTruthy()
        })
		
		test("should have no deleted logs", function() {
            const count = theCyclist.deletedLog
            expect(count).toBe(null)
        })
		
		test("should have a .previousEdit property", function() {
            expect(Object.prototype.hasOwnProperty.call(theCyclist, "previousEdit")).toBeTruthy()
        })
		
		test("should have no previous edits", function() {
            const count = theCyclist.previousEdit
            expect(count).toBe(null)
        })
	})
	
	describe("Adding one log to the cyclist", function() {
		
		beforeEach(
            () => {
                theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
            }
        )

		test("should have a log count of 1", function() {
            const count = theCyclist.totalLogs
            expect(count).toBe(1)
        })
		
		test("should have a current Log Index of 2", function() {
            const count = theCyclist.currentLogIndex
            expect(count).toBe(2)
        })
		
		test("should have one entry in the allMyLogs array", function() {
            const arraySize = theCyclist.allMyLogs.length
            expect(arraySize).toBe(1)
        })
		
		describe("The first log wtih a distance of 25km for 60 mins on 25th Dec 2011", function() {
            beforeAll(() => {
                aLog = theCyclist.allMyLogs[0]
            })
			
			// Has array of logs
			test("should have a .logId property", function() {
                expect(Object.prototype.hasOwnProperty.call(aLog, "logId")).toBeTruthy()
            })
			
			test("should have a log ID of 1", function() {
				const count = aLog.logId
				expect(count).toBe(1)
			})
			
			// If .speed property is correct, .distance and .time propert should be correct
			test("should have a .speed property", function() {
                expect(Object.prototype.hasOwnProperty.call(aLog, "speed")).toBeTruthy()
            })
			
			test("should have a speed of 25km/h", function() {
				const count = aLog.speed
				const correctSpeed = 25 / (60/60)
				expect(count).toBe(correctSpeed)
			})
			
			test("should have a .pointsEarned property", function() {
                expect(Object.prototype.hasOwnProperty.call(aLog, "pointsEarned")).toBeTruthy()
            })
			
			test("should have 240 points", function() {
				const count = aLog.pointsEarned
				expect(count).toBe(240)
			})
			
			test("should return the correct String", function() {
                let theWords = aLog.toString()
                expect(theWords).toBe("\nLog 1 on 25-Dec-2011: \n    Time taken: 60mins Distance: 25km Speed: 25km/h \n    Points Earned: 240.")
            })
		})
	})

	describe("The cyclist have 4 logs", function() {
		
		beforeEach(() => {
        theCyclist.addLog(new Date(2011, 11, 25), 35, 60)
				theCyclist.addLog(new Date(2012, 1, 5), 16, 30)
				theCyclist.addLog(new Date(2013, 0, 18), 10, 50)
				theCyclist.addLog(new Date(2015, 8, 2), 7, 60)
				
            }
        )

		test("should have 4 logs in the .allMyLogs array", function() {
            const arraySize = theCyclist.allMyLogs.length
            expect(arraySize).toBe(4)
        })
		
		describe("The filter fast, moderate, and slow logs functions", function() {
            beforeAll(() => {
                firstLog = theCyclist.allMyLogs[0]
				secondLog = theCyclist.allMyLogs[1]
				thirdLog = theCyclist.allMyLogs[2]
				fourthLog = theCyclist.allMyLogs[3]
				fastLogs = theCyclist.getFastLogs()
				moderateLogs = theCyclist.getModerateSpeedLogs()
				slowLogs = theCyclist.getSlowLogs()
            })
		
			test("the filter fast logs function should return log information of the two logs that are over 25km/h", function() {
				expect(fastLogs).toBe("\nLog 1 on 25-Dec-2011: \n    Time taken: 60mins Distance: 35km Speed: 35km/h \n    Points Earned: 240.,\nLog 2 on 5-Feb-2012: \n    Time taken: 30mins Distance: 16km Speed: 32km/h \n    Points Earned: 120.")
			})
			
			test("the filter fast logs function should not filter log with log ID 3", () => {
				let unfilteredLogs = [thirdLog]
				expect(fastLogs).toEqual(expect.not.stringContaining("Log 3"))
			})	

			test("the filter moderate logs function should return log information of the one log (log 3) that is between 10 and 25km/h", function() {
				expect(moderateLogs).toEqual(expect.stringContaining("Log 3"))
			})	

			test("the filter slow logs function should not return log 1 because it is not under 10km/h", function() {
				expect(slowLogs).toEqual(expect.not.stringContaining("Log 1"))
			})

			test("the filter slow logs function should not return log 2 because it is not under 10km/h", function() {
				expect(slowLogs).toEqual(expect.not.stringContaining("Log 2"))
			})

			test("the filter slow logs function should not return log 3 because it is not under 10km/h", function() {
				expect(slowLogs).toEqual(expect.not.stringContaining("Log 3"))
			})

			test("the filter slow logs function should return log 4 information because it is under 10km/h", function() {
				expect(slowLogs).toEqual(expect.stringContaining("Log 4"))
			})			
		})
		
		describe("The delete function that deleted log with log ID 2", function() {
			
			beforeEach(() => {
				secondLog = theCyclist.allMyLogs[1]
				theCyclist.deleteLog(2)
            })
			
			test("should not have deleted log with log ID 2", () => {
				let deletedLog = [secondLog]
				expect(theCyclist.allMyLogs).toEqual(expect.not.arrayContaining(deletedLog))
			})
			
			test("should produce .deletedLog property of the deleted log with log ID 2", () => {
				let deletedLog = secondLog
				expect(theCyclist.deletedLog).toEqual(deletedLog)
			})
			
			describe("The .revertDelete() function", function() {
				
				beforeEach(() => {
					theCyclist.revertDelete()
				})
				
				test("should produce a log with log ID 2 again", () => {
					let deletedLog = [secondLog]
					expect(theCyclist.allMyLogs).toEqual(expect.arrayContaining(deletedLog))
				}) 
				
				test("should an empty .deletedLog property again", () => {
					expect(theCyclist.deletedLog).toEqual(null)
				})
			}) 
		})
	})
		
	describe("The .totalPoints property", function() {
		
		beforeEach(() => {
			beforePropertyValue = theCyclist.totalPoints
			theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
			theCyclist.addLog(new Date(2012, 1, 5), 13, 30)
			theCyclist.addLog(new Date(2013, 0, 18), 10, 50)
			afterPropertyValue = theCyclist.totalPoints
        })
		
		test("should be 0 before adding the logs", () => {
			expect(beforePropertyValue).toBe(0)
		})
		
		test("should be correct after adding the logs because of .generateTotalPoints() fn inside .addLog fn", () => {
			let firstLogPoints = theCyclist.allMyLogs[0].pointsEarned
			let secondLogPoints = theCyclist.allMyLogs[1].pointsEarned
			let thirdLogPoints = theCyclist.allMyLogs[2].pointsEarned
			let totalPoints = firstLogPoints + secondLogPoints + thirdLogPoints
			expect(afterPropertyValue).toBe(totalPoints)
		})
		
	})
	
	describe("The .findLog fn", function() {
		
		beforeEach(() => {
			theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
			theCyclist.addLog(new Date(2012, 1, 5), 13, 30)
			theCyclist.addLog(new Date(2013, 0, 18), 10, 50)
        })

		test("should find the correct log", () => {
			let firstLog = theCyclist.allMyLogs[0]
			let foundLog = theCyclist.findLog(1)
			expect(foundLog).toEqual(firstLog)
		})
		
		test("should have the correct found-log ID", () => {
			let foundLog = theCyclist.findLog(1)
			expect(foundLog.logId).toBe(1)
		})
		
	})

	describe("The .getAllLogs fn", function() {
		
		beforeEach(() => {
			theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
			theCyclist.addLog(new Date(2012, 1, 5), 13, 30)
        })
		
		test("should return the correct String", function() {
			let theMessage = theCyclist.getAllLogs()
			expect(theMessage).toBe("Jo Baker (Cyclist ID: 10000) has 2 logs: \n\nLog 1 on 25-Dec-2011: \n    Time taken: 60mins Distance: 25km Speed: 25km/h \n    Points Earned: 240.\n\nLog 2 on 5-Feb-2012: \n    Time taken: 30mins Distance: 13km Speed: 26km/h \n    Points Earned: 120.\n")
		})
		
	})

	describe("The .updateLog fn", function() {
		
		beforeEach(() => {
                theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
				theCyclist.addLog(new Date(2012, 1, 5), 13, 30)
				theCyclist.addLog(new Date(2013, 0, 18), 10, 50)
				oldLogOne = theCyclist.allMyLogs[0]
				theCyclist.updateLog(1, new Date(2011, 11, 26), 15, 60)
				updatedLogOne = theCyclist.allMyLogs[0]
            }
        )
		
		test("should have an updated log with the same log ID 1 as before", () => {
			expect(theCyclist.allMyLogs[0].logId).toBe(1)
		})
		
		test("should not have an updated log with the exact same features as before", () => {
			expect(theCyclist.allMyLogs).toEqual(expect.not.arrayContaining([oldLogOne]))
		})
		

		test("should have log ID 1 with an updated .date property of 26-Dec-2011", function() {
			const logDate = theCyclist.allMyLogs[0].date
			const expectedDate = new Date(2011, 11, 26)
			expect(logDate).toEqual(expectedDate)
		})
			
		test("should have log ID 1 with an updated .speed property of 15km/h", function() {
			const logSpeed = theCyclist.allMyLogs[0].speed
			expect(logSpeed).toEqual(15)
		})
		
		test("should produce .previousEdit property of the log before update", () => {
			expect(theCyclist.previousEdit).toEqual(oldLogOne)
		})
		
		describe("The .revertEdit() function", function() {
				
			beforeEach(() => {
				theCyclist.revertEdit()
			})
				
			test("should have the old log before the update again", () => {
				expect(theCyclist.allMyLogs).toEqual(expect.arrayContaining([oldLogOne]))
			})
			
			test("should not have the updated log", () => {
				expect(theCyclist.allMyLogs).toEqual(expect.not.arrayContaining([updatedLogOne]))
			})
			
			test("should produce .previousEdit property of null again", () => {
				expect(theCyclist.previousEdit).toBe(null)
			})
		})
	})
	
	describe("The .findLog fn", function() {
	
		beforeEach(() => {
				theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
				theCyclist.addLog(new Date(2012, 1, 5), 13, 30)
				theCyclist.addLog(new Date(2013, 0, 18), 10, 50)
				foundLog = theCyclist.findLog()
		})
		
		test("should find log with log ID 1 if no parameters are given", () => {
			expect(foundLog).toEqual(theCyclist.allMyLogs[0])
		})
	})

	describe("The .sortLogByDate, .sortLog, and .sortByPoints fns", function() {
	
		beforeEach(() => {
				theCyclist.addLog(new Date(2015, 11, 25), 25, 60)
				theCyclist.addLog(new Date(2012, 1, 5), 13, 30)
				theCyclist.addLog(new Date(2017, 0, 18), 10, 50)
				originalArrayOne = theCyclist.allMyLogs[0]
				originalArrayTwo = theCyclist.allMyLogs[1]
				originalArrayThree = theCyclist.allMyLogs[2]
				theCyclist.sortLogByDate()
				dateArrayOne = theCyclist.allMyLogs[0]
				dateArrayTwo = theCyclist.allMyLogs[1]
				dateArrayThree = theCyclist.allMyLogs[2]
				theCyclist.sortLog()
				idArrayOne = theCyclist.allMyLogs[0]
				idArrayTwo = theCyclist.allMyLogs[1]
				idArrayThree = theCyclist.allMyLogs[2]
				theCyclist.sortLogByPoints()
				pointsArrayOne = theCyclist.allMyLogs[0]
				pointsArrayTwo = theCyclist.allMyLogs[1]
				pointsArrayThree = theCyclist.allMyLogs[2]
				
				
		})
		
		test("after sorting by date, should have new order 1 correct", () => {
			expect(dateArrayOne).toEqual(originalArrayTwo)
		})
		
		test("after sorting by date, should have new order 2 correct", () => {
			expect(dateArrayTwo).toEqual(originalArrayOne)
		})
		
		test("after sorting by date, should have new order 3 correct", () => {
			expect(dateArrayThree).toEqual(originalArrayThree)
		})
		
		test("after sorting by id, should have new order 1 correct", () => {
			expect(idArrayOne).toEqual(originalArrayOne)
		})
		
		test("after sorting by id, should have new order 2 correct", () => {
			expect(idArrayTwo).toEqual(originalArrayTwo)
		})
		
		test("after sorting by id, should have new order 3 correct", () => {
			expect(idArrayThree).toEqual(originalArrayThree)
		})
		
		test("after sorting by points, should have new order 1 correct", () => {
			expect(pointsArrayThree).toEqual(originalArrayOne)
		})
		
		test("after sorting by points, should have new order 2 correct", () => {
			expect(pointsArrayTwo).toEqual(originalArrayTwo)
		})
		
		test("after sorting by points, should have new order 3 correct", () => {
			expect(pointsArrayOne).toEqual(originalArrayThree)
		})
	})

	describe("The .isValidLogEntry fn", function() {
		
		beforeEach(() => {
				theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
		})
		
		test("should have added the log with valid date format, valid time and valid distance", () => {
			expect(theCyclist.allMyLogs.length).toBe(1)
		})
		
		test("should not have added the log with invalid date format", () => {
			theCyclist.addLog("apple", 25, 60)
			expect(theCyclist.allMyLogs.length).toBe(1)
		})
		
		test("should not have added the log with invalid time and distance format", () => {
			theCyclist.addLog(new Date(2011, 11, 25), "apple", "banana")
			expect(theCyclist.allMyLogs.length).toBe(1)
		})
		
		test("should not have added the log with invalid time and distance values", () => {
			theCyclist.addLog(new Date(2011, 11, 25), -20, -100)
			expect(theCyclist.allMyLogs.length).toBe(1)
		})
	})
		
	describe("The localStorage", function() {
	
		beforeEach(() => {
				theCyclist.addLog(new Date(2011, 11, 25), 25, 60)
				theCyclist.addLog(new Date(2012, 1, 5), 13, 30)
				global.localStorage = new LocalStorageMock;
				theCyclist.addAllLogsToLocalStorage()
				loadedItem = theCyclist.loadAllLogsFromLocalStorage()
		})
		
		// "cyclist" is the key in the key-value pair to access the localStorage for .allMyLogs
		test("should have stored  theCyclist in JSON format", () => {
			expect(localStorage.getItem("cyclist")).toEqual(JSON.stringify(theCyclist))
		})
		
		describe("The loaded log", function() {
            
			beforeAll(() => {
                expectedObj = theCyclist
				// Shows that JSON.parse is working
				loadedObj = loadedItem
            })
			
			// Testing .logId, .date and .speed properties are enough; if these properties are correct then other properties will be correct too
			test("should have expected log ID", () => {
				expect(loadedObj.allMyLogs[0].logId).toBe(expectedObj.allMyLogs[0].logId)
			})
			
			test("should have expected .date property", () => {
				expect(loadedObj.allMyLogs[0].stringDate).toEqual(`${expectedObj.allMyLogs[0].date}`)
			})
			
			test("should have expected .speed", () => {
				expect(loadedObj.allMyLogs[0].speed).toBe(expectedObj.allMyLogs[0].speed)
			})			
		})
	})	
})