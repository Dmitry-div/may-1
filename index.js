const path = require(`path`);

const message = require(`./message`);


const name = `Dmitriy`;
console.log(path.parse(__dirname));
console.log(`${message}, ${name}`);