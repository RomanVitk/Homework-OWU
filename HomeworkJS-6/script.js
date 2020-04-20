/*1*/

/*
const arrayNumb = [777, 34, 123, 1, 87, 943, 33, 55, 21, 911, 4, 543, 78, 42, 80, 321, 345, 7, 66, 17];
*/

/*let sortArray = arrayNumb.sort();
console.log(sortArray);*/

/*arrayNumb.sort((a, b) => {
    return b - a;
    console.log(a);
    console.log(b);
});
console.log(arrayNumb);*/


/*
let numbers = arrayNumb.filter((value, index, array) => {
    if (value  % 3 !== 0){
        return
    }
    console.log(value);
});
*/


/*let numbers = arrayNumb.filter((value, index, array) => {
    if (value  % 10 !== 0){
        return
    }
    console.log(value);
});*/


/*
let forArray = arrayNumb.forEach( value => console.log(value));
    console.log(forArray);
*/


/*let mapArray = arrayNumb.map(value => value*3);
    console.log(mapArray);*/

/*2*/

/*
let strArray = ['Olia', 'Vova', 'Lilia', 'Julia', 'Roma', 'Bodia', 'Vika', 'Pasha', 'Maxim', 'Vitya', 'Dima', 'Bart', 'Nick', 'Sara', 'Stive', 'Alex'];
let sortArray = strArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
    console.log('sortArray', strArray);
*/


/*let strArray = ['Olia', 'Vova', 'Lilia', 'Julia', 'Roma', 'Bodia', 'Vika', 'Pasha', 'Maxim', 'Vitya', 'Dima', 'Bart', 'Nick', 'Sara', 'Stive', 'Alex'];
let sortArray = strArray.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
    console.log('sortArray', strArray);*/


/*let strArray = ['Olia', 'Vova', 'Lilia', 'Julia', 'Roma', 'Bodia', 'Vika', 'Pasha', 'Maxim', 'Vitya', 'Dima', 'Bart', 'Nick', 'Sara', 'Alex'];
let sortArray = strArray.filter(value => value.length < 5)
    console.log(sortArray);*/


/*let strArray = ['Olia', 'Vova', 'Lilia', 'Julia', 'Roma', 'Bodia', 'Vika', 'Pasha', 'Maxim', 'Vitya', 'Dima', 'Bart', 'Nick', 'Sara', 'Alex'];
let sortArray = strArray.map(value => {
    value += '!';
    return value;
});
    console.log(sortArray);*/

/*3*/

/*let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
users.sort((a, b) => a.age - b.age);
console.log(users);*/


/*let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

users.sort((a, b) => b.age - a.age);
console.log(users);*/

/*
let myArray = JSON.parse(JSON.stringify(users));
let newUsers = myArray.sort((a, b) => b.age - a.age);
console.log(newUsers);
*/


/*let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];*/

/*users.sort((a, b) => b.name.length - a.name.length);
console.log(users);*/

/*users.sort((a, b) => a.name.length - b.name.length);
console.log(users);*/


/*let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

users.map((user, index) => {
    user.id = index;
    return user;
});
console.log(users);*/

/*4*/


/*function calc(a, b, callback) {
    return  callback(a, b);
}
calc(543, 345, function (a, b) {
    console.log((a + b));
})*/


/*function calc(a, b, c, callback) {
    return  callback(a, b, c);
}
calc(543, 345, 112, function (a, b, c) {
    console.log((a + b + c));
})*/


/*5*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.volume >= 3)
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.volume === 2)
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.producer === 'mercedes')
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.volume >= 3 && item.producer === 'mercedes')
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.volume >= 3 && item.producer === 'subaru')
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.power > 300)
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.power >= 300 && item.producer === 'subaru')
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.engine.startsWith('ej'))
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.power >= 300 && item.producer === 'subaru' && item.engine.startsWith('ej'))
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.volume <= 3 && item.producer === 'mercedes')
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.volume > 2 && item.power >= 250)
console.log(result)*/


/*let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];

let result = cars.filter(item => item.power > 250 && item.producer === 'bmw')
console.log(result)*/


/*6*/

/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

        usersWithAddress.sort(function (a, b) {
        return a.id - b.id;
    });
console.log(usersWithAddress);*/





/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

        usersWithAddress.sort(function (a, b) {
        return b.id - a.id;
    });
console.log(usersWithAddress);*/




/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

usersWithAddress.sort(function (a, b) {
    return a.age - b.age;
});
console.log(usersWithAddress);*/




/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

usersWithAddress.sort(function (a, b) {
    return b.age - a.age;
});
console.log(usersWithAddress);*/



/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

usersWithAddress.sort((a, b) => {
    if(b.name > a.name) {
        return -1
    }else {
        return 1
    }
});
console.log(usersWithAddress);*/





/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

usersWithAddress.sort((a, b) => {
    if(a.name > b.name) {
        return -1
    }else {
        return 1
    }
});
console.log(usersWithAddress);*/




/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

usersWithAddress.sort((a, b) => {
    if(a.address.number > b.address.number) {
        return -1
    }else {
        return 1
    }
});
console.log(usersWithAddress);*/





/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];

usersWithAddress.sort((a, b) => {
    if(b.address.number > a.address.number) {
        return -1
    }else {
        return 1
    }
});
console.log(usersWithAddress);*/



/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];



let numbers = usersWithAddress.filter((value, index, array) => {
    if (value.age >= 30){
        return
    }
    console.log(value);
});*/






/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];



let numbers = usersWithAddress.filter((value, index, array) => {
    if (value.status !== false){
        return
    }
    console.log(value);
});*/




/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];



let numbers = usersWithAddress.filter((value, index, array) => {
    if (value.status !== false || value.age >= 30){
        return
    }
    console.log(value);
});*/




/*let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 1}
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 90}
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 2}
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 43}
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    }];



let numbers = usersWithAddress.filter((value, index, array) => {
    if (value.address.number % 2){
        return
    }
    console.log(value);
});*/






































































































