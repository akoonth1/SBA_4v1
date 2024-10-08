// Key (Dictionary):

// 5ac41910-d737-4752-8320-8011c50e13cf

// Key (Thesaurus):

// 6435e2bb-8606-4de8-b6cf-f6bb87102952



//https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key





import fs from 'fs';
import csv from 'csv-parser';

const word_list = [];

fs.createReadStream('path/to/your/wordlist.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Assuming the CSV has a column named 'word'
    word_list.push(row.word);
  })
  .on('end', () => {
    console.log(word_list);
    // You can now work with the word list array
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error);
  });

