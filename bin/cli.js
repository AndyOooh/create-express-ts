#!/usr/bin/env node

import { execSync } from 'child_process';
import chalk from 'chalk';

const { log } = console;

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.log(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const projectName = process.argv[2];
const repoName = 'create-express-ts';

const gitCheckoutCommand = `git clone --depth 1 https://github.com/AndyOooh/${repoName} ${projectName}`;
const installDepsCommand = `cd ${projectName} && yarn install`;
const deleteUnusedCommand = `cd ${projectName} && rm -rf bin .git notes.md`;
const updatePackageJsonCommand = `cd ${projectName} && npm pkg set name=${projectName} version=1.0.0 && npm pkg delete private bin files`;
// const deleteUnusedDeps = `cd ${projectName} && pwd && yarn remove chalk`; //  it seems chalk is auto-removed

log(chalk.cyanBright(`Cloning ${repoName} repository to folder: ${projectName}...`));
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(1);
}

log(chalk.cyanBright('Installing dependencies...'));
const installedDependencies = runCommand(installDepsCommand);
if (!installedDependencies) {
  process.exit(1);
}

log(chalk.cyanBright('Removing bin, .git and notes.md...'));
runCommand(deleteUnusedCommand);
if (!deleteUnusedCommand) {
  process.exit(1);
}

log(chalk.cyanBright('Resetting package.json...'));
runCommand(updatePackageJsonCommand);
if (!updatePackageJsonCommand) {
  process.exit(1);
}

log(chalk.hex('#DEADED').bold('Done!'));

log(
  chalk.cyanBright(`cd into /${projectName} and run "yarn start" to start the server.`)
);
