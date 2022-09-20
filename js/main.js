let str = 'Dima Kolya Dima Tanya Vova Igor Vova Dima';
let count = 0;
let subStr = (prompt('Введите имя для поиска: Dima Kolya Tanya Vova Igor'));
let pos = str.toLowerCase().indexOf( subStr.toLowerCase() );

while (pos !== -1) {
    count++;
    pos = str.toLowerCase().indexOf(subStr.toLowerCase(), pos + 1);
    if (count >= 1) {
        countSubStr();
    } else {
        alert ('Не найдено совпадений(((');
    }
}

function countSubStr() {

    if (count >= 1) {
        alert ('Найдено совпадений: ' + count);
    }
}

console.log(count);

