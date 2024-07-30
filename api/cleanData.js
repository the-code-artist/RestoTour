const fs = require('fs');
const inputFile = '../dataset/zomatoData.json'; 
const outputFile = '../dataset/zomatoSampleData.json';

const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

const cleanedData = data.map(item => {
  for (const key in item) {
    if (typeof item[key] === 'string') {
      item[key] = item[key].replace(/�/g, '');
    }
  }
  return item;
});

fs.writeFileSync(outputFile, JSON.stringify(cleanedData, null, 2), 'utf8');
console.log('Data cleaned!');
