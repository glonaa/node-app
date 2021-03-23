const yargs = require("yargs");

const { addNotes } = require("../utils/notes")

console.log(process.argv);
console.log(yargs.argv);


const command = process.argv[2];

if (command == "add") {
    console.log("adding a Note....");
   addNotes(yargs.argv.note);
} else if(command == "remove") {
    console.log("note has been deleted");
} else if (command == "list") {
    console.log("listing all notes");
} else {
    console.log("Command not recognised");
}