var os = require("os");
var greeting = require("./greeting");

var User = require("./user.js");
var eugene = new User("Eugene", 32);
eugene.sayHi();
 
// получим имя текущего пользователя
var userName = os.userInfo().username;
console.log(`Дата запроса: ${greeting.date}`); // ё для кавычек строки, параметры ${} в которой должны интерполироваться
console.log(greeting.getMessage(userName));