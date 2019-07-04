//ЗАДАНИЕ №1
//------------------------------------------------------------
//Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
//multiply(1,2,3) = 6 (1*2*3). Если нет ни одного аргумента, вернуть ноль: multiply(); //0
function multiply(args = 1) {
  //Если аргументы не переданны возвращаем 0
  if (!arguments.length) return 0;
  //Объявляем переменную result, равную 1
  let result = 1;
  //Цикл по всем аргументам переданным в функцию
  for (const value of arguments) {
    //Если аргумент NaN или не число, сообщаем об ошибке
    if (isNaN(value) || typeof value !== "number")
      return console.error(
        `multiply() ERROR. ${
          Array.isArray(value) ? "array" : typeof value
        }: "${value}", is incorrect value. Please check your arguments.`
      );
    //Увеличиваем Result, умножая на каждое переданное число-аргумент
    result *= value;
  }
  //Возвращаем округленный результат если число дробное
  if (result % 1 !== 0) return Number(result.toFixed(8));
  //Возвращаем результат
  return result;
}

//ЗАДАНИЕ №2
//------------------------------------------------------------
//Создать функцию, которая принимает строку и возвращает строку-перевертыш:
//reverseString(‘test’) // “tset”.
function reverseString(str) {
  //Если аргумент пустая строка или не строка, сообщаем об ошибке
  if (!str || typeof str !== "string")
    return console.error(
      `reverseString() ERROR. ${
        Array.isArray(str) ? "array" : typeof str
      }: "${str}", is incorrect value. Please check your arguments.`
    );
  //Создаем пустую строку result
  let result = "";
  //Цикл по символам переданной строки, добавляем каждый следующий символ в начало строки result
  for (const char of str) result = char + result;
  //Возвращаем результат
  return result;
}

//ЗАДАНИЕ №3
//------------------------------------------------------------
//Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа.
//getCodeStringFromText(‘hello’) // “104 101 108 108 111”
//подсказка: для получения кода используйте str.charCodeAt()
function getCodeStringFromText(str) {
  //Если аргумент пустая строка или не строка, сообщаем об ошибке
  if (!str || typeof str !== "string")
    return console.error(
      `getCodeStringFromText() ERROR. ${
        Array.isArray(str) ? "array" : typeof str
      }: "${str}", is incorrect value. Please check your arguments.`
    );
  //Создаем пустую строку result
  let result = "";
  //Цикл по символам переданной строки
  for (const char of str) {
    //Если в строку result уже передавалось ранее значение, отделяем его пробелом
    if (result.length > 0) result += " ";
    //Добавляем в строку result код очередного символа переданной строки
    result = result.concat(char.charCodeAt(0));
  }
  //Возвращаем результат
  return result;
}

//ЗАДАНИЕ №4
//------------------------------------------------------------
//Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
function secretNumber(yourNumber) {
  //Если аргумент не целое число, сообщаем об ошибке
  if (typeof yourNumber !== "number" || yourNumber % 1 !== 0)
    return console.error(
      `secretNumber() ERROR. ${
        Array.isArray(yourNumber) ? "array" : typeof yourNumber
      }: "${yourNumber}", is incorrect value. Please check your arguments.`
    );
  //Если аргумент не находится в диапазоне [1..10], сообщаем об ошибке
  if (yourNumber < 1 || yourNumber > 10)
    return console.error(
      `secretNumber() ERROR. Number: ${yourNumber}, does't belong to the range [1..10]. Please check your arguments.`
    );
  //Объявляем переменную randomNumber, хранящую случайное число от 1 до 10
  let randomNumber = Math.ceil(Math.random() * 10);
  //Если случайное число из переменной randomNumber равно переданному в функцию аргументу, возвращаем сообщение с поздравлением
  if (yourNumber === randomNumber)
    return `Вы выиграли!!! Совпало число: ${yourNumber}`;
  //Если ни одно условие не сработало, очевидно: случайное число не угаданно, возвращаем сообщение о проигрыше
  return `Вы не угадали, ваше число: ${yourNumber}, а выпало: ${randomNumber}`;
}

//ЗАДАНИЕ №5
//------------------------------------------------------------
//Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
//getArray(10); // [1,2,3,4,5,6,7,8,9,10]
function getArray(itemCount) {
  //Если аргумент не передан(равен 0) или не целое число, сообщаем об ошибке
  if (!itemCount || typeof itemCount !== "number" || itemCount % 1 !== 0)
    return console.error(
      `getArray() ERROR. ${
        Array.isArray(itemCount) ? "array" : typeof itemCount
      }: "${itemCount}", is incorrect value. Please check your arguments.`
    );
  //Создаем пустой массив resArray, в который будем добавлять элементы
  let resArray = [];
  //Цикл от 1 до переданного числа
  for (let i = 1; i <= itemCount; i++) {
    //Каждую итерацию цикла увеличиваем созданный масив на один элемент, равный порядковому номеру итерации
    resArray.push(i);
  }
  //Возвращаем результат
  return resArray;
}

//ЗАДАНИЕ №6
//------------------------------------------------------------
//Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
//doubleArray([1,2,3]) // [1,2,3,1,2,3]
function doubleArray(inputArray) {
  //Если переданный аргумент не массив, сообщаем об ошибке
  if (!Array.isArray(inputArray))
    return console.error(
      `doubleArray() ERROR. ${typeof inputArray}: "${inputArray}", is incorrect value. Please check your arguments.`
    );
  //Создаем пустой массив resArray, в который будем добавлять переданные массивы без первого эллемента
  let resArray = [];
  //Добавляем к массиву resArray элементы переданного массива дважды, здесь я использую аргумент распространения (...)
  resArray.push(...inputArray, ...inputArray);
  //Возвращаем результат
  return resArray;
}

//ЗАДАНИЕ №7
//------------------------------------------------------------
//Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
//changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
function changeCollection(args) {
  //Создаем пустой массив resArray, в который будем добавлять переданные массивы без первого эллемента
  let resArray = [];
  //Проходимся по всем переданным аргументам
  for (const arg of arguments) {
    //Если текущий аргумент не массив, сообщаем об ошибке
    if (!Array.isArray(arg))
      return console.error(
        `changeCollection() ERROR. ${typeof arg}: "${arg}", is incorrect value. Please check your arguments.`
      );
    //Добавляем к массиву resArray каждый переданный массив, без 1-го эллемента
    resArray.push(arg.slice(1));
  }
  //Возвращаем результат
  return resArray;
}

//ЗАДАНИЕ №8
//------------------------------------------------------------
//Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
//funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
function funcGetUsers(users, key, value) {
  //Проверяем переданные значения на корректность. Можно и в одном if, но так конкретней сообщение об ошибке можно составить
  //Если users не массив, сообщаем об ошибке
  if (!Array.isArray(users))
    return console.error(
      `funcGetUsers() ERROR. ${typeof users}: "${users}", is incorrect value. Please check your arguments.`
    );
  //Если key не определен или не строка, сообщаем об ошибке
  if (!key || typeof key !== "string")
    return console.error(
      `funcGetUsers() ERROR. ${typeof key}: "${key}", is incorrect value. Please check your arguments.`
    );
  //Если value не определен и не 0, не пустая строка и не false, сообщаем об ошибке
  if (!value && value !== 0 && value !== "" && value !== false)
    return console.error(
      `funcGetUsers() ERROR. ${typeof value}: "${value}", is incorrect value. Please check your arguments.`
    );
  //Создаем пустой массив resArray, в который будем добавлять удовлетворяющие запросу элементы переданного массива
  let resArray = [];
  //Цикл по всем эллементам переданного массива users
  for (const user of users) {
    //Если текущий элемент массива не объект - сообщаем об ошибке
    if (typeof user !== "object")
      return console.error(
        `funcGetUsers() ERROR. ${typeof user}: "${user}", is incorrect value. Please check your arguments.`
      );
    //Если значение переданного ключа объекта соответствует искомому значению, добавляем объект в массив resArray;
    if (user[key] === value) resArray.push(user);
  }
  //Возвращаем результат
  return resArray;
}
