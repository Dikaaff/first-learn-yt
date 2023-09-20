const nama = "dika afif";
let usia = 37;

const biodata = document.getElementsById(`biodata`);
console.log
function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) {
        generasi = "generasi remaja";
     }
     else if (usia > 5 && usia < 9) {
        generasi = "generasi anak anak";
     }
     else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa"
     }
     else if (usia > 30 && usia < 50 ) {
        generasi = "generasi tua"
     }
     else if (usia > 1 && usia < 5) {
        generasi = "generasi bayi"
     }
     return console.log(`generasi saya adalah`, generasi);
    }
console.log(nama);
console.log(usia);

generateBiodata();