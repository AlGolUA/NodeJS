var fs = require("fs");

// асинхронное чтение
fs.readFile("hello.txt", "utf8", 
			function(error,data){
				console.log("Асинхронное чтение файла");
				if(error) throw error; // если возникла ошибка
				console.log(data);	// выводим считанные данные
				fs.writeFile("hello_out1.txt", data);
				console.log("Синхронная запись файла завершена");


});

// синхронное чтение
console.log("Синхронное чтение файла")
var fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
fs.writeFile("hello_out2.txt", fileContent, function(error){
				if(error) throw error; // если возникла ошибка
				console.log("Асинхронная запись файла завершена. Содержимое файла:");
				var data = fs.readFileSync("hello_out2.txt", "utf8");
				console.log(data);	// выводим считанные данные
});