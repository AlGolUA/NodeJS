function display(data, callback){
 
    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt>8? new Error("Ошибка выполнения. randInt больше 8"): null;
     
    setTimeout(function(){
        callback(err, data);
    }, 0);
}
 
console.log("Начало работы программы");
 
display("Обработка данных...", function (err, data){
 
    if(err) throw err;
    console.log(data);
});
 
function displaySync(callback){
    callback();
}
 
setTimeout(function(){
         
        console.log("timeout 500");
}, 500);
 
setTimeout(function(){
         
        console.log("timeout 100");
}, 100);
 
displaySync(function(){console.log("without timeout")});
console.log("Завершение работы программы");