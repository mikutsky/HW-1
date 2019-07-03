//Пример использования анонимной функции.
//В чате, на занятие, спрашивал кто-то: "Зачем подобная форма объявления функции может понадобится?" В примере ниже, я организовал счётчики и прочую логику, без использования глобальных переменных.
//funcReport(func, args) принимает проверяемую функцию и аргументы, запускает её, а результат выводит в консоль и в документ в удобном виде. Выводит номер задания и номер примера в правильном порядке. Если проверяемая функция уже выполнялась - номер под которым шло задание берется прежний.
const funcReport = (function() {
  let nextTask = 0;
  let nextExample = 0;
  let oldfunc = [];
  let lastfunc;
  return function(func, args) {
    let arg = [];
    if (!func || typeof func != "function")
      return console.error(
        `checkReport() ERROR. "${func}", is incorrect function name. Please check your arguments.`
      );
    let i = 0;
    for (const value of arguments) {
      if (typeof value !== "function") arg[i++] = value;
    }
    if (lastfunc !== func) {
      nextExample = 0;
      let lastTask = nextTask;
      for (let i = 0; i < oldfunc.length; i++) {
        if (oldfunc[i] === func) lastTask = i;
      }
      if (lastTask < nextTask)
        outH2(`ЗАДАНИЕ №${lastTask + 1}. ПРОВЕРКА РАБОТЫ ${func.name}();`);
      else {
        outH2(`ЗАДАНИЕ №${++nextTask}. ПРОВЕРКА РАБОТЫ ${func.name}();`);
        oldfunc.push(func);
      }
      lastfunc = func;
    }
    let argStr = "";
    let ir = 0;
    for (const value of arg) {
      if (argStr.length > 0) argStr = argStr.concat(", ");
      switch (typeof value) {
        case "string":
          argStr = argStr + '"' + value + '"';
          break;
        case "object":
          if (Array.isArray(value)) argStr = argStr + "[" + value + "]";
          else argStr = argStr + value;
          break;
        case "number":
          argStr = argStr + value;
          break;
        default:
          argStr = argStr + String(value);
      }
    }
    return outResult(
      `\tПример #${++nextExample};\t${func.name}(${argStr}) =`,
      func(...arg)
    );
  };
})();

// Вывод заголовка
function outH2(result) {
  console.log(`\n${result}`);
  document.body.innerHTML += `<div><h2>${result}</h2></div>`;
}

// Вывод результата
function outResult(result) {
  let str = "";
  console.log(...arguments);
  for (const arg of arguments) {
    if (str.length > 0) {
      str += " ";
      switch (typeof arg) {
        case "string":
          str = str.concat('"', arg, '"');
          break;
        case "object":
          if (Array.isArray(arg)) str = str + "[" + arg + "]";
          else str = str + arg;
          break;
        default:
          str = str + arg;
      }
    } else str += arg;
  }
  document.body.innerHTML += `<p>${str}</p>`;
}

//Проверка функций с разными аргументами
funcReport(multiply, 3, 1, 7, 5, 3, 9);
funcReport(multiply, 8.8, 3);
funcReport(multiply, 5);
funcReport(multiply);
funcReport(multiply, NaN);
funcReport(multiply, 4, 5, "a");
funcReport(multiply, 3, { name: "asd", age: 23 }, 1, 2);

funcReport(reverseString, "test");
funcReport(reverseString, "alpha-beta-100500");
funcReport(reverseString, "");
funcReport(reverseString);

funcReport(getCodeStringFromText, "test");
funcReport(getCodeStringFromText, "qwetasd");
funcReport(getCodeStringFromText, "");
funcReport(getCodeStringFromText, ["h", "e", "l", "l", "o"]);
funcReport(getCodeStringFromText);

funcReport(secretNumber);
funcReport(secretNumber, 5);
funcReport(secretNumber, 7);
funcReport(secretNumber);
funcReport(secretNumber, NaN);
funcReport(secretNumber, "a");

funcReport(getArray, 10);
funcReport(getArray, 7);
funcReport(getArray, 2);
funcReport(getArray, 1);
funcReport(getArray, 0);
funcReport(getArray);
funcReport(getArray, NaN);
funcReport(getArray, null);

funcReport(doubleArray, [1, 2, 3]);
funcReport(doubleArray, ["a", false, "s", "d", NaN, { name: "Dimon" }]);
funcReport(doubleArray, [1, 2, 3]);

funcReport(changeCollection, [1, 2, 3, 4], ["a", "s", "d"], [false, true]);
funcReport(changeCollection, [1, 2], ["s", "d"]);
funcReport(changeCollection, [1, 2, 3, 4], [2]);
funcReport(changeCollection, ["a", "s"], "d");
funcReport(changeCollection, [1, 2, 3, 4], { 1: "2" });

let users = [
  { name: "Dimon", age: 33, gender: "male" },
  { name: "Anna", age: 28, gender: "female" },
  { name: "Sveta", age: 13, gender: "female" },
  { name: "Petya", age: 33, gender: "male" }
];

funcReport(funcGetUsers, users, "gender", "female");
funcReport(funcGetUsers, users, "gender", "male");
funcReport(funcGetUsers, users, "age", 33);
funcReport(funcGetUsers, users, "age", true);
funcReport(funcGetUsers, users, "", 5);
