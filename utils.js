import { writeFileSync, readFileSync } from 'fs';
import chalk from 'chalk';

export const sum = (a, b) => { return a + b; }

export const checkodd = (number) => { return number % 2 == 0; }

// Ajout d une note dans le fichier notes.json
export const addTextToFile = (title, body) => {
    let data;
    try {
        data = JSON.parse(readFileSync('./notes.json', 'utf-8'));
    } catch (error) {
        data = [];
    }
    // Verifie si le titre existe deja
    if (data.some((note) => note.title === title)) { // Si le titre existe deja
        console.log(chalk.red('Note already exists. Please use a different title.'));
        return;
    } else { // Si le titre n existe pas
        data.push({title, body});
        writeFileSync('./notes.json', JSON.stringify(data, null, 2));
        console.log(chalk.green('Note added successfully.'));
    }
}

// Modifier le titre d une note dans le fichier notes.json
export function modifyTitle(oldTitle, newTitle) {
    let data;
    try {
        data = JSON.parse(readFileSync('./notes.json', 'utf-8'));
    } catch (error) {
        console.log(chalk.red('Failed to read the file.'));
        return;
    }
    const note = data.find((note) => note.title === oldTitle);
    if (note) {
        note.title = newTitle;
        writeFileSync('./notes.json', JSON.stringify(data, null, 2));
        console.log(chalk.green('Title updated successfully.'));
    } else {
        console.log(chalk.red('Note not found.'));
    }
}

// Supprimer une note dans le fichier notes.json grace a son titre
export function removeNote(title) {
    let data;
    try {
        data = JSON.parse(readFileSync('./notes.json', 'utf-8'));
    } catch (error) {
        console.log(chalk.red('Failed to read the file.'));
        return;
    }
    const index = data.findIndex((note) => note.title === title);
    if (index !== -1) {
        data.splice(index, 1);
        writeFileSync('./notes.json', JSON.stringify(data, null, 2));
        console.log(chalk.green('Note removed successfully.'));
    } else {
        console.log(chalk.red('Note not found.'));
    }
}
// Afficher la liste des notes
export function listNotes() {
    let data;
    try {
        data = JSON.parse(readFileSync('./notes.json', 'utf-8'));
    } catch (error) {
        console.log(chalk.red('Failed to read the file.'));
        return;
    }
    console.log(chalk.green('Your notes:'));
    data.forEach((note) => console.log(chalk.green(note.title, note.body)));
}
