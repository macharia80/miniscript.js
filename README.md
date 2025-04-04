MiniScript
MiniScript is a lightweight scripting interpreter written in JavaScript for Node.js. It allows you to define variables, perform basic arithmetic operations, create reusable mini-games, and execute commands interactively or via scripts.

Table of Contents
Features
Installation
Usage
Interactive Shell
File-Based Execution
Commands Reference
Examples
Error Handling
License
Features
Variable Management : Define and manipulate variables using commands like SET, ADD, and SUBTRACT.
Interactive Shell : Run commands in real-time through an interactive shell.
Mini-Games : Create reusable mini-games with helper variables and predefined steps.
File Loading : Load and execute commands from external files using the LOAD command.
Error Handling : Robust error handling ensures invalid commands or missing files are handled gracefully.
Installation
Prerequisites
Node.js : Ensure you have Node.js installed on your system. You can verify by running:
bash
Copy
1
node -v
Steps to Install
Save the script (miniscript.js) to your local machine.
Open a terminal and navigate to the directory where the script is saved.
Run the script:
bash
Copy
1
node miniscript.js
Usage
Interactive Shell
Start the interactive shell by running:

bash
Copy
1
node miniscript.js
You will see the prompt:

plaintext
Copy
1
MiniScript> 
Type commands directly into the shell. For example:

plaintext
Copy
1
2
3
4
5
6
MiniScript> SET x 10
MiniScript> ADD x 5
MiniScript> SHOW x
15
MiniScript> exit
Goodbye!
File-Based Execution
You can also run commands from a file. Create a file (e.g., commands.txt) with the following content:

plaintext
Copy
1
2
3
SET x 100
ADD x 50
SHOW x
Then load and execute it:

plaintext
Copy
1
LOAD commands.txt
Commands Reference
SET var val
Assigns a value (
val
) to a variable (
var
).
ADD var num
Adds a numeric value (
num
) to a variable (
var
).
SUBTRACT var num
Subtracts a numeric value (
num
) from a variable (
var
).
SHOW var
Displays the value of a variable (
var
).
GAME name helpers
Defines a mini-game with a name and helper variables.
PLAY name values
Executes a mini-game with provided values for helper variables.
LOAD file
Loads and executes commands from a file (
file
).

Examples
Basic Commands
plaintext
Copy
1
2
3
4
5
6
SET name "Alice"
SHOW name
ADD age 25
SHOW age
SUBTRACT age 5
SHOW age
Mini-Games
Define and play a simple greeting game:

plaintext
Copy
1
2
3
4
5
6
GAME greet name
SET greeting "Hello"
SHOW greeting
SHOW name
STOP
PLAY greet "Bob"
Loading Commands from a File
Create a file named commands.txt with the following content:

plaintext
Copy
1
2
3
SET x 50
ADD x 25
SHOW x
Load and execute it:

plaintext
Copy
1
LOAD commands.txt
Error Handling
The interpreter includes robust error handling to ensure invalid commands or missing files are handled gracefully. For example:

If a variable is not defined:
plaintext
Copy
1
2
SHOW y
Error: Variable 'y' is not defined.
If a file does not exist:
plaintext
Copy
1
2
LOAD non_existent_file.txt
Error processing command 'LOAD non_existent_file.txt': File 'non_existent_file.txt' does not exist.
License
This project is licensed under the MIT License . See the LICENSE file for details.

Notes for Maintainers
Replace your-username and your-email@example.com with your actual GitHub username and email address if you add a "Contact" section.
Add a LICENSE file to the repository if it doesn’t already exist. Use the MIT License template below:
MIT License Template
plaintext

MIT License

Copyright (c) [2025] [Sam kamau Macharia]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.






























































MIT License

Copyright (c) [2025] [Sam kamau Macharia]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
