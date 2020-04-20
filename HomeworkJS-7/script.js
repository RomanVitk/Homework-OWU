/*1*/

/*const div = document.createElement('div');
const text = document.getElementById('Text');
const button = document.getElementById('hideButton');
div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
button.onclick = ev => {
        if (text.hidden !== false && true) {
            text.hidden = false
        }else{
            text.hidden = true
        }
}*/


/*2*/

/*const button = document.getElementById('hideButton');
button.onclick = hide => {
    button.style.display = 'none'
}*/


/*3*/

/*const button = document.getElementById('hideButn');
button.onclick = output => {
const getInput = document.getElementById('Input');
const value = getInput.value;
    if (value < 18 && value > 0) {
        alert('Too young!')
    }
    if (value > 17 && value > 0) {
        console.log(value);
    }
}*/


/*4*/

/*const attribute = document.getElementById('attribute');
const mainMenu = document.getElementById('mainMenu');
let openClose = false;
attribute.onclick = ev => {
    if (openClose) {
        mainMenu.style.display = 'none';
        openClose = false;
    }else {
        mainMenu.style.display = 'block';
        openClose = true;
    }
}*/


/*5*/


/*let array = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
]

const content = document.getElementById('content');
array.forEach(item => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.innerText = 'Hide'
    h2.innerText = item.title;
    p.innerText = item.body;
    button.onclick = () => {
        p.hidden
        ? p.hidden = false
        : p.hidden = true
    }
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
    content.appendChild(div);
})*/


/*6*/

/*const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const button = document.getElementById('button');
button.onclick = () => {
    console.log(document.forms.form0.input1.value);
    console.log(document.forms.form0.input2.value);
    console.log(document.forms.form1.input3.value);
    console.log(document.forms.form1.input4.value);
}*/


/*7*/

/*const content = document.getElementById('content');
function generateTable(line, cell, tag,) {
const tableElement = document.createElement('table');
    for (let i = 0; i < line; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cell; j++) {
            const td = document.createElement('td');
            td.innerText = i +""+ j;
            tr.appendChild(td);
        }
        tableElement.appendChild(tr);
    }
    tag.appendChild(tableElement);
}
generateTable(8, 4, content)*/


/*8*/

/*const content = document.getElementById('content');
function generateTable(line, cell, tag,) {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const button = document.getElementById('button');
    button.onclick = () => {
        console.log(document.forms.form.input1.value);
        console.log(document.forms.form.input2.value);
        console.log(document.forms.form.input3.value);
const tableElement = document.createElement('table');
    for (let i = 0; i < line; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cell; j++) {
            const td = document.createElement('td');
            td.innerText = i +""+ j;
            tr.appendChild(td);
        }
        tableElement.appendChild(tr);
    }
    tag.appendChild(tableElement);
    }
}
generateTable(8, 4, input1, input2, input3, content)*/

/*9*/

/*let imgArr = [
    {
        id: 1,
        img_url: 'mobile-phone.png'
    },
    {
        id: 2,
        img_url: 'nokia.png'
    },
    {
        id: 3,
        img_url: 'nokia-mobile.png'
    },
    {
        id: 4,
        img_url: 'nokia-phone.png'
    }
];
    const content = document.getElementById('content');
    const img = document.createElement('img');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');

    button1.innerText = 'Left'
    button2.innerText = 'Right'
    let index = 0;
    img.width = 250;

    img.src = imgArr[index].img_url;
    content.appendChild(img);
    content.appendChild(button1);
    content.appendChild(button2);

    button1.onclick = () => {
        if (index - 1 < 0 && index === imgArr.length - 1) {
            index = 0
        }else index = index - 1
        img.src = imgArr[index].img_url
    }

    button2.onclick = () => {
        if (index + 1 > 0 && index === imgArr.length - 1) {
            index = 0
        }else index = index + 1
        img.src = imgArr[index].img_url;
}*/


/*10*/


/*11*/


/*12*/

/*const content = document.getElementById('content');
const wrap = document.getElementById('wrap');
const h2 = document.getElementsByTagName("h2");
const ul = document.createElement('ul');

for (let i = 0; i < h2.length; i++) {
    const li = document.createElement('li');
    const attribute = document.createElement('a');
    let anchor = 'anchor'+ i
    attribute.href = '#'+ anchor;
    h2[i].setAttribute('id', anchor);
    attribute.innerHTML = h2[i].innerText;
    li.appendChild(attribute);
    ul.appendChild(li);
}
content.appendChild(ul);
content.style.float = 'left';
wrap.style.float = "left";*/


/*13*/

/*let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

const content = document.getElementById('content');
const divElement = document.createElement('div');
divElement.appendChild(filterContent(usersWithAddress));

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const mark1 = document.createElement('mark');
const mark2 = document.createElement('mark');
const mark3 = document.createElement('mark');

const button = document.createElement('button');
mark1.innerText = 'False'
mark2.innerText = 'Your age 29'
mark3.innerText = 'city of Kyiv'
button.innerText = 'Filter'
input1.type = 'checkbox'
input2.type = 'checkbox'
input3.type = 'checkbox'

content.appendChild(divElement)
content.appendChild(mark1)
content.appendChild(input1)
content.appendChild(mark2)
content.appendChild(input2)
content.appendChild(mark3)
content.appendChild(input3)
content.appendChild(button)

button.onclick = clickFilter => {
    let arr = JSON.parse(JSON.stringify(usersWithAddress));
    if (input1.checked) arr = arr.filter(value => !value.status);
    if (input2.checked) arr = arr.filter(value => value.age >= 29);
    if (input3.checked) arr = arr.filter(value => value.address.city === 'Kyiv');

    divElement.innerHTML = '';
    divElement.appendChild(filterContent(arr));
}


function filterContent(array) {
    const block = document.createElement('div');
    array.forEach(item => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.innerText = item.name;
        div.innerHTML = JSON.stringify(item);
        div.appendChild(h4);
        block.appendChild(div);

    })
    return block;
}*/























































































































