import yargs from "yargs";
import { addTextToFile, modifyTitle, removeNote, listNotes } from "./utils.js";

// Ajout d une note dans le fichier notes.json
// parametres: title, body (les deux sont obligatoires)
yargs.command({
    command: "add",
    describe: "Add a new note",
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
    handler(argv) {
        addTextToFile(argv.title, argv.body);
    }
});
// Modifier le titre d une note dans le fichier notes.json
// Parametres: oldTitle, newTitle (les deux sont obligatoires)
yargs.command({
    command: "modify",
    describe: "Modify an existing note's title",
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
    handler(argv) {
        modifyTitle(argv.oldTitle, argv.newTitle);
    }
});
// Supprimer une note dans le fichier notes.json grace a son titre
// Parametre: title (obligatoire)
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        removeNote(argv.title);
    }
});

yargs.command({
    command: "list",
    describe: "List all notes",
    handler() {
        listNotes();
    }
});


yargs.parse();
