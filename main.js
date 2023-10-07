const fs = require('fs');

// Read the data from data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data.json:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    const formattedData = jsonData.map(item => `${item.StockCode}-${item.ValCode}-${item.Attraction}`);

    const outputText = formattedData.join('\n');

    // Write the formatted data to output.txt
    fs.writeFile('output.txt', outputText, (err) => {
      if (err) throw err;
      console.log('Output saved to output.txt');
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
