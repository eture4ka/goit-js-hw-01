    function getElementWidth(content, padding, border) {
// ... Перетворюємо рядки "Npx" на числа
const contentNum = Number.parseFloat(content);
  const paddingNum = Number.parseFloat(padding);
  const borderNum = Number.parseFloat(border);
    }

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
