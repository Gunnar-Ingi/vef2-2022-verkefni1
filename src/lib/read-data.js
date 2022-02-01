// les skrá af disk og skilar sem string
const content = await readDataFile(file);

// les string og skilar fylki af tölum
const numbers = parse(content);

// les fylki af tölum og skilar tölfræði upplýsingum í object
const stats = calculate(numbers);

// tekur saman upplýsingar sem template þarf
const result = {
  numbers,
  stats,
  // hér vantar fleira, t.d. skáarnafn á html skrá
};

// tekur við upplýsingum og skilar html
const template = statsTemplate(title, result);

await writeHtmlFile(template);
