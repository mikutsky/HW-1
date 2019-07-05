//ЗАДАНИЕ №1
//Создать функцию multiply, которая будет принимать любое количество чисел и
//возвращать их произведение. Если нет ни одного аргумента, вернуть ноль.
function multiply() {
  if (!arguments.length) return 0;

  let result = 1;
  for (const value of arguments) {
    if (isNaN(value) || typeof value !== "number")
      return console.error(
        `multiply() ERROR. 
        ${Array.isArray(value) ? "array" : typeof value}: "${value}", 
        is incorrect value. Please check your arguments.`
      );

    result *= value;
  }

  if (result % 1 !== 0) return Number(result.toFixed(8));
  return result;
}

//ЗАДАНИЕ №2
//Создать функцию, которая принимает строку и возвращает строку-перевертыш:
function reverseString(str) {
  if (!str || typeof str !== "string")
    return console.error(
      `reverseString() ERROR. 
      ${Array.isArray(str) ? "array" : typeof str}: "${str}", 
      is incorrect value. Please check your arguments.`
    );

  let result = "";
  for (const char of str) result = char + result;

  return result;
}

//ЗАДАНИЕ №3
//Создать функцию, которая в качестве аргумента принимает строку из букв и
//возвращает строку, где каждый символ разделен пробелом и заменен на
//юникод-значение символа.
function getCodeStringFromText(str) {
  if (!str || typeof str !== "string")
    return console.error(
      `getCodeStringFromText() ERROR. 
      ${Array.isArray(str) ? "array" : typeof str}: "${str}", 
        is incorrect value. Please check your arguments.`
    );

  let result = "";
  for (const char of str) {
    if (result.length > 0) result += " ";
    result = result.concat(char.charCodeAt(0));
  }

  return result;
}

//ЗАДАНИЕ №4
//Создать функцию угадай число. Она принимает число от 1-10 (обязательно
//проверить что число не больше 10 и не меньше 0). Генерирует рандомное число
//от 1-10 и сравнивает с переданным числом если они совпали то возвращает
//“Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.
//Числа в строке указаны как пример вы подставляете реальные числа.
function secretNumber(yourNumber) {
  if (typeof yourNumber !== "number" || yourNumber % 1 !== 0)
    return console.error(
      `secretNumber() ERROR. 
      ${Array.isArray(yourNumber) ? "array" : typeof yourNumber}
      : "${yourNumber}", is incorrect value. Please check your arguments.`
    );

  if (yourNumber < 1 || yourNumber > 10)
    return console.error(
      `secretNumber() ERROR. Number: ${yourNumber}, does't belong to the range 
      [1..10]. Please check your arguments.`
    );

  let randomNumber = Math.ceil(Math.random() * 10);
  if (yourNumber === randomNumber)
    return `Вы выиграли!!! Совпало число: ${yourNumber}`;

  return `Вы не угадали, ваше число: ${yourNumber}, а выпало: ${randomNumber}`;
}

//ЗАДАНИЕ №5
//Создать функцию, которая принимает число n и возвращает массив, заполненный
//числами от 1 до n.
function getArray(itemCount) {
  if (!itemCount || typeof itemCount !== "number" || itemCount % 1 !== 0)
    return console.error(
      `getArray() ERROR. 
      ${Array.isArray(itemCount) ? "array" : typeof itemCount}: 
      "${itemCount}", is incorrect value. Please check your arguments.`
    );

  let resArray = [];
  for (let i = 1; i <= itemCount; i++) resArray.push(i);

  return resArray;
}

//ЗАДАНИЕ №6
//Создать функцию, которая принимает массив, а возвращает новый массив с
//дублированными элементами входного массива:
function doubleArray(inputArray) {
  if (!Array.isArray(inputArray))
    return console.error(
      `doubleArray() ERROR. ${typeof inputArray}: "${inputArray}", 
      is incorrect value. Please check your arguments.`
    );

  let resArray = [];
  resArray.push(...inputArray, ...inputArray);

  return resArray;
}

//ЗАДАНИЕ №7
//Создать функцию, которая принимает произвольное (любое) число массивов и
//удаляет из каждого массива первый элемент, а возвращает массив из оставшихся
//значений.
function changeCollection() {
  let resArray = [];
  for (const arg of arguments) {
    if (!Array.isArray(arg))
      return console.error(
        `changeCollection() ERROR. ${typeof arg}: "${arg}", 
        is incorrect value. Please check your arguments.`
      );

    resArray.push(arg.slice(1));
  }

  return resArray;
}

//ЗАДАНИЕ №8
//Создать функцию которая принимает массив пользователей, поле на которое хочу
//проверить и значение на которое хочу проверять. Проверять что все аргументы
//переданы. Возвращать новый массив с пользователями соответсвующие указанным
//параметрам.
function funcGetUsers(users, key, value) {
  if (!Array.isArray(users))
    return console.error(
      `funcGetUsers() ERROR. ${typeof users}: "${users}", 
      is incorrect value. Please check your arguments.`
    );

  if (!key || typeof key !== "string")
    return console.error(
      `funcGetUsers() ERROR. ${typeof key}: "${key}", 
      is incorrect value. Please check your arguments.`
    );

  if (!value && value !== 0 && value !== "" && value !== false)
    return console.error(
      `funcGetUsers() ERROR. ${typeof value}: "${value}", 
      is incorrect value. Please check your arguments.`
    );

  let resArray = [];
  for (const user of users) {
    if (typeof user !== "object")
      return console.error(
        `funcGetUsers() ERROR. ${typeof user}: "${user}", 
        is incorrect value. Please check your arguments.`
      );

    if (user[key] === value) resArray.push(user);
  }

  return resArray;
}
