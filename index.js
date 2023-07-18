import yargs from "yargs";

import { addTextToFile, modifyTitle } from "./utils.js";


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
    handler: (arg) => {
        const title = 'Title: ' + arg.title;
        const body = 'Body: ' + arg.body;
        const note = title + "\n" + body;
        addTextToFile(note);
    }
});

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
    handler: (arg) => {
        modifyTitle(arg.oldTitle, arg.newTitle);
    }
});


yargs.parse();