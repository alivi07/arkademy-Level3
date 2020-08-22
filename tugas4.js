/* Condition di JavaScript ada 6 :
1. if
2. if else
3. if else if
4. switch case
5. Percabangan dengan Operator Ternary
Percabangan menggunakan opreator ternary merupakan bentuk lain dari percabangan if/else.
6. Percabangan Bersarang (Nested)
Kita juga dapat membuat blok percabangan di dalam percabangan. Ini disebut percabangan bersarng atau nested if.
*/

var cek = cekParameter("Alivi Milova");

function cekParameter(nama){
    if(nama!=null){
        return console.log('Ini parameternya '+ nama);
    }else{
        console.log("tidak ada parameter");
    }
}




