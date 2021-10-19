// document.querySelector('h1').innerHTML = 'Good Bye';
var heading = document.firstElementChild.lastElementChild.firstElementChild;
console.log(heading);
heading.innerHTML = 'Good Bye';
heading.style.backgroundColor = 'green';
document.querySelector('input').click();
// --------3урок-----
document.getElementsByTagName('li');
// document.getElementsByTagName('li').style.collor = 'purple'; //даст ошибку потому что в массиве 3 елемента, и это массив поэтому не можем применить стили
document.getElementsByTagName('li')[2].style.collor = 'red';
console.log(document.getElementsByTagName('li').length);

console.log(document.getElementsByClassName('btn'));
document.getElementsByClassName('btn')[0].style.color = 'red';//изменить цвет
document.getElementById('title');
document.getElementById('title').innerHTML = 'Gooooood';
document.querySelector('h1');
document.querySelector('#title');
document.querySelector('.btn');
document.querySelector('li a');
document.querySelector('a');
document.querySelector('li.item');
document.querySelector('#list a');
document.querySelectorAll('#list .item');
document.querySelectorAll('#list .item')[2].style.color = 'blue';
document.querySelector('li a').style.collor = 'red'

//-------4урок---------


