const getMonth = (cb) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      cb(null, month);
    } else {
      cb(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.map((value) => {
      console.log(value);
    });
  }
};

getMonth(showMonth);
