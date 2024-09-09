const fs = require('fs'); // pull in the file system module

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// spongegar
const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports.getMeme = getMeme;
