// Daniel Konjaski - 101436648
// COMP3123 - Labtest 1

const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

const removeLogs = () => {
  if (fs.existsSync(logDir)) {
    fs.readdirSync(logDir).forEach(file => {
      console.log(`delete files...${file}`);
      fs.unlinkSync(path.join(logDir, file));
    });
    fs.rmdirSync(logDir);
    console.log('Logs directory deleted');
  } else {
    console.log('No Logs directory found');
  }
};

removeLogs();