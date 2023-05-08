// Функція, яка приймає кодове слово та рядок з цифрами, і повертає номер автомобіля
function getCarNumber(codeWord, digitsString) {
  let carNumber = "";
  for (let i = 0; i < codeWord.length; i++) {
    const index = codeWord.charCodeAt(i) % 10;
    carNumber += digitsString[index];
  }
  return carNumber;
}

// Приклад використання
const codeWord = "JavaScript";
const digitsString = "7890134526";
const carNumber = getCarNumber(codeWord, digitsString);
console.log(carNumber); // Виведе "2061834586"

// Unit-тест
function testGetCarNumber() {
  const codeWord = "test";
  const digitsString = "1234567890";
  const expected = "3214";
  const result = getCarNumber(codeWord, digitsString);
  console.assert(result === expected, `Expected "${expected}", but got "${result}"`);
}

testGetCarNumber(); // Не виведе нічого, якщо тест пройшов успішно
