//Need to get this in order and working. 


function pairOfDice() {
    
    for(let i = 0; i <= 999; i++) {
    /* for each die */
    /* two dice to roll get a number between 1-6 on each */
    let dice1 = Math.floor( Math.random() * 6 ) +1;
    let dice2 = Math.floor( Math.random() * 6 ) +1;
    /* add dice together */
    let rollOfDice = dice1 + dice2;

    //simulate 1000 rolls of a pair of dice 
    
    
        count[rollOfDice] = count[rollOfDice] + 1;
        //For each possible roll (2 through 12), count its frequency. 
        //You should use an array to keep track of these counts. 
        let count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
        }
    }

    
    pairOfDice() 