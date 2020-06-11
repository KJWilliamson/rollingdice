//Need to get this in order and working. 


function pairOfDice() {
    //not sure this is even needed. don't need them separate. I need them together and totaled.
    //can I do let bothDice = document.getElementById("bothDice")
    //let dice1 = document.getElementById("dice1");
    //let dice2 = document.getElementById("dice2");
    
    
    /* for each die */
    /* two dice to roll get a number between 1-6 on each */
    let dice1 = Math.floor( Math.random() * 6 ) +1;
    let dice2 = Math.floor( Math.random() * 6 ) +1;
    /* add dice together */
    let sum = dice1 + dice2;
    
    let bothDice = document.getElementById("bothDice");

    //where do these need to be placed. Trace code!!
    /* simulate 1000 rolls of a pair of dice */
    for(let i = 0; i <= 999; i++) {

        
    //the array that holds the numbers. how to get them in the array and in the right spot
    let totalRolls = ["1: ", "2: ", "3: ", "4: ", "5: ", "6: "];


    
    /* For each possible roll (2 through 12), count its frequency. You should use an array to keep track of these counts. */
     let count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
     count[rollOfDice] = count[rollOfDice] + 1;

     //I need to take a break and then play with this. I'm confusing myself.
    
    }
    }
    
    pairOfDice() 