// linkup varibel
//  javascript tidak menganut block scope melainkan function scope!!!
let a = 10; //ini adalah variabel global scope
console.log(a);

// kita bisa akses variabel di luar function
function tes(){
  let a = 20;
  console.log(a);
}

tes();

// tidak bisa akses variabel di luar function
function tes2(){
  let a = 20;
}
console.log(a);

tes2();
console.log('---------------------------------------')

let x = 1;
function tes4(x){
  console.log(x, 'di luar function')
}

tes4(x)
console.log(x, 'di dalam function')