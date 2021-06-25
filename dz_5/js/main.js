'use strict'


// while (true) {
//   let ans = prompt ('Are you 18 years old?');
//   if (ans == 'Yes' || ans == 'yes' || ans == 'YES') {
//     alert('Cool');
//     break;
//   }
//   else if (ans == 'no' || ans == 'NO' || ans == 'No') {
//     alert('bad');
//     break;
//   }
//   else alert('think better');
// }
function doMagic() {
    var btn = document.querySelector('.btn');   //  обращение по классу или другому селектору
    btn.onclick = function () {
        //let ul = document.querySelector('ul');
        document.querySelector('ul').classList.toggle('menu-clicked'); // вызов без объявления переенной
        var lis = document.querySelectorAll('.menu li'); // обращение ко всем li внутри  класса 'menu' и создание массива из них
        for(let i = 0; i < lis.length; i++) {
        // lis[i].classList.add('red');   //  чтение классов(стандартный метод) у каждого ли и добавление нового класса
            lis[i].classList.toggle('red');   //  то же самое но с переключателем
        // lis[i].classList.remove('red');   //  удаление класса 
        }
    }
}


function something () {
    var btn = document.getElementById('btn');   // обращение тольео по id
    btn.onclick = function () {
        alert('Kнопка кликнута');
    }
}

doMagic();



