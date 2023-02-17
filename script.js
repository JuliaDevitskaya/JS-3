// 1. Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function exponentiation(numberA, numberB, degree) {
    console.log(Math.pow(numberA,degree)+Math.pow(numberB,degree))
}
const numberA = Number(prompt('Введите первое число'));
const numberB = Number(prompt('Введите второе число'));
const degree = Number(prompt('Введите степень числа'));
console.log(exponentiation(numberA, numberB, degree));


// 2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function check (number) {
    if(isNaN(number)) {
        alert('Введите число!');
    }
}
const salaryTaxFree = number => number * 0.87; 
    
const number = Number(prompt('Введите размер вашей зароботной платы'));
console.log(check(number));
console.log(`Размер заработной платы за вычетом налогов равен ${salaryTaxFree(number)}`);


// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function getMaxNumber(maxA, maxB, maxC) {
    let max = maxA;
    if(maxB>max) max = maxB;
    if(maxC>max) max = maxC;
    console.log(`Даны числа ${maxA}, ${maxB}, ${maxC}. Максимальное среди них - ${max}`);    
}
let maxA = Number(prompt('Введите первое число'));
let maxB = Number(prompt('Введите второе число'));
let maxC = Number(prompt('Введите третье число'));
getMaxNumber(maxA, maxB, maxC);


// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (a,b) => a + b;
const sumNumA = Number(prompt('Введите первое число'));
const sumNumB = Number(prompt('Введите второе число'));
console.log(`Сумма чисел ${sumNumA} и ${sumNumB} равна ${sum(sumNumA,sumNumB)}`);


function diff(a, b) {
    if (a > b) {
        return a -b;
    } else {
        return b - a;
    }
}
const diffNumA = Number(prompt('Введите первое число'));
const diffNumB = Number(prompt('Введите второе число'));
console.log(`Разность чисел ${diffNumA} и ${diffNumB} равна ${diff(diffNumA,diffNumB)}. Из большего вычитаем меньшее.`);


const multiplication = (a, b) => a * b;
const multNumA = Number(prompt('Введите первое число'));
const multNumB = Number(prompt('Введите второе число'));
console.log(`Произведение чисел ${multNumA} и ${multNumB} равно ${multiplication(multNumA,multNumB)}`);


const division = (a, b) => a / b;
const divNumA = Number(prompt('Введите первое число'));
const divNumB = Number(prompt('Введите второе число'));
console.log(`Разность чисел ${divNumA} и ${divNumB} равна ${division(divNumA,divNumB)}`);