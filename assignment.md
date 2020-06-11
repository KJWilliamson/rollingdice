Assessment: Rolling Dice
When rolling two six-sided dice, each die will show a number between 1 and 6. When the numbers on the two dice are added together, they will sum to a number between 2 and 12.

Use JavaScript to simulate 1000 rolls of a pair of dice. You will need to figure out how to generate random numbers in JavaScript, use your Google-Fu!

For each possible roll (2 through 12), count its frequency. You should use an array to keep track of these counts.

Initialize an array named count by filling it with zeros. Then, whenever the roll of the two dice adds up to, say, a seven, add one to the value in the 7th element of the counts array.

For example if the variable rollOfDice holds the current roll, you could increment the count with code like:

count[rollOfDice] = count[rollOfDice] + 1;
After the 1000 rolls are finished, show the final counts in an HTML page.

Here's an example of the kind of output your program might produce:

2: 32  
3: 50  
4: 76  
5: 120  
6: 151  
7: 161  
8: 125  
9: 121  
10: 89  
11: 52  
12: 23
Output formatting
In addition to the numeric output described above, display the final counts as a bar graph (using a DIV for each bar, and varying the dimensions in proportion with the counts).

Submission
Push your code into your GitLab repository and deploy it via GitLab pages.
Once you have the GitLab Pages url (ex: https://username.gitlab.io/dice/), go back to your code to create a README.md file, and put the GitLab Pages url as the contents.
Push your code to your GitLab repo once more.
In Canvas, please submit your Gitlab Repo url.
In GitLab, add KA_Grading as a member on your project with "Reporter" permission.



*************************
BREAKDOWN OF ASSIGNMENT


** Rolling Dice **
two problems to solve
how would i accomplish this task
what steps to take
read the rubric do what it asks
look for hints on how to do steps

1. logical
2. figure it out and convert to code
3. what's the syntax 

algorith is a set of steps to fix a problem. 

** how to break down a project **

1. Read the requirements document in detail
  * take notes of important points
  * write down questions

2. Answer your questions. Use google first
  and ask the specific questions you need

** Questions **
1. How do I generate a random number in JS
2. "count its frequency"
3. how do i display a bar graph?

Now make a development plan
  * describe the entire behavior of the program in 3 or 4 steps. Describe it in english not JS
  

** Rolling Dice **
1. Find the sum of rolling two dice
  a. generate two random numbers from 1-6
    describe how here
  b. Add them together
    use + operator

2. repeat 1000 times keeping track of each result
  a. loop 1000 times, rolling dice each time
    for loop from 0 to 999 or 1 to 1000
    call function from step 1 to get the sum 
  b. store the counts of each possible result in array
    at the start of the program , initialize count array with zeros(13 zeros) [0,0,0,0,0,0,0,0,0,0,0,0,0]
    For each roll increment the appropriate index in the array
    count[rollOfDice] = count[rollOfDice] + 1

3. display the counts as a bar graph
  a. one div on the page for each possible result
    * 2-12 
      use 11 divs, with ids "roll12", "roll13", "roll14"
  b. width of each div should be the count of the result
    loop through each div
    how to set width of div
    where to find the value to set as width
  c. also display the actual number for each result 


** Break down each item into 3 or 4 smaller steps **
1. ASK HOW?

** Repeat until it's obvious how to turn the step into JS code **

** Write the code **

