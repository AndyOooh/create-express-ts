#!/usr/bin/env node

import { execSync } from 'child_process';

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
const deleteUnusedCommand = `cd ${projectName} && rm -r bin .git`;

console.log(`Cloning the ${repoName} repository to folder: ${projectName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(1);
}

console.log('Installing dependencies...');
const installedDependencies = runCommand(installDepsCommand);
if (!installedDependencies) {
  process.exit(1);
}

console.log('Removing .git');
runCommand(deleteUnusedCommand);

console.log('Done!');
console.log(`cd into ${projectName} and run "yarn start" to start the server.`);
