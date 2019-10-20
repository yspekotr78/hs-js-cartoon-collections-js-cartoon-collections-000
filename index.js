
function dwarfRollCall(dwarves) {  
  var order = [];
  for (let x = 0; x < dwarves.length; x++) {
    order = order +`${[x+1]}. ${dwarves[x]} `;
  }
return order;
}

function summonCaptainPlanet(planeteerCalls){
  var calls = []
  for (let x = 0; x < planeteerCalls.length; x++) {
    calls.push(planeteerCalls[x].toUpperCase()+"!") 
  }
  return calls
}

function longPlaneteerCalls(words) {
  for (let x = 0; x < words.length; x++) {
     if(words[x].length >4){
       return true
     }
     else{
        return false
     }
  }
}

function findTheCheese (foods) {
   for (let x = 0; x < foods.length; x++) {
     if(foods[x]===`gouda`||foods[x]===`cheddar`||foods[x]===`camembert`){
       return foods[x]
     }
   }
  return `no cheese!`
}