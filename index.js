const { getUserInput } = require('./lib/user-input');
const { createSVGFile } = require('./lib/svg-creator');

async function main() {
  const userInput = await getUserInput();
  createSVGFile(userInput);
}

main();