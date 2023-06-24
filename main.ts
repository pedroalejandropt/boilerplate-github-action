import * as core from '@actions/core';

function run() {
  try {
    const name = core.getInput('name');
    const greeting = `Hello, ${name}!`;
    core.setOutput('greeting', greeting);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
