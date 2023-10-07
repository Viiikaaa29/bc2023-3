const fs = require('fs');

// Зчитати дані з data.json
fs.readFile('data.json', 'utf8', (помилка, дані) => {
  if (помилка) {
    console.error('Помилка при зчитуванні data.json:', помилка);
    return;
  }

  try {
    const даніJson = JSON.parse(дані);

    const форматованіДані = даніJson.map(елемент => `${елемент.StockCode}-${елемент.ValCode}-${елемент.Attraction}`);

    const текстВиводу = форматованіДані.join('\n');

    // Зберегти форматовані дані у output.txt
    fs.writeFile('output.txt', текстВиводу, (помилка) => {
      if (помилка) throw помилка;
      console.log('Вивід збережено у файлі output.txt');
    });
  } catch (помилка) {
    console.error('Помилка під час розбору JSON:', помилка);
  }
});
