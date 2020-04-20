/*1*/
/*function Tag(titleTag, action, arrayAttrs) {
    this.titleTag = titleTag || 'No Title';
    this.action = action || 'No Action';
    this.arrayAttrs = arrayAttrs || [];
}*/

/*let title = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
    {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
    {titleOfAttr: 'hreflang', actionOfAttr: 'Идентифицирует язык текста по ссылке.'},
    {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
    {titleOfAttr: 'rel', actionOfAttr: 'Отношения между ссылаемым и текущим документами.'},
    {titleOfAttr: 'rev', actionOfAttr: 'Отношения между текущим и ссылаемым документами.'},
    {titleOfAttr: 'shape', actionOfAttr: 'Задает форму активной области ссылки для изображений.'},
    {titleOfAttr: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между ссылками при нажатии на кнопку Tab.'},
    {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'},
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'},
    {titleOfAttr: 'type', actionOfAttr: 'Указывает MIME-тип документа, на который ведёт ссылка.'},
];*/


/*let title = '<div>';
let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let attributes = [
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
];*/


/*
let title = '<h1>';
let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
let attributes = [
    {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
];
*/


/*let title = '<span>';
let action = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
    {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента.'},
    {titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'},
];*/


/*
let title = '<input>';
let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
let attributes = [
    {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
    {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает или отключает автозаполнение.'},
    {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения.'},
];
*/


/*let title = '<form>';
let action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
let attributes = [
    {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
    {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
    {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'},
];*/


/*let title = '<option>';
let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let attributes = [
    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
    {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
    {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
    {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
];*/


/*let title = '<select>';
let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
    {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
    {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
    {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
];*/


/*let a = new Tag(title, action, attributes);
console.log(a);*/
/*let div = new Tag(title, action, attributes);
console.log(div);*/
/*let h1 = new Tag(title, action, attributes);
console.log(h1);*/
/*let span = new Tag(title, action, attributes);
console.log(span);*/
/*let input = new Tag(title, action, attributes);
console.log(input);*/
/*let form = new Tag(title, action, attributes);
console.log(form);*/
/*let option = new Tag(title, action, attributes);
console.log(option);*/
/*let select = new Tag(title, action, attributes);
console.log(select);*/

/*2*/

/*class Tag {
    constructor(titleTag, action, arrayAttrs){
    this.titleTag = titleTag || 'No Title';
    this.action = action || 'No Action';
    this.arrayAttrs = arrayAttrs || [];
    }
}*/

/*
let title = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
];

const obj = {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'};
const obj1 = {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'};
const obj2 = {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'};

let a = new Tag();
console.log(a);
a.titleTag = title;
a.action = action;
a.arrayAttrs.push(obj, obj1, obj2);
console.log(a);
*/


/*let title = '<div>';
let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let attributes = [
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
];

const obj = {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'};
const obj1 = {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'};


let div = new Tag();
console.log(div);
div.titleTag = title;
div.action = action;
div.arrayAttrs.push(obj, obj1);
console.log(div);*/


/*let title = '<h1>';
let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let attributes = [
    {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
];

const obj = {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'};
const obj1 =     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'};
const obj2 = {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'};


let h1 = new Tag();
console.log(h1);
h1.titleTag = title;
h1.action = action;
h1.arrayAttrs.push(obj, obj1, obj2);
console.log(h1);*/


/*let title = '<span>';
let action = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'},
    {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента.'},
    {titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'},
];

const obj = {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'};
const obj1 = {titleOfAttr: 'contenteditable', actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'};
const obj2 = {titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента.'};
const obj3 = {titleOfAttr: 'style', actionOfAttr: 'Применяется для определения стиля элемента с помощью правил CSS.'};


let span = new Tag();
console.log(span);
span.titleTag = title;
span.action = action;
span.arrayAttrs.push(obj, obj1, obj2, obj3);
console.log(span);*/


/*
let title = '<input>';
let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
let attributes = [
    {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
    {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает или отключает автозаполнение.'},
    {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения.'},
];

const obj = {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'};
const obj1 ={titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'};
const obj2 ={titleOfAttr: 'autocomplete', actionOfAttr: 'Включает или отключает автозаполнение.'};
const obj3 ={titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения.'};

let input = new Tag();
console.log(input);
input.titleTag = title;
input.action = action;
input.arrayAttrs.push(obj, obj1, obj2, obj3);
console.log(input);
*/


/*let title = '<form>';
let action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
let attributes = [
    {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
    {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
    {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'},
];

const obj = {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'};
const obj1 = {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'};
const obj2 = {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'};

let form = new Tag();
console.log(form);
form.titleTag = title;
form.action = action;
form.arrayAttrs.push(obj, obj1, obj2);
console.log(form);*/


/*
let title = '<option>';
let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let attributes = [
    {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
    {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
    {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
    {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
];

const obj = {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'};
const obj1 = {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'};
const obj2 =     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'};
const obj3 = {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'};

let option = new Tag();
console.log(option);
option.titleTag = title;
option.action = action;
option.arrayAttrs.push(obj, obj1, obj2, obj3);
console.log(option);
*/


/*let title = '<select>';
let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
    {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
    {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
    {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
];

const obj = {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'};
const obj1 = {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'};
const obj2 = {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'};
const obj3 = {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'};

let select = new Tag();
console.log(select);
select.titleTag = title;
select.action = action;
select.arrayAttrs.push(obj, obj1, obj2, obj3);
console.log(select);*/

/*3*/

/*let car = {
    brand: 'Mercedes-Benz',
    model: 'GLK',
    year: 2014,
    maxSpeed: 220,
    engine: 2.2,
    drive: function () {
        console.log(`їдемо зі швидкістю {maxSpeed} на годину`);
    },
    info: function () {
        if (this.driver) {
            console.log(`
            brand: ${this.brand},
            model: ${this.model},
            year: ${this.year},
            maxSpeed: ${this.maxSpeed},
            engine: ${this.engine},
            driver: ${this.driver.name},
            `);
        } else {
            console.log(`
            brand: ${this.brand},
            model: ${this.model},
            year: ${this.year},
            maxSpeed: ${this.maxSpeed},
            engine: ${this.engine},
            `);
        }
    }
    ,
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed += newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;

    },
    addDriver: function (driver) {
        this.driver = driver;

    },
};
let driver = {name: 'Sébastien Loeb', age: 46};
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(2015);
car.addDriver(driver);
console.log(car);*/


/*4*/

/*
let driver = {name: 'Sébastien Loeb', age: 46};

function Car(brand, model, year, maxSpeed, engine) {
    this.brand = brand || 'Mercedes-Benz';
    this.model = model || 'GLK';
    this.year = year || 2014;
    this.maxSpeed = maxSpeed || 220;
    this.engine = engine || 2.2;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        if (this.driver) {
            console.log(`
            brand: ${this.brand},
            model: ${this.model},
            year: ${this.year},
            maxSpeed: ${this.maxSpeed},
            engine: ${this.engine},
            driver: ${this.driver.name},
            `);
        } else {
            console.log(`
            brand: ${this.brand},
            model: ${this.model},
            year: ${this.year},
            maxSpeed: ${this.maxSpeed},
            engine: ${this.engine},
            `);
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;

    };

    this.addDriver = function (driver) {
        this.driver = driver;
    }
};

let car = new Car('Ford','Fusion', 2017, 190, 1.6);
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(2015);
car.addDriver(driver);
console.log(car);*/

/*5*/

/*let driver = {name: 'Sébastien Loeb', age: 46};

class Car {
    constructor(brand, model, year, maxSpeed, engine) {

        this.brand = brand || 'Mercedes-Benz';
        this.model = model || 'GLK';
        this.year = year || 2014;
        this.maxSpeed = maxSpeed || 220;
        this.engine = engine || 2.2;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        if (this.driver) {
            console.log(`
            brand: ${this.brand},
            model: ${this.model},
            year: ${this.year},
            maxSpeed: ${this.maxSpeed},
            engine: ${this.engine},
            driver: ${this.driver.name},
            `);
        } else {
            console.log(`
            brand: ${this.brand},
            model: ${this.model},
            year: ${this.year},
            maxSpeed: ${this.maxSpeed},
            engine: ${this.engine},
            `);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;

    };

    addDriver(driver) {
        this.driver = driver;
    }
};

let car = new Car('Ford', 'Fusion', 2017, 190, 1.6);
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.changeYear(2016);
car.addDriver(driver);
console.log(car);*/

/*6*/

/*class Cinderella{
    constructor(name, age, footSize) {
        this.name = name || 'No Name';
        this.age = age || 'No age';
        this.age = age || 'No age';
        this.footSize = footSize || 'No footSize';
    }
}


class Prince{
    constructor(name, age, shoesSize) {
        this.name = name || 'No Name';

        this.shoesSize = shoesSize || 'No shoesSize'
    }
    findCindirells(array){
        let find = null;
        for (const item of array) {
            if (item.footSize === this.shoesSize){
                find = item;
            }
        }
        if (find){
            console.log('"My Princess name" ' + find.name);
        }else{
            console.log('I not find my Princess');
        }

    }
}
let cinderella0 = new Cinderella('Yulia', 21, 35);
let cinderella1 = new Cinderella('Masha', 27, 37);
let cinderella2 = new Cinderella('Ania', 18, 34);
let cinderella3 = new Cinderella('Vika', 31, 37);
let cinderella4 = new Cinderella('Rita', 20, 34);
let cinderella5 = new Cinderella('Olia', 28, 36);
let cinderella6 = new Cinderella('Karina', 16, 35);
let cinderella7 = new Cinderella('Lena', 29, 38);
let cinderella8 = new Cinderella('Mira', 34, 34);
let cinderella9 = new Cinderella('Lesia', 22, 37);

let arrayCinderells = [cinderella0, cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9];

let prince = new Prince('Harry', 35, 34);
prince.findCindirells(arrayCinderells);*/


/*7*/

/*function Cinderella(name, age, footSize) {
    this.name = name || 'No Name';
    this.age = age || 'No age';
    this.footSize = footSize || 'No footSize';
}

function Prince(name, age, shoesSize) {
    this.name = name || 'No Name';
    this.age = age || 'No age';
    this.shoesSize = shoesSize || 'No shoesSize';


    this.findCindirells = function (array) {
        let find = null;
        find = array.find(item => item.footSize === this.shoesSize);

        find
            ? console.log('"My Princess name" ' + find.name)
            : console.log('I not find my Princess');

    }
}

let cinderella0 = new Cinderella('Yulia', 21, 35);
let cinderella1 = new Cinderella('Masha', 27, 37);
let cinderella2 = new Cinderella('Ania', 18, 34);
let cinderella3 = new Cinderella('Vika', 31, 37);
let cinderella4 = new Cinderella('Rita', 20, 34);
let cinderella5 = new Cinderella('Olia', 28, 36);
let cinderella6 = new Cinderella('Karina', 16, 35);
let cinderella7 = new Cinderella('Lena', 29, 38);
let cinderella8 = new Cinderella('Mira', 34, 34);
let cinderella9 = new Cinderella('Lesia', 22, 37);

let arrayCinderells = [cinderella0, cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9];

let prince = new Prince('Harry', 35, 34);

prince.findCindirells(arrayCinderells);
console.log(prince);*/






