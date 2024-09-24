// // rekursi adalah sebuah fungsi yang memanggil dirinya sendiri
// function tampilanAngka(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);

  
//   tampilanAngka(n - 1);
// }

// tampilanAngka(10);

// function panggilTama10Kali(nama){
//   // base case
//   if(nama === 10){
//     return
//   }
//   console.log('ilham')
//   panggilTama10Kali(nama + 1)
// }

// panggilTama10Kali(0)


// faktorial
function tambah(){
  let a = 0
  for(let i = 0; i < arguments.length; i++){
    a += arguments[i]
  }
  return a
}

const hasil = tambah(1,2,3)
console.log(hasil)

