const fs = require("fs");
const readline = require("readline");

/**
 * Core function to process commands.
 * @param {string} commands - The commands to execute.
 * @param {Object} [stuff={}] - The current state of variables.
 * @param {Object} [miniGames={}] - The collection of mini-games.
 */
function play(commands, stuff = {}, miniGames = {}) {
  // Split commands into lines, ignoring empty lines and comments
  commands = commands.split("\n").filter(line => line.trim() && !line.trim().startsWith("#"));

  for (let i = 0; i < commands.length; i++) {
    let words = commands[i].trim().split(" ").filter(w => w);
    let action = words[0];

    try {
      switch (action) {
        case "SET":
          validateCommand(words, 3, "SET requires a variable name and a value.");
          stuff[words[1]] = parseValue(words[2]);
          break;

        case "ADD":
          validateCommand(words, 3, "ADD requires a variable name and a numeric value.");
          stuff[words[1]] = (stuff[words[1]] || 0) + Number(words[2]);
          break;

        case "SUBTRACT":
          validateCommand(words, 3, "SUBTRACT requires a variable name and a numeric value.");
          stuff[words[1]] = (stuff[words[1]] || 0) - Number(words[2]);
          break;

        case "SHOW":
          validateCommand(words, 2, "SHOW requires a variable name.");
          if (words[1] in stuff) {
            console.log(stuff[words[1]]);
          } else {
            console.error(`Error: Variable '${words[1]}' is not defined.`);
          }
          break;

        case "GAME":
          validateCommand(words, 3, "GAME requires a name and at least one helper variable.");
          let name = words[1];
          let helpers = words.slice(2);
          let gameSteps = [];
          while (commands[++i] && commands[i].trim() !== "STOP") {
            gameSteps.push(commands[i].trim());
          }
          miniGames[name] = { helpers, steps: gameSteps };
          break;

        case "PLAY":
          validateCommand(words, 3, "PLAY requires a game name and values for helper variables.");
          let gameName = words[1];
          if (!miniGames[gameName]) {
            throw new Error(`Game '${gameName}' is not defined.`);
          }
          let values = words.slice(2).map(v => parseValue(v));
          let game = miniGames[gameName];
          let tempStuff = { ...stuff };
          for (let j = 0; j < game.helpers.length; j++) {
            tempStuff[game.helpers[j]] = values[j];
          }
          play(game.steps.join("\n"), tempStuff, miniGames);
          stuff = { ...tempStuff };
          break;

        case "LOAD":
          validateCommand(words, 2, "LOAD requires a file path.");
          let filePath = words[1];
          if (!fs.existsSync(filePath)) {
            throw new Error(`File '${filePath}' does not exist.`);
          }
          let fileContent = fs.readFileSync(filePath, "utf8");
          play(fileContent, stuff, miniGames);
          break;

        default:
          console.error(`Error: Unknown command '${action}'.`);
      }
    } catch (error) {
      console.error(`Error processing command '${commands[i]}': ${error.message}`);
    }
  }
}

/**
 * Validates the number of arguments in a command.
 * @param {Array} words - The split command words.
 * @param {number} expectedLength - The expected number of arguments.
 * @param {string} errorMessage - The error message to display if validation fails.
 */
function validateCommand(words, expectedLength, errorMessage) {
  if (words.length < expectedLength) {
    throw new Error(errorMessage);
  }
}

/**
 * Parses a value as either a string or a number.
 * @param {string} value - The value to parse.
 * @returns {string|number} - The parsed value.
 */
function parseValue(value) {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1); // Return as string
  }
  const num = Number(value);
  if (!isNaN(num)) {
    return num; // Return as number
  }
  throw new Error(`Invalid value '${value}'. Must be a number or a quoted string.`);
}

/**
 * Interactive shell for MiniScript.
 */
function startTalking() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "MiniScript> ",
  });

  let stuff = {};
  let miniGames = {};

  console.log("Welcome to MiniScript! Type 'exit' to quit.");
  rl.prompt();

  rl.on("line", (input) => {
    const trimmedInput = input.trim();
    if (trimmedInput.toLowerCase() === "exit") {
      rl.close();
      return;
    }
    play(trimmedInput, stuff, miniGames);
    rl.prompt();
  }).on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
}

// Example usage: Run a predefined game script
const game = `
  SET x 5
  ADD x 3
  SHOW x
`;
play(game);

// Start the interactive shell
startTalking();