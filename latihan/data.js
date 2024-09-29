// //  * TODO
// //  * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
// //  *    - Memiliki properti bernama "name"
// //  *       - Bertipe data string
// //  *       - Bernilai "Bakso Mang Dicoding".
// //  *    - Memiliki properti bernama "city"
// //  *       - Bertipe data string
// //  *       - Bernilai "Bandung".
// //  *    - Memiliki properti "favorite drink"
// //  *       - Bertipe data string
// //  *       - Bernilai "Es Teh".
// //  *    - Memiliki properti "favorite food"
// //  *       - Bertipe data string
// //  *       - Bernilai "Bakso".
// //  *    - Memiliki properti "isVegan"
// //  *       - Bertipe data boolean
// //  *       - Bernilai false.

// let restaurant = {
//   name : "Bakso Mang Dicoding",
//   city : "Bandung",
//   'favorite drink': "Es Teh",
//   'favorite food': "Bakso",
//   isvegan : false
// }

// //  *
// //  * 2. Buatlah variabel bernama name.
// //  *    Kemudian isi dengan nilai name dari properti object restaurant

// let name = restaurant.name
// console.log(name)
// //  * 3. Buatlah variabel bernama favoriteDrink.
// //  *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant

// let favoriteDrink = restaurant['favorite drink']
// console.log(favoriteDrink)
// //  */

// const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
// const hasil = myMap.get('a')
// console.log(hasil)

// const arr = ['apple', ...['banana']]
// console.log(arr)

// setTimeout(()=> {

// })

// function checkGrades(grades) {
//   for (let i = 0; i < grades.length; i++) {
//     if (typeof grades[i] !== 'number') {
//       throw new Error('Invalid input. Please provide an array of numbers.');
//     }

//     const grade = grades[i];
//     console.log('tes',grade)
//     let predicate;

//     if (grade >= 90) {
//       predicate = 'A';
//     } else if (grade >= 80) {
//       predicate = 'B';
//     } else if (grade >= 70) {
//       predicate = 'C';
//     } else if (grade >= 60) {
//       predicate = 'D';
//     } else {
//       predicate = 'E';
//     }

//     console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
//   }
// }

// try {
//   const studentGrades = [95, 85, 65, 80, 70];
//   checkGrades(studentGrades);
// } catch (e) {
//   console.error(e);
// }

// function untuk mengecek nama

function cekNama(arrNama) {
  for (let i = 0; i < arrNama.length; i++) {
    if (typeof arrNama[i] === "number") {
      throw new Error("tolong masukan string bukan angka");
    }

    const hasil = arrNama[i];
    let namaKeluar;

    if (hasil == "ilham") {
      namaKeluar = "nama terdaftar";
    }
    console.log('mulai')
    console.log('nama ', i + 1, hasil, namaKeluar)
  }
  return 'proses selesai'
}



const arrr = ['ilham', 'rendi']
console.log(cekNama(arrr))


