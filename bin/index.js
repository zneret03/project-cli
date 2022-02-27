#! /usr/bin/env node

import inquirer from "inquirer";
import shell from "shelljs";
import chalk from "chalk";

const path = process.cwd();

import {
  questions,
  questionsTs,
  inputProjectName,
} from "./utils/questions.js";
import links from "./utils/links.js";

inquirer.prompt(questions).then((answers) => {
    inquirer.prompt(inputProjectName).then((project) => {
      if (answers.framework === "React") {
        inquirer.prompt(questionsTs).then((answersTs) => {
          if (answersTs.typescript === "Yes") {
            shell.exec(`mkdir ${project.name}`);
            console.log(chalk.green("📁 Created a folder for the project"));
            shell.exec(`git clone ${links.get("React-TS")} ${project.name}`);
            console.log(
              chalk.green(
                `🖨️  Cloned started files into ${project.name}`
              )
            );
            shell.cd(`${path}/${project.name}`);
            shell.exec(`npm i`);
            console.log(
              chalk.green(
                "👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀"
              )
            );
          } else {
            shell.exec(`mkdir ${project.name}`);
            console.log(chalk.green("📁 Created a folder for the project"));
            shell.exec(
              `git clone ${links.get("React")} ${project.name}`
            );
            console.log(
              chalk.green(
                `🖨️  Cloned started files into ${project.name}`
              )
            );
            shell.cd(`${path}/${project.name}`);
            shell.exec(`npm i`);
            console.log(
              chalk.green(
                "👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀"
              )
            );
          }
        });
      } else if (answers.framework === "NextJS") {
        inquirer.prompt(questionsTs).then((answersTs) => {
          if (answersTs.typescript === "Yes") {
            shell.exec(`mkdir ${project.name}`);
            console.log(chalk.green("📁 Created a folder for the project"));
            shell.exec(
              `git clone ${links.get("NextJS-TS")} ${project.name}`
            );
            console.log(
              chalk.green(
                `🖨️  Cloned started files into ${project.name}`
              )
            );
            shell.cd(`${path}/${project.name}`); 
            shell.exec(`npm i`);
            console.log(
              chalk.green(
                "👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀"
              )
            );
          } else {
            shell.exec(`mkdir ${project.name}`);
            console.log(chalk.green("📁 Created a folder for the project"));
            shell.exec(
              `git clone ${links.get("NextJS")} ${project.name}`
            );
            console.log(
              chalk.green(
                `🖨️  Cloned started files into ${project.name}`
              )
            );
            shell.cd(`${path}/${project.name}`);
            shell.exec(`npm i`);
            console.log(
              chalk.green(
                "👨‍💻  Successfully installed all the required dependencies\nHappy hacking 🚀"
              )
            );
          }
        });
      }
    });
});
