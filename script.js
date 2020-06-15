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
      
      function createBarGraph(graph) {
        
          const barGraph = document.createElement("div");
            for (let key in graph) {
            const bar = document.createElement("div");
            bar.innerText = key;
            bar.style.color = "white";
            bar.style.backgroundColor = "grey";
            bar.style.width = graph[key] + "px";
            bar.style.marginTop = "10px";
            bar.style.marginBottom = "10px";
            barGraph.appendChild(bar);
    
           
        }
         
          return barGraph;
         
      };
           
            pairOfDice()
            document.write(count);
            
            document.body.appendChild(createBarGraph(count));

            
          //figure out how to use code from mini lesson to also get graph to work!!
          
        /* 
      for(i=1; i<=3; i++) {
        // Create a div, with class "bar", and set the width to 100px.
        var newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = i*100 + "px";

        // Place a text label inside the new div.
        var newText = document.createTextNode("#: #" + i);
        newElement.appendChild(newText);

        // Put the new div on the page inside the existing element "d1".
        var destination = document.getElementById("d1");
        destination.appendChild(newElement);
      }
      */
           

      
      

      