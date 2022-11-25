i=0;
a=0;
clicks=0;
otvet=0;
const questions = new Array (
'Сколько спутников у Марса?',
'Самый большой вулкан Солнечной системы называется «Гора Олимп». Где он находится?',
'Какая планета ближе всех расположена к Солнцу?',
'Большое красное пятно на Юпитере, что это?',
'Из чего в основном состоит Солнце?'
);
const answers = new Array (
'13','2','50','1',
'Юпитер','Земля','Венера','Марс',
'Земля','Венера','Меркурий','Нептун',
'Вулкан','Озеро','Буря','Кратер',
'Жидкая лава','Расплавленный метал','Газ','Камень'
);

// обработка кнопки старт
const button = document.querySelector('#button');
button.addEventListener('click', function () {
    const userName = document.querySelector('input').value;
    if (userName==='') {
        alert ('Введите имя!')
    }
    else {
    document.querySelector('.victorina').style.display='flex';
    document.getElementById('userName').innerHTML=`Привет ${userName}!`;
    document.querySelector('.hello').innerHTML= 'Ответь на 5 вопросов';
    document.querySelector('.question1').style.display='contents';
    document.querySelector('.question').innerHTML= questions[0];
    document.querySelector('.ans1').innerHTML = answers [0];
    document.querySelector('.ans2').innerHTML = answers [1];
    document.querySelector('.ans3').innerHTML = answers [2];
    document.querySelector('.ans4').innerHTML = answers [3];
    document.querySelector('.parent').style.display='none';
    }
})


// обработка события кнопки ответить 
const next = document.querySelector('#next');
next.addEventListener('click', function() {
    document.getElementById('userName').innerHTML=``;
clicks++;
if (clicks<questions.length) {
i++;
a=a+4;
if (document.querySelector('#answer1').checked===false && document.querySelector('#answer2').checked===false && document.querySelector('#answer3').checked===false && document.querySelector('#answer4').checked===false) {
    alert ('Вы не выбрали ответ!');
    return next();
}
document.querySelector('.question').innerHTML= questions[i];
document.querySelector('.ans1').innerHTML = answers [a];
document.querySelector('.ans2').innerHTML = answers [a+1];
document.querySelector('.ans3').innerHTML = answers [a+2];
document.querySelector('.ans4').innerHTML = answers [a+3];
if (clicks===1 && document.querySelector('#answer2').checked===true) {otvet++;}
if (clicks===2 && document.querySelector('#answer4').checked===true) {otvet++;}
if (clicks===3 && document.querySelector('#answer3').checked===true) {otvet++;}
if (clicks===4 && document.querySelector('#answer3').checked===true) {otvet++;}
document.querySelector('#answer1').checked=false;
document.querySelector('#answer2').checked=false;
document.querySelector('#answer3').checked=false;
document.querySelector('#answer4').checked=false;
}
else {
    if (clicks===5 && document.querySelector('#answer3').checked===true) {otvet++;}
    document.querySelector('.victorina').style.display='none';
    document.querySelector('.otvet').innerHTML=otvet;
    document.querySelector('.goodbye').style.display='flex';
    if (otvet===0)
    {document.querySelector('.verdict').innerHTML='ПОЗОР!';}
    if (otvet>=1 && otvet<=3)
    {document.querySelector('.verdict').innerHTML='Слабовато!';}
    if (otvet===4)
    {document.querySelector('.verdict').innerHTML='Молодец!';}
    if (otvet===5)
    {document.querySelector('.verdict').innerHTML='Ты настоящий Стивен Хокинг!';}
}
})
