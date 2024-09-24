let noAngkot = 1;
let jumlahAngkot = 10;
let angkotBeroperasi = 6;

for(noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
  if(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else if(noAngkot === 7){
    console.log('Angkot No. ' + noAngkot + ' sedang liburan');
  }else{
    console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.');
  }
}