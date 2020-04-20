/*1*/

/*let man = {
    name: 'Andrew',
    age: 27,
    gender: 'male',
};

let wom = {
    surname: 'Savina',
    hair: 'blonde',
    home: 'Lviv',
};

let senior = {
    status: 'boss',
    live: 'Odessa',
    maritalSts: 'divorced',
};

let google = {
    company: 'Google',
    industry: 'software',
    headquarters: 'California U.S.',
};

let web = {
    fullName: 'Shevchenko Anriy Mykolayovych',
    job: 'Designer',
    skills: 'Photoshop',
};*/

/*2*/

/*
let man = {
    husband: 'Andrew',
    age: 27,
    gender: 'male',
    wife: { name: ['Victoria']}
};

let wom = {
    surname: 'Savina',
    hair: 'blonde',
    home: 'Lviv',
    specialist: {doctor: ['surgeon']},
};

let senior = {
    status: 'boss',
    live: 'Odessa',
    maritalSts: 'divorced',
    person: {character: ['unfriendly']},
};

let google = {
    company: 'Google',
    industry: 'software',
    headquarters: 'U.S.',
    state: {california: ['area 3rd']},

};

let web = {
    fullName: 'Shevchenko Anriy Mykolayovych',
    job: 'Designer',
    skills: 'Photoshop',
    car: { true: ['Porsche']},
};
*/

/*3*/

/*console.log(man);
for (key in man) {
    console.log('key', key);
};

console.log(wom);
for (key in wom) {
    console.log('key', key);
};

console.log(senior);
for (key in senior) {
    console.log('key', key);
};

console.log(google);
for (key in google) {
    console.log('key', key);
};

console.log(web);
for (key in web) {
    console.log('key', key);
};*/

/*4*/

/*
let man = {
    husband: 'Andrew',
    age: 27,
    gender: 'male',
    wife: { name: ['Victoria']}
};

let wom = {
    surname: 'Savina',
    hair: 'blonde',
    home: 'Lviv',
    specialist: {doctor: ['surgeon']},
};

let senior = {
    status: 'boss',
    live: 'Odessa',
    maritalSts: 'divorced',
    person: {character: ['unfriendly']},
};

let google = {
    company: 'Google',
    industry: 'software',
    headquarters: 'U.S.',
    state: {california: ['area 3rd']},

};

let web = {
    fullName: 'Shevchenko Anriy Mykolayovych',
    job: 'Designer',
    skills: 'Photoshop',
    car: { true: ['Porsche']},
};

console.log('Object.keys');
console.log(Object.keys(man));
*/

/*5*/

/*
let cars = ['Mercedes-Benz', 'Pontiac', 'Ford', 'VW', 'BMW', 'Skoda', 'Toyota', 'Volvo', 'Subaru', 'Chevrolet'];
let arr = [
    {model:'GLK', year: 2015, engine: 'V6', color:'white'},
    {model:'Canadian', year: 1956, engine: 'V8', color:'black'},
    {model:'Fusion', year: 2016, engine: 'V6', color:'silver'},
    {model:'Passat', year: 2014, engine: 'V10', color:'red'},
    {model:'X5', year: 2013, engine: 'V6', color:'blue'},
    {model:'SuperB', year: 2015, engine: 'V6', color:'black aluminum'},
    {model:'Land Cruiser', year: 2009, engine: 'V10', color:'silver chrome'},
    {model:'XC90', year: 2017, engine: 'V8', color:'white'},
    {model:'Outback', year: 2011, engine: 'V6', color:'black chrome'},
    {model:'Camaro', year: 2016, engine: 'V12', color:'yellow'},
];
console.log(cars);
console.log(arr);
*/


/*6*/

/*
let cities = ['name', 'populations', 'county', 'region'];
let arrCity = [
    {name:'Kyiv', populations:1000000, country: 'Ukraine', region:'Kyivska obl.'},
    {name:'Lviv', populations:7000000, country: 'Ukraine', region:'Lvivska obl.'},
    {name:'Poltava', populations:550000, country: 'Ukraine', region:'Poltavska obl.'},
    {name:'Lutsk', populations:200000, country: 'Ukraine', region:'Volyn obl.'},
];
console.log(cities);
console.log(arrCity);
*/


/*7*/

/*let cars = ['brand', 'model', 'year', 'engine', 'color'];
let arrCars = [
    cars,
    {brand: 'Mercedes-Benz', model: 'GLK', year: 2015, engine: 'V6', color: 'white'},
    {brand: 'Ford', model:'Fusion', year: 2016, engine: 'V6', color:'silver'
    ,driver: {name: 'Sebastian', age:37, sex: 'male', experince: '12 years'}},
];

console.log('Object.keys');
const driver = Object.keys('driver');
console.log(arrCars);*/

/*8*/

/*let cars = [
    {model:'GLK', year: 2015, engine: 'V6', color:'white'},
    {model:'Canadian', year: 1956, engine: 'V8', color:'black'},
    {model:'Fusion', year: 2016, engine: 'V6', color:'silver'},
    {model:'Passat', year: 2014, engine: 'V10', color:'red'},
    {model:'X5', year: 2013, engine: 'V6', color:'blue'},
    {model:'SuperB', year: 2015, engine: 'V6', color:'black aluminum'},
    {model:'Land Cruiser', year: 2009, engine: 'V10', color:'silver chrome'},
    {model:'XC90', year: 2017, engine: 'V8', color:'white'},
    {model:'Outback', year: 2011, engine: 'V6', color:'black chrome'},
    {model:'Camaro', year: 2016, engine: 'V12', color:'yellow'},
];
let  i = 0;
while (i < cars.length){
    console.log(cars[i]);
    i++;
}*/

/*9*/

/*
let city = ['name', 'populations', 'county', 'region'];
let cities = [
    {name:'Kyiv', populations:1000000, country: 'Ukraine', region:'Kyivska obl.'},
    {name:'Lviv', populations:7000000, country: 'Ukraine', region:'Lvivska obl.'},
    {name:'Poltava', populations:550000, country: 'Ukraine', region:'Poltavska obl.'},
    {name:'Lutsk', populations:200000, country: 'Ukraine', region:'Volyn obl.'},
];

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    console.log(cities[i]);
}


*/

/*10*/

/*let car = ['brand', 'model', 'year', 'engine', 'color'];
let cars = [
    car,
    {brand: 'Mercedes-Benz', model: 'GLK', year: 2015, engine: 'V6', color: 'white'},
    {brand: 'Ford', model:'Fusion', year: 2016, engine: 'V6', color:'silver'
        ,driver: {name: 'Sebastian', age:37, sex: 'male', experince: '12 years'}},
];

for (const car of cars) {
    console.log(car);

}*/

/*11*/

/*
let man = {
    name: 'Andrew',
    age: 27,
    gender: 'male',
};

let wom = {
    surname: 'Savina',
    hair: 'blonde',
    home: 'Lviv',
};

let senior = {
    status: 'boss',
    live: 'Odessa',
    maritalSts: 'divorced',
};

let google = {
    company: 'Google',
    industry: 'software',
    headquarters: 'California U.S.',
};

let web = {
    fullName: 'Shevchenko Anriy Mykolayovych',
    job: 'Designer',
    skills: 'Photoshop',
};

let manJson = JSON.stringify(man);
console.log(`myJson`);
console.log(manJson);
myJson = JSON.parse(manJson);

let womJson = JSON.stringify(wom);
console.log(`myJson`);
console.log(womJson);
myJson = JSON.parse(womJson);

let seniorJson = JSON.stringify(senior);
console.log(`myJson`);
console.log(seniorJson);
myJson = JSON.parse(seniorJson);

let googleJson = JSON.stringify(google);
console.log(`myJson`);
console.log(googleJson);
myJson = JSON.parse(googleJson);

let webJson = JSON.stringify(web);
console.log(`myJson`);
console.log(webJson);
myJson = JSON.parse(webJson);
*/

/*12*/

/*let man = {
    name: 'Andrew',
    age: 27,
    gender: 'male',
};

let manJson = JSON.stringify(man);
console.log(`myJson`);
console.log(manJson);
myJson = JSON.parse(manJson);
console.log(`manJson man`);
console.log(man);*/

/*13*/

/*let cars = ['Mercedes-Benz', 'Pontiac', 'Ford', 'VW', 'BMW', 'Skoda', 'Toyota', 'Volvo', 'Subaru', 'Chevrolet'];
let car = [
    {model:'GLK', year: 2015, engine: 'V6', color:'white'},
    {model:'Canadian', year: 1956, engine: 'V8', color:'black'},
    {model:'Fusion', year: 2016, engine: 'V6', color:'silver'},
    {model:'Passat', year: 2014, engine: 'V10', color:'red'},
    {model:'X5', year: 2013, engine: 'V6', color:'blue'},
    {model:'SuperB', year: 2015, engine: 'V6', color:'black aluminum'},
    {model:'Land Cruiser', year: 2009, engine: 'V10', color:'silver chrome'},
    {model:'XC90', year: 2017, engine: 'V8', color:'white'},
    {model:'Outback', year: 2011, engine: 'V6', color:'black chrome'},
    {model:'Camaro', year: 2016, engine: 'V12', color:'yellow'},
];

for (let i = 0; i < car.length; i++) {
    const cars = car[i];
    console.log(JSON.stringify(cars));
}*/

/*14*/

/*let cities = ['name', 'populations', 'county', 'region'];
let arrCity = [
    {name:'Kyiv', populations:1000000, country: 'Ukraine', region:'Kyivska obl.'},
    {name:'Lviv', populations:7000000, country: 'Ukraine', region:'Lvivska obl.'},
    {name:'Poltava', populations:550000, country: 'Ukraine', region:'Poltavska obl.'},
    {name:'Lutsk', populations:200000, country: 'Ukraine', region:'Volyn obl.'},
];
for (let i = 0; i < arrCity.length; i++) {
    const cities = arrCity[i];
    console.log(JSON.stringify(cities));
}*/

/*15*/

/*let cars = ['brand', 'model', 'year', 'engine', 'color'];
let arrCars = [
    cars,
    {brand: 'Mercedes-Benz', model: 'GLK', year: 2015, engine: 'V6', color: 'white'},
    {brand: 'Ford', model:'Fusion', year: 2016, engine: 'V6', color:'silver'
        ,driver: {name: 'Sebastian', age:37, sex: 'male', experince: '12 years'}},
];
let emptyArray = [];
for (let i = 0; i < arrCars.length; i++) {
    const cars = arrCars[i];
    emptyArray.push(JSON.stringify(cars));
}
console.log(emptyArray);*/

/*16*/

/*
let users = [
    {name: 'Alla', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'Mike', age: 29, status: true, skills: ['mysql', 'mongo']},
    {name: 'Anna', age: 28, status: false, skills: ['java', 'js']},
    {name: 'Mark', age: 30, status: true, skills: ['mysql', 'mongo']}
];

for (const keyUser in users) {
    for (const keySkill in users[keyUser].skills) {
            console.log(users[keyUser].skills[keySkill]);
    }
}
*/


/*17*/

/*let users = [
    {name: 'Alla', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'Mike', age: 29, status: true, skills: ['mysql', 'mongo']},
    {name: 'Anna', age: 28, status: false, skills: ['java', 'js']},
    {name: 'Mark', age: 30, status: true, skills: ['mysql', 'mongo']}
];

let emptyArr = [];
for (const user of users) {
    console.log('Name : ',user.name);
    for (const skill of user.skills) {
        emptyArr.push(skill);
    }
}
    console.log(emptyArr);*/

/*18*/

/*let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];

for (const user of users) {
    console.log(user.name);
    for (const skill of user.skills) {
        console.log(skill);
    }
}*/

/*19*/

/*let users = [{
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

let emptyArray = [];
for (const user of users) {
    emptyArray.push(user.address)
}
console.log(emptyArray);*/

/*20*/

/*let users = [{
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

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const div = document.createElement('div');
    div.innerText = `${user.name} ${user.age} ${user.status} ${user.address}`;
    document.body.appendChild(div);

};*/

/*21*/

/*let users = [{
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

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const div = document.createElement('div');
    let address = '';
    for (const x in user.address) {
        address = address + ' ' + user.address[x];
    }
    div.innerText = `${user.name} ${user.age} ${user.status} ${address}`;
    document.body.appendChild(div);
}*/

/*22*/

/*
let users = [{
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

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const h2 = document.createElement('h2');
    const h1 = document.createElement('h1');
    let address = '';
    for (const x in user.address) {
        address = address + ' ' + user.address[x];
    }
    div.innerText = user.name;
    h3.innerText = user.age;
    h2.innerText = user.status;
    h1.innerText = address;

    div.appendChild(h3);
    div.appendChild(h2);
    div.appendChild(h1);
    document.body.appendChild(div);
    console.log(div);
}
*/

/*23*/

/*let users = [{
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

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const div = document.createElement('div');
    const h6 = document.createElement('h6');
    const h5 = document.createElement('h5');
    const address = document.createElement('div');
    for (const item in user.address) {
        const divka = document.createElement('div');
        divka.innerHTML = user.address[item];
        address.appendChild(divka)

    }

    div.innerText = user.name;
    h6.innerText = user.age;
    h5.innerText = user.status;

    div.appendChild(h6);
    div.appendChild(h5);
    div.appendChild(address);
    document.body.appendChild(div);
    console.log(div);
}*/

/*24*/

/*
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

for (const users of usersWithId) {
    for (const cities of citiesWithId) {
        if(users.id === cities.user_id){
            users.address = cities;
        }
    }
}
console.log(usersWithId);
*/

/*25*/

/*const elementById = document.getElementById('content');
const innerText = elementById.innerText;
console.log(innerText);*/


/*const elementByClassName = document.getElementsByClassName('rules rule1');
for (const element of elementByClassName) {
    console.log(element);
};*/

/*
const elementByClassName = document.getElementsByTagName('p');
for (const element of elementByClassName) {
     console.log(elementByClassName);
}
*/

/*26*/

/*const elements = document.getElementsByTagName('h2');
for (const element of elements) {
    element.style.width = '200px';
    element.style.height = '200px';
    element.style.color = 'red';
    console.log(elements);
}*/

/*27*/

/*let table = document.createElement('table');

const tr = document.createElement('tr');
const td1 = document.createElement('td1');
const td2 = document.createElement('td2');
const td3 = document.createElement('td3');
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table.appendChild(tr);

document.body.appendChild(table);*/

/*28*/

/*let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
const tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);*/

/*29*/

/*let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);*/

/*30*/

/*let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        for (let i = 0; i < 10; i++) {
            const tr = document.createElement('tr');
            for (let i = 0; i < 5; i++) {
                const td = document.createElement('td');
                tr.appendChild(td);
            }
        }
    }
    table.appendChild(tr);
}
document.body.appendChild(table);*/

/*31*/

/*1:38:30
let table = document.createElement('table');

for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        for (let i = 0; i < 6; i++) {
            const tr = document.createElement('tr');
            for (let i = 0; i < 3; i++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                let num1 = prompt('Enter first number');
                let num2 = prompt('Enter second number');
                if ((num1 === 6), num2 === 3);
                document.write(num1);
                document.write(num2);

            }
        }
    }
    table.appendChild(tr);
}
document.body.appendChild(table);*/


/*32*/

/*
document.addEventListener("DOMContentLoaded", function(event){});
*/





/*33*/

/*const elementsByTagName = document.getElementsByTagName('*');
for (let tag of elementsByTagName) {
    if (tag.getAttribute('id')){
        console.log(tag);
    }
}*/

/*34*/

/*const elementsByTagName = document.getElementsByTagName('p');
for (let tag of elementsByTagName) {
    tag.innerText = 'hello oktenweb!';
        console.log(tag);
}*/

/*35*/

/*const elementsByTagName = document.getElementsByTagName('div');
for (let tag of elementsByTagName) {
    tag.style.color = 'red';
    console.log(tag);
}*/

/*36*/

/*let rules = [
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

const arrH2 = document.getElementsByTagName('h2');
const content = document.getElementById('content');
const ul = document.createElement('ul');
for (const h2 of arrH2) {
    const li = document.createElement('li');
    li.innerText = h2.innerText;
    ul.appendChild(li);
}
content.appendChild(ul);*/

/*37*/

/*let rules = [
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

const wrap = document.createElement('div');
wrap.id = 'wrap';
for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    div.className = `rules rule${i+1}`;
    h2.innerText = rule.title;
    p.innerText = rule.body;

    div.appendChild(h2);
    div.appendChild(p);
    wrap.appendChild(div);
}
document.body.appendChild(wrap);*/

/*38*/

/*let users = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(r=> r.json())
    .then(result => {
     console.log(result);
    })
console.log(users);
console.log('test');*/





























































































































































































