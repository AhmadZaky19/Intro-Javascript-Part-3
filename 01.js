const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

const cekHariKerjaPromise = (day) => {
  cekHariKerja(day)
    .then((res) => console.log(`${res} merupakan hari kerja`))
    .catch((err) => console.log(err));
};

cekHariKerjaPromise("kamis");

const cekHariKerjaTryCatch = async (day) => {
  try {
    const res = await cekHariKerja(day);
    console.log(`${res} merupakan hari kerja`);
  } catch (err) {
    console.log(err);
  }
};

cekHariKerjaTryCatch("minggu")
