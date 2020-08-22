/*
Function adalah sub-program yang bisa digunakan kembali baik di 
dalam program itu sendiri, maupun di program yang lain.
Fungsi di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method.

Ada 4 cara yang bisa kita lakukan untuk membuat function di Javascript:

Menggunakan cara biasa;
Menggunakan ekspresi;
Menggunakan tanda panah (=>);
dan menggunakan Constructor.
*/

/*
1. contoh function dengan nama salam yang menerima parameter nama, 
lalu me-return console.log dengan isi “Halo nama, selamat pagi!”*/
let x = myFunction("Alivi Milova");

function myFunction(nama){
    return console.log("Halo "+ nama+ ", selamat pagi !");
}

/*
2. fungsi dengan nama tambah, yang menerima parameter bilanganPertama dan bilanganKedua, 
lalu me-return hasil penjumlahan dari kedua parameter tersebut.
*/
let y = tambah(7, 9);
function tambah (p1, p2){
    return p1 + p2;
}
console.log(y);

/*
3.Arrow Function dengan nama penjelasanArrowFunction, tidak memiliki parameter, 
dan me-return console.log berisi penjelasan tersebut
*/
let penjelasanArrowFunction = () => {
    return console.log("Arrow function adalah sintak penulisan function yang bisa dibilang lebih singkat, yaitu dengan menggunakan token =>,function yang dideklarasikan menggunakan panah ini bersifat anonim");
}
penjelasanArrowFunction();

/*
4.Arrow Function dengan nama perkalian, yang menerima parameter bilanganPertama 
dan bilanganKedua, lalu me-return hasil perkalian dari kedua parameter tersebut.
*/
let perkalian = (angka1, angka2) => {return angka1*angka2};
console.log(perkalian(7,9));

