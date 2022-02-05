// Перепишите `if..else` с использованием нескольких операторов `?`. 

let login = 'Pitter';

let messege = (login === 'Pitter') 
? 'Hi' : (login === 'Owner') 
? "Hello" : (login === '') 
? 'unknown' : '';


console.log(messege)



