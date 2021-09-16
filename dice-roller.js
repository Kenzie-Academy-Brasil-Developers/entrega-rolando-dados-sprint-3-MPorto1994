let divToAdd = document.createElement('div');
let where =  document.getElementById('colocarAqui');


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function rollDiceTwice (){
    let diceRolled1 = getRandomArbitrary(1,6)
    let diceRolled2 = getRandomArbitrary(1,6)  
    where.appendChild(divToAdd);
    let twoRolled = diceRolled1 + diceRolled2
    return twoRolled
}
let timesRolled = [0,0,0,0,0,0,0,0,0,0,0,0,0];

function rollOneThousand (){
    let i = 0;
    for (i = 0; i<=1000 ; i++){
        timesRolled[rollDiceTwice()]=timesRolled[rollDiceTwice()] + 1
        
    }
    timesRolled.splice(0,2)
    return timesRolled;
    
}

function addToDiv(){
    let allRolls = rollOneThousand()
    for (let sides in allRolls){
        let newDiv = document.createElement('div');
        newDiv.innerText = 'Número de vezes do valor '+(parseInt(sides)+2)+": "+ allRolls[sides]
        where.appendChild(newDiv)
        newDiv.style.width = `${allRolls[sides]*7}px`;
        let color = parseInt(sides)+2;
        console.log(color)
        newDiv.style.backgroundColor = `#150`;
    }
}

let button =  document.getElementById('roll');

// button.addEventListener("click",addToDiv())
addToDiv()