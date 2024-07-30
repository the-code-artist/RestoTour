const csv = require('csvtojson');
const fs = require('fs');

const inputFile = '../dataset/zomato.csv'; 
const outputFile = '../dataset/zomatoData.json'; 

csv()
  .fromFile(inputFile)
  .then((jsonObj) => {
    fs.writeFileSync(outputFile, JSON.stringify(jsonObj, null, 2), 'utf8');
    console.log('Conversion completed!');
  })
  .catch((error) => {
    console.error('Error during conversion:', error);
  });
