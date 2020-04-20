/*1*/  /*document.write('<br'>);*/  /*document.write('<hr'>);*/

/*let newArray  = [654, 45, 456, 56, 54];
function seeArray(arr) {
    console.log(arr)
}
seeArray(newArray);*/

/*2*/
/*let newArray  = [];
 function createArray(length, max ,min) {
     for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() *(max-min)+min))
     }
     return newArray;
 }
const arr = createArray(15, 10, 100);
seeArray(arr);*/


/*3*/

/*
function minReturn(a, b, c, d, e) {
      let min;

      if (a <= b && a <= c) min = a;
      if (b <= a && b <= c) min = b;
      if (c <= b && c <= a) min = c;
      if (d <= a && d <= b) min = d;
      if (e <= b && e <= a) min = e;

      console.log('min', min);
      return min;
}
const min = minReturn(7, 0.6, 3, 45, 0.5);
console.log(min);
*/

/*4*/

/*function maxReturn(a, b, c, d, e) {
    let max;

    if (a => b && a == c) max = a;
    if (b => a && b == c) max = b;
    if (c => b && c == a) max = c;
    if (d => a && d == b) max = d;
    if (e => b && e == a) max = e;

    console.log('max', max);
    return max;
}
const max = maxReturn(7, 0.6, 3, 45, 0.5);
console.log(max);*/

/*5*/

/*function takeNum() {
    console.log(arguments);
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments) {
        if (item > max) max = item;
        if (item < min) min = item;
    }
    console.log('max', max);
    return min;
}
const min = takeNum(7, 0.6, 3, 45, 0.5);
console.log('min', min);*/


/*6*/

/*
const myFunc = (array)=> {
    let max = array[0];
    for (const item of array) {
        if (max < item) max = item
    }
    return max;
}
const myFunc1 = myFunc([7, 0.6, 3, 45, 0.5]);
console.log(myFunc1);
*/

/*7*/

/*
const myFunc = (array)=> {
    let max = array[0];
    for (const item of array) {
        if (max > item) max = item
    }
    return max;
}
const myFunc1 = myFunc([7, 0.6, 3, 45, 0.5]);
console.log(myFunc1);
*/

/*8*/

/*function totValue(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}
const totValue1 = totValue([6, 6, 6, 6, 6, 6]);
console.log('totValue1', totValue1);*/

/*9*/

/*function midArithmetic1(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum/array.length;
}
const midArithmetic = midArithmetic1([6, 6, 6, 6, 6, 6]);
console.log('midArithmetic', midArithmetic);*/

/*10*/

/*const users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
},
    [],
    777,
    {},
    '',
    {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
function countMargin(arrayUsers) {
let count = 0;
    for (const item of arrayUsers) {
        if(typeof item === 'object' /!*&& !Array.isArray(item)*!/){
            count++;
        }
    }
    return count;
}
const number = countMargin(users);
console.log(number);*/

/*11*/

/*let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
function countMargin(arrayUsers) {
    let count = 0;
    for (const item of arrayUsers) {
        if(typeof item === 'object') {
            for (const key in item) {
                for (const key in item) {
                    if (typeof item === 'object'){
                        count++;
                    }
                }
                count++;
            }
        }
    }
    return count;
}
const number = countMargin(users);
console.log(number);*/


/*12*/

/*
function arrays(arr1, arr2) {
  let  result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}
const arrays1 = arrays([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(arrays1);
*/

/*13*/

/*
let arrays = [2, 3, 4, 5];
console.log(arrays);
function chngElemnt(array, index) {
    if (index < array.length-1){
        let temp = array[index];
        array[index] = array[index+1];
        array[index+1] = temp;
    }
    return array;
}
const chngElemnt1 = chngElemnt(arrays, 1);
console.log(chngElemnt1);
*/

/*14*/

/*function moveItem(array) {
    let nul = [];
    let number = [];
    for (const item of array) {
        if (item === 0){
            nul.push(0);
        }else{
            number.push(item);
        }
    }
    return number.concat(nul);
}
console.log(moveItem([1, 0, 6, 0, 3]));
console.log(moveItem([0, 1, 2, 3, 4]));
console.log(moveItem([0, 0, 1, 0]));*/

/*15*/

/*function add(divElement) {
    let div = tag.createElement("div");
    document.body.appendChild('div');
}
add('div');*/

/*16*/

/*function add(message, typeTag) {
    const tag = document.createElement(typeTag);
    tag.innerText = message || 'Hello owu';
    document.body.appendChild(tag);
}
add(null, 'div');*/

/*17*/

/*let cars = [
    {
        id:'Mercedes',
        model:'GLK',
        year: 2015,
        engine: 'V6',
        color:'white'
    },
    {
        id:'Pontiac',
        model:'Canadian',
        year: 1956,
        engine: 'V8',
        color:'black'
    },
    {
        id:'Ford',
        model:'Fusion',
        year: 2016,
        engine: 'V6',
        color:'silver'
    },
    {
        id:'VW',
        model:'Passat',
        year: 2014,
        engine: 'V10',
        color:'red'
    },
    {
        id:'BMW',
        model:'X5',
        year: 2013,
        engine: 'V6',
        color:'blue'
    },
    {
        id:'Skoda',
        model:'SuperB',
        year: 2015,
        engine: 'V6',
        color:'black aluminum'
    },
    {
        id:'Toyota',
        model:'Land Cruiser',
        year: 2009,
        engine: 'V10',
        color:'silver chrome'
    },
    {
        id:'Volvo',
        model:'XC90',
        year: 2017,
        engine: 'V8',
        color:'white'
    },
    {
        id:'Subaru',
        model:'Outback',
        year: 2011,
        engine: 'V6',
        color:'black chrome'
    },
    {
        id:'Chevrolet',
        model:'Camaro',
        year: 2016,
        engine: 'V12',
        color:'yellow'},
];
function addCars(arrayCars, idTag) {
    const block = document.getElementById(idTag);
    const ul = document.createElement('ul');
    for (let i = 0; i < arrayCars.length; i++) {
        const cars = arrayCars[i];
        const li = document.createElement('li');
        li.innerHTML = `${i} - ${cars.id}`;
        ul.appendChild(li);
    }
    block.appendChild(ul);

}
addCars(cars,'list');*/

/*18*/

/*let cars = [
    {
        id:'Mercedes',
        model:'GLK',
        year: 2015,
        engine: 'V6',
        color:'white'
    },
    {
        id:'Pontiac',
        model:'Canadian',
        year: 1956,
        engine: 'V8',
        color:'black'
    },
    {
        id:'Ford',
        model:'Fusion',
        year: 2016,
        engine: 'V6',
        color:'silver'
    },
    {
        id:'VW',
        model:'Passat',
        year: 2014,
        engine: 'V10',
        color:'red'
    },
    {
        id:'BMW',
        model:'X5',
        year: 2013,
        engine: 'V6',
        color:'blue'
    },
    {
        id:'Skoda',
        model:'SuperB',
        year: 2015,
        engine: 'V6',
        color:'black aluminum'
    },
    {
        id:'Toyota',
        model:'Land Cruiser',
        year: 2009,
        engine: 'V10',
        color:'silver chrome'
    },
    {
        id:'Volvo',
        model:'XC90',
        year: 2017,
        engine: 'V8',
        color:'white'
    },
    {
        id:'Subaru',
        model:'Outback',
        year: 2011,
        engine: 'V6',
        color:'black chrome'
    },
    {
        id:'Chevrolet',
        model:'Camaro',
        year: 2016,
        engine: 'V12' ,
        color:'yellow'},
];
function addCars(arrayCars, idTag) {
    const block = document.getElementById(idTag);

    for (let i = 0; i < arrayCars.length; i++) {
        const cars = arrayCars[i];
        const div = document.createElement('div');
        const id = document.createElement('h2');
        const model = document.createElement('h3');
        const year = document.createElement('h4');
        const engine = document.createElement('p');

        id.innerHTML = `id: ${cars.id}`;
        model.innerHTML = `model: ${cars.model}`;
        year.innerText = `year: ${cars.year}`;
        engine.innerText = `engine: ${cars.engine}`;

        div.appendChild(id);
        div.appendChild(model);
        div.appendChild(year);
        div.appendChild(engine);

        block.appendChild(div);
    }
}
addCars(cars,'list');*/

/*19*/

/*let usersWithId = [
    {id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    },
];
let citiesWithId = [
    {user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    },
];

function split(usersArr, citiesArr) {
    const users = [usersArr];
    const cities = [citiesArr];
    for (const city of cities) {
        for (const user of users) {
            if (city.user_id === user.id){
                user.adress = city;
            }
        }
    }
    return users;

}
const split1 = split(usersWithId, citiesWithId);
console.log('usersWithId', usersWithId);
console.log('citiesWithId', citiesWithId);
console.log(split1);*/

/*20*/

/*
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
*/

































































