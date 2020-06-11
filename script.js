function pairOfDice() {
    //produces two random numbers and then adds them together
    let dice1 = Math.floor( Math.random() * 6 ) +1;
    let dice2 = Math.floor( Math.random() * 6 ) +1;
    let bothDice = dice1 + dice2;
    return bothDice;
  }
    //array to store times each number is rolled 
    let count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  
  
    let outcome = [];
  
      //simulate 1000 rolls of a pair of dice 
      for(let i = 0; i <= 999; i++) {
        let rollOfDice = pairOfDice();
          count[rollOfDice] = count[rollOfDice] + 1;
          outcome.push(rollOfDice);

      }
      
        pairOfDice()
        document.write(count);