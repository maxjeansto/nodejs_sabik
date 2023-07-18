import { writeFileSync, readFileSync } from 'fs';
import chalk from 'chalk';


export const sum = (a, b) => { return a + b; }

export const checkodd = (number) => { return a % 2 == 0; }

// Function to add a note to the file
//  It takes the text as a parameter
//  It writes the text to the file
//  It also logs a success message to the console
export const addTextToFile = (text) => {
    writeFileSync('./file.txt', text);
    console.log(chalk.green('Note added successfully.'));}


// Function to modify the title of the note
// It takes the old title and the new title as parameters
// It reads the content of the file, replaces the old title with the new title and writes the new content to the file
// It also logs a success message to the console
// It uses the chalk library to color the message
export function modifyTitle(oldTitle, newTitle) {
    let fileContent = readFileSync('file.txt', 'utf-8');
    let newContent = fileContent.replace(`Title: ${oldTitle}`, `Title: ${newTitle}`);
    writeFileSync('file.txt', newContent);
    console.log(chalk.green('Title updated successfully.'));
}