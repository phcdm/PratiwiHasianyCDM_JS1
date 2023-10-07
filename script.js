// CONDITIONAL STATEMENT

// IF satu kondisi

let umur = 20;
if (umur >= 17){
    keterangan = "Anda adalah orang dewasa";
}
// console.log(keterangan)


// ELSE (IF dua kondisi)

let umur = 15
if (umur >= 17){
    keterangan = "Anda adalah orang dewasa";
} else{
    keterangan = "Anda bukan orang dewasa";
}
// console.log(keterangan)


// ELSE IF (IF tiga kondisi atau lebih)

let umur = 8;
if (umur >= 17){
    keterangan = "Anda adalah orang dewasa";
} else if (umur >= 12 && umur < 17){
    keterangan = "Anda adalah remaja";
} else{
    keterangan = "Anda adalah anak-anak";
}
// console.log(keterangan)

// NESTED IF

let umur = 18;
let punyaKTP = false;
if(umur >= 17){
    if(punyaKTP){
        keterangan = "Anda dapat melakukan pencoblosan";
    } else{
        keterangan = "Anda belum dapat melakukan pencoblosan";
    }
} else {
    keterangan = "Anda belum cukup umur !";
}
// console.log(keterangan)

// SWITCH CASE

let umur = 25;

switch (true) {
  case umur >= 4 && umur <= 6:
    keterangan = "Anda adalah siswa Pra Sekolah";
    break;
  case umur >= 7 && umur <= 11:
    keterangan = "Anda adalah siswa Sekolah Dasar";
    break;
  case umur >= 12 && umur <= 14:
    keterangan = "Anda adalah siswa Sekolah Menengah Pertama";
    break;
  case umur >= 15 && umur <= 17:
    keterangan = "Anda adalah siswa Sekolah Menengah Atas";
    break;
  case umur >= 18 && umur <= 21:
    keterangan = "Anda adalah mahasiswa Perguruan Tinggi";
    break;
  default:
    keterangan = "Anda telah menyelesaikan masa pendidikan";
}
// console.log(keterangan);



// LOOPING STATEMENT

// FOR STATEMENT

const name = ["Pratiwi", "Hasiany", "Celline", "Dyah", "Manurung"];

let text = "";
for (let i = 0; i < name.length; i++) {
  text += name[i] + "\n";
}
// console.log(text);


// WHILE

const name = ["Pratiwi", "Hasiany", "Celline", "Dyah", "Manurung"];
let i = 0;
let text = "";

while (name[i]) {
  text += name[i] + "\n";
  i++;
}
// console.log(text);

// DO WHILE
const name = ["Pratiwi", "Hasiany", "Celline", "Dyah", "Manurung"];
let i = 0;
let text = "";

do {
  text += name[i] + "\n";
  i++;
} while (name[i]);
// console.log(text);


// FUNCTION
// CONTOH 1 tanpa parameter
function cekPemilih(){
    let umur = 15;
    punyaKTP = false;

    if(umur >= 17){
        if(punyaKTP){
            console.log("Anda dapat melakukan pencoblosan");
        } else{
            console.log("Anda belum dapat melakukan pencoblosan");
        }
    } else {
        console.log("Anda belum cukup umur !");
    }
}
cekPemilih();


// CONTOH 2 dengan parameter
function cekPemilih(umur, punyaKTP) {  
    if(umur >= 17){
        if(punyaKTP){
            console.log("Anda dapat melakukan pencoblosan");
        } else{
            console.log("Anda belum dapat melakukan pencoblosan");
        }
    } else {
        console.log("Anda belum cukup umur !");
    }
}
cekPemilih(18, false);

// CONTOH 3 fungsi Return
function umurPunyaKTP(umur) {
    if (umur >= 17) {
        keterangan = "Anda sudah punya KTP";
        return keterangan;
    }else {
        let lamaLegal = 17 - umur;
        return lamaLegal + " tahun lagi";
    }
}
console.log(umurPunyaKTP(16)); 