"use strict";
var a = 5;
console.log(a);
a = 785;
console.log(a);
var username = 'Vardenis';
username = '';
var gimimoMetai = 2020;
gimimoMetai = parseInt('1900');
gimimoMetai = 2000;
gimimoMetai = +'2000';
var arVedes = true;
var inputArVedesReiksme = 'false';
arVedes = inputArVedesReiksme === 'true';
console.log(inputArVedesReiksme);
console.log(arVedes);
function sumavimas(a, b) {
    return '' + (a + b);
}
var suma1 = +sumavimas(7, 4);
console.log(suma1);
var suma2 = parseFloat(sumavimas(5, 88));
console.log(suma2);
var luckyNumber = 7;
luckyNumber = 'seven';
var pazymiai = [10, 2, 8, 4];
var petriukas = {
    name: 'Petriukas',
    age: 9,
    marks: [2, 4, 6],
};
var maryte = {
    name: 'Maryte',
    age: 10,
    marks: [9, 7, 5],
};
var wanda = {
    name: 'Wanda',
    age: 10,
    marks: [7, 8]
};
var antraKlase = [petriukas, maryte, wanda];
