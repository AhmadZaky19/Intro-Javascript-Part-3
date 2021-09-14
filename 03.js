// PROGRAM 01
const hitungLuasPersegiPanjang = (p, l) =>
  new Promise((resolve, reject) => {
    if (typeof p !== "number" || typeof l !== "number") {
      reject(new Error("Tipe data harus number"));
    } else {
      let luas;
      setTimeout(() => {
        luas = p * l;
        //   console.log(`PROSES 1 menghitung luas persegi panjang (p X l) = ${p} X ${l}`);
        console.log(
          "PROSES 1 menghitung luas persegi panjang (p X l) =",
          p,
          "X",
          l
        );
        resolve(luas);
      }, 2000);
    }
  });

const output = (luas) => {
  setTimeout(() => {
    console.log("PROSES 2 luas dari persegi panjang =", luas);
  }, 3000);
};

let p = 16;
let l = 9;

hitungLuasPersegiPanjang(p, l)
  .then((luas) => output(luas))
  .catch((error) => {
    console.log(error);
  });

// PROGRAM 02
const cekTahunKabisat = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const february = [
        01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      ];
      let check;
      if (february.length === date) {
        resolve(check);
      } else if (february.length > 29) {
        reject(new Error("Bukan bulan Februari"));
      } else {
        reject(new Error("Tahun ini bukan tahun kabisat"));
      }
    }, 8000);
  });
};

const cekTahunKabisatPromise = (date) => {
  cekTahunKabisat(date)
    .then((res) => console.log("Tahun ini tahun kabisat"))
    .catch((err) => console.log(err));
};

cekTahunKabisatPromise(29);
