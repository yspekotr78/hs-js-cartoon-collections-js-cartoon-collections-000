
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

//if( (A && !B) || (B && !A) ) { ... }

function findTheCheese (foods) {
   console.log(foods)
   for (let x = 0; x < foods.length; x++) {
     if(foods[x]===`gouda`||foods[x]===`cheddar`||foods[x]===`camembert`){
       console.log(foods[x])
       return foods[x]
     }
  //   if(foods[x]===`cheddar`){
 //    console.log(foods[x])
 //    return foods[x]
//     }
 //    if(foods[x]===`camembert`){
 //    console.log(foods[x])
//     return foods[x]
 //    } 
  }
  return `no cheese!`
}
findTheCheese()