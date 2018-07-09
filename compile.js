const path = require('path');
const fs = require('fs');
const solc = require('solc');

const bolaoPath = path.resolve(__dirname, 'contracts', 'Bolao.sol');

const source = fs.readFileSync(bolaoPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Bolao'];