import readline from "readline";
import fs from "node:fs/promises";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filename = 'todolist.json';

// --- Functions to handle file I/O ---
const loadTodoList = () => {
  try {
    if (fs.existsSync(filename)) {
      const data = fs.readFileSync(filename, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading the to-do list file:', err);
  }
  return [];
};

const saveTodoList = (todolist) => {
  try {
    fs.writeFileSync(filename, JSON.stringify(todolist, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving the to-do list file:', err);
  }
};

// --- Core application logic ---
const displayList = (todolist) => {
  console.log('\n--- Your To-Do List ---');
  if (todolist.length === 0) {
    console.log('There are no items on the list yet.');
  } else {
    todolist.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
  console.log('----------------------\n');
};

const main = () => {
  let todolist = loadTodoList();
  console.log('Welcome to your To-Do List! Type "exit" to quit.');

  const askQuestion = () => {
    displayList(todolist);
    rl.question("What do we need to buy? (Type 'exit' to quit) ", (answer) => {
      const trimmedAnswer = answer.trim();

      if (trimmedAnswer.toLowerCase() === 'exit') {
        saveTodoList(todolist);
        console.log('Exiting the application. Your list has been saved.');
        rl.close();
        return;
      }

      if (trimmedAnswer) {
        todolist.push(trimmedAnswer);
        saveTodoList(todolist);
        console.log(`'${trimmedAnswer}' has been added to the list.`);
      }

      askQuestion(); // Continuously ask for input
    });
  };

  askQuestion();
};

main();