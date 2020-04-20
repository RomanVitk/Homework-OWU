/*1*/
/*const numberArray = [22, 37, 77, 3.14, 5];
console.log(numberArray);*/

/*2*/
/*
const strArray = ['hello', 'develop', 'test', '3.14', 'five'];
console.log(strArray);
*/

/*3*/
/*
const numStrArray = [3, 'up', 5.08, 'down', 'true'];
console.log(numStrArray);
*/

/*4*/
/*let emptyArray = [];

emptyArray[1] = 'car';
emptyArray[4] = false;
emptyArray[0] = '911';
emptyArray[3] = {girl:'Olga', gender:'female', age: 26, hair: 'blonde'};
emptyArray[2] = '3.14';
console.log(emptyArray);*/

/*5*/
/*for (let i = 0; i < 10; i++) {
    document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>');
}*/

/*6*/
/*for (let i = 0; i < 10; i++) {
    document.write('<div>number : '+i+'</div>');
}*/

/*7*/
/*
let i = 0;
while (i < 20) {
    document.write('<h1>xxx</h1>');
    i++;
}
*/

/*8*/
/*let i = 0;
while (i < 20) {
    document.write('<h1>index : '+i+'</h1>');
    i++;
}*/

/*9*/
/*let numArray = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
for (let j = 0; j < numArray.length; j++) {
    console.log(numArray[j]);
}*/

/*10*/
/*let arrStr = ['Olia', 'Sergii', 'Andrew', 'Viktor', 'Vova', 'Julia', 'Karina', 'Roman', 'Stas', 'Ania'];
for (let j = 0; j < arrStr.length; j++) {
    console.log(arrStr[j]);
}*/

/*11*/

/*let arr = [];

arr[4] = '17';
arr[0] = '888';
arr[1] = 'true';
arr[9] = {car : 'maserati', color : 'black'};
arr[3] = NaN;
arr[8] = 3.14;
arr[5] = ('3');
arr[7] = 55;
arr[2] = 'NaN';
arr[6] = null;

console.log(arr);*/

/*12*/

/*let onlyBooleans = [];

onlyBooleans[4] = false;
onlyBooleans[5] = ('7');
onlyBooleans[7] = 5;
onlyBooleans[1] = true;
onlyBooleans[9] = {system : 'Ubuntu'};
onlyBooleans[3] = NaN;
onlyBooleans[0] = '88';
onlyBooleans[6] = null;
onlyBooleans[8] = 3.14159;
onlyBooleans[2] = 'NaN';

for (let i = 0; i < onlyBooleans.length; i++) {
    if (typeof onlyBooleans[i] === 'boolean'){
        console.log(onlyBooleans[i])
    }
}*/

/*13*/

/*let onlyNumbers = [];

onlyNumbers[4] = false;
onlyNumbers[5] = ('7');
onlyNumbers[7] = 5;
onlyNumbers[1] = true;
onlyNumbers[9] = {system : 'Ubuntu'};
onlyNumbers[3] = NaN;
onlyNumbers[0] = '88';
onlyNumbers[6] = null;
onlyNumbers[8] = 3.14159;
onlyNumbers[2] = 'NaN';

for (let i = 0; i < onlyNumbers.length; i++) {
    if (typeof onlyNumbers[i] === 'number'){
        console.log(onlyNumbers[i])
    }
}*/

/*14*/

/*let onlyStr = [];

onlyStr[4] = false;
onlyStr[5] = ('7');
onlyStr[7] = 5;
onlyStr[1] = true;
onlyStr[9] = {system : 'Ubuntu'};
onlyStr[3] = NaN;
onlyStr[0] = '88';
onlyStr[6] = null;
onlyStr[8] = 3.14159;
onlyStr[2] = 'NaN';

for (let i = 0; i < onlyStr.length; i++) {
    if (typeof onlyStr[i] === 'string'){
        console.log(onlyStr[i])
    }
}*/

/*15*/

/*let emptArray = [];

emptArray[7] = false;
emptArray[5] = ('7');
emptArray[4] = -5;
emptArray[1] = true;
emptArray[0] = {system : 'Windows10'};
emptArray[3] = NaN;
emptArray[10] = '88';
emptArray[2] = null;
emptArray[8] = 0.314159;
emptArray[6] = 'NaN';

for (let j = 0; j < emptArray.length; j++) {
    console.log(emptArray[j]);
}*/

/*16*/

/*
for (let i = 0; i < 10; i++) {
    console.log('step :', i);
    document.write('<br>');
    document.write('step :', i);
}

/!*17*!/

for (let i = 0; i < 100; i++) {
    console.log('step :', i);
    document.write('<br>');
    document.write('step :', i);
}
*/

/*18*/

/*
for (let i = 0; i < 100; i=i+2) {
    console.log('step :', i);
    document.write('<br>');
    document.write('step :', i);
}
*/

/*19*/

/*for (let i = 0; i < 100; i++) {
    if (i%2 === 0){
        console.log('step :', i);
        document.write('<br>');
        document.write('step :', i);
    }

}*/

/*20*/

/*for (let i = 0; i < 100; i++) {
    if (i%2 === 1){
        console.log('step :', i);
        document.write('<br>');
        document.write('step :', i);
    }

}*/

/*21*/

/*let abc = [ 'a', 'b', 'c'];
let str ='';
for (let i = 0; i < abc.length; i++) {
     str = str + abc[i];
}
    console.log(str);*/

/*22*/

/*let abc = [ 'a', 'b', 'c'];
let i = 0;
let str ='';
while (i < 3){
    str = str + abc[i];
    i++;
}
    console.log(str);*/

/*23*/

/*let abc = [ 'a', 'b', 'c'];
let str = '';
for (const strElement of abc) {
    str = str + strElement;
}
    console.log(str);*/

/*24*/

/*let abc = [ 'a', 'b', 'c'];
let str = '';
for (const strElement in abc) {
    str = str + abc[strElement];
}
console.log(str);*/

/*25*/

/*
let abc = [ 'a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    abc.push(i);
}
    console.log(abc);
*/

/*26*/

/*let num = [ 1, 2, 3];
for (let i = 1; i <= 3; i++) {
    num.reverse(i);
}
console.log(num);*/

/*27*/

/*
let abc = [ 1, 2, 3];
for (let i = 4; i <= 6; i++) {
    abc.push(i);
}
console.log(abc);
*/

/*28*/

/*let num = [ 1, 2, 3];
for (let i = 6; i >= 4; i--) {
    num.unshift(i);
}
    console.log(num);*/

/*29*/

/*let str = ['js', 'css', 'jq'];
    const num1 = str.shift();
    document.write(num1);
    console.log(num1);*/

/*30*/

/*let str = ['js', 'css', 'jq'];
const num1 = str.pop();
document.write(num1);
console.log(num1);*/

/*31*/

/*const number = [1, 2, 3, 4, 5];
console.log(number.splice(1, 2));
console.log(number.splice(0, 3));*/

/*32*/

/*number = [1, 2, 3, 4, 5];
console.log(number.splice(3, 4));*/

/*33*/

/*
number = [1, 2, 3, 4, 5];
console.log(number.splice(0, 2));
*/

/*34*/

/*
const number = [1, 2, 3, 4, 5];
console.log(number.splice(3, 0, 'a', 'b', 'c'));
console.log(number);
*/

/*35*/

/*const number = [1, 2, 3, 4, 5];
number.splice(1, 0, 'a', 'b');
number.splice(6, 0, 'c');
number.splice(9, 0, 'e');
console.log(number);*/

/*36*/

/*
let arr = [8, 54, 13, -9, 25, 78, 33, 112, 5, 911];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0){
        console.log(arr[i]);
    }
}
*/

/*37*/

/*
let arr = [8, 54, 13, -9, 25, 78, 33, 112, 5, 911];
let emptyArr = [];

for (let i = 0; i < arr.length; i++) {
    emptyArr.push(arr[i]);
}
    console.log(emptyArr);
*/

/*38*/

/*let arr = [8, 54, 13, -9, 25, 78, 33, 112, 5, 911];
let emptyArr = [];

for (let i = 0; i < arr.length; i++) {
    emptyArr[i]=(arr[i]);
}
console.log(emptyArr);*/










































































