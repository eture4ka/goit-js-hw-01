function getElementWidth(content, padding, border) {
  // 1. Парсимо рядки у числа (це ви вже зробили добре)
  const contentNum = Number.parseFloat(content);
  const paddingNum = Number.parseFloat(padding);
  const borderNum = Number.parseFloat(border);

  // 2. Обчислюємо загальну ширину та повертаємо її
  // Формула: content + padding * 2 + border * 2
  return contentNum + paddingNum * 2 + borderNum * 2;
}

// 3. Перевірка (обов'язково залиште ці рядки)
console.log(getElementWidth("50px", "8px", "4px"));     // 74
console.log(getElementWidth("60px", "12px", "8.5px"));  // 101
console.log(getElementWidth("200px", "0px", "0px"));   // 200