
function dwarfRollCall(dwarves) {  
  var order = [];
  for (let x = 0; x < dwarves.length; x++) {
    order = order +`${[x+1]}. ${dwarves[x]} `;
  }
console.log(order)
return order;
}
dwarfRollCall()


function summonCaptainPlanet(planeteerCalls){
  var calls = []
  for (let x = 0; x < planeteerCalls.length; x++) {
//   calls = calls +`${planeteerCalls[x].toUpperCase()}! ` ;
    calls.push(planeteerCalls[x].toUpperCase()+"!") 
 
    
  }
  console.log(planeteerCalls)
  console.log(calls)
  return calls
}
summonCaptainPlanet()



function longPlaneteerCalls(words) {
  for (let x = 0; x < words.length; x++) {
     if(words[x].length >4){
       console.log(words)
       console.log("true")
       return true
     }
     else{
             console.log("false")
             return false
     }
  }
}
longPlaneteerCalls()


function findTheCheese (foods) {
}
