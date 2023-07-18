import yargs from "yargs";

import { addTextToFile, modifyTitle } from "./utils.js";

// Add a command to yargs to add a note to the file
yargs.command({
    command: "addTextToFile",
    describe: "Add title and body to your note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    // It takes the text as a parameter
    handler: (arg) => {
        const title = 'Title: ' + arg.title;
        const body = 'Body: ' + arg.body;
        const note = title + "\n" + body;
        addTextToFile(note);
    }
});
// Add a command to yargs to modify the title of the note in the file 
yargs.command({
    command: "modifyTitle",
    describe: "Modify the title of your note",
    builder: {
        oldTitle: {
            describe: "Old note title",
            demandOption: true,
            type: "string"
        },
        newTitle: {
            describe: "New note title",
            demandOption: true,
            type: "string"
        }
    },
    //  It takes the old title and the new title as parameters
    handler: (arg) => {
        modifyTitle(arg.oldTitle, arg.newTitle);
    }
});


yargs.parse();