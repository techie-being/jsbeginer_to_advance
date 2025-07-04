const { useContext } = require("react")

/*************** call stack */
console.log("jai shree jagananath")

// in javascript every code has a global execution context refer to this
// in browser it refers to window Object

// execution context types


// 1. Global execution context  
// 2. Function execution context
// 3. Eval execution context

/*
🔹 1. Script Starts (Power On)
JavaScript engine begins executing your code.

🔹 2. Global Execution Context (GEC) is Created
This is the default environment.

this refers to the global object (window in browsers).

GEC goes through two phases:

🔹 3. Memory Creation Phase (MCP)
All variables declared with var → undefined

Functions → Full function definition stored

this → set to global object

🔹 4. Execution Phase (EP)
Code runs line-by-line

Values are assigned to variables

Functions may be called

🔹 5. When a Function is Called
A new Function Execution Context (FEC) is created

It goes through its own:

Memory Creation Phase

Execution Phase

🔹 6. After Function Executes
Result is returned to where it was called (usually GEC)

Function Execution Context is removed (popped from call stack)
           or wencan 
🔁 Once function finishes:
It returns a value (if any)

That value is sent back to where it was called from (typically the GEC)

The function's execution context is destroyed (popped off the call stack)



*/

// diagram 

/*
     [Power On - Script Starts]
                  |
                  v
       +---------------------+
       | Global Execution    |  ← GEC
       | Context (GEC)       |
       +---------------------+
               |
     +----------------------+
     | Memory Creation Phase|  ← var = undefined, functions stored
     +----------------------+
               |
     +----------------------+
     |  Execution Phase     |  ← code runs, function call may happen
     +----------------------+
               |
         function call
               |
     +--------------------------+
     | Function Execution       |  ← new FEC created
     | Context (FEC)           |
     +--------------------------+
         |           |
   Memory Phase   Execution Phase
         |           |
     return value <---
         |
     +---------------------+
     | Back to GEC         |
     +---------------------+
*/

// call stack is a data structure that keeps track of function calls
// it is a stack data structure (LIFO - Last In First Out)
