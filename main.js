 let raceNumber = Math.floor(Math.random() * 1000);
  console.log(raceNumber)
  let earlyRunner = true
  let ageRunner = 18

  if (earlyRunner === true && ageRunner > 18) { // >= 18
    console.log( raceNumber + 1000)
   } 

  if (earlyRunner === true && ageRunner > 18) {
    console.log(`Your race will begin at 9:30am, ${raceNumber}.`)
  } else if (earlyRunner === false && ageRunner > 18) {
    console.log(`Your race will begin at 11:00am, ${raceNumber}.`)
  } else if (ageRunner < 18) {
    console.log (`Your race will begin at 12:30pm ${raceNumber}.`)
  } else {
    console.log ('Seek Registration desk.')
  }
