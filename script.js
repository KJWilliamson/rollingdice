function pairOfDice() {
    //produces two random numbers and then adds them together
    //needed two dice so posted it twice and assigned dice1 and dice2
    //added both together
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
      
      //also would like to get the code working for the graph example
      //from mini lesson provided
      function createBarGraph(graph) {
        
          const barGraph = document.createElement("div");
            for (let key in graph) {
            const bar = document.createElement("div");
            bar.innerText = key;
            bar.style.color = "white";
            bar.style.backgroundColor = "orange";
            bar.style.width = graph[key] + "px";
            bar.style.marginTop = "10px";
            bar.style.marginBottom = "10px";
            barGraph.appendChild(bar);
    
           
        }
         
          return barGraph;
      }
    
            pairOfDice()
            document.write(count);
            document.body.appendChild(createBarGraph(count));