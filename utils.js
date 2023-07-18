import { writeFileSync, readFileSync } from 'fs';
import chalk from 'chalk';


export const sum = (a, b) => { return a + b; }

export const checkodd = (number) => { return a % 2 == 0; }

export const addTextToFile = (text) => {
    writeFileSync('./file.txt', text);
    console.log(chalk.green('Note added successfully.'));}

export function modifyTitle(oldTitle, newTitle) {
    let fileContent = readFileSync('file.txt', 'utf-8');
    let newContent = fileContent.replace(`Title: ${oldTitle}`, `Title: ${newTitle}`);
    writeFileSync('file.txt', newContent);
    console.log(chalk.green('Title updated successfully.'));
}