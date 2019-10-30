
function dwarfRollCall(dwarves) {  
  var order = [];
  for (let x = dwarves.length/2; x < dwarves.length; x++) {
      order += `${[x+1]}. ${dwarves[x]} `;
  }
return order
}



function summonCaptainPlanet(planeteerCalls){
  console.log(planeteerCalls)
  var calls = []
  for (let x = 0; x < planeteerCalls.length; x++) {
     calls.push(planeteerCalls[x].toUpperCase()+"!");
  }
  console.log(calls)
  return calls
}
summonCaptainPlanet()

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
     if(foods[x]==='swiss cheese'||foods[x]===`gouda`||foods[x]===`cheddar`||foods[x]===`camembert`){
       return foods[x]
     }
   }
  return `no cheese!`
}
//var res = str.charAt(0);

function wordsWithB(array){
 var empty=[]
  for (let x = 0; x < array.length; x++) {
     if(array[x].charAt(0)==='B'){
       empty.push(array[x])
      }
   }
   return empty
}