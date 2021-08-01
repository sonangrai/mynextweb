const DateFormatter = (date) => {
  let gotDate = new Date(date);
  let tarik = String(gotDate).slice(4, 7);
  let month = String(gotDate).slice(8, 10);
  return tarik + " " + month;
};

export default DateFormatter;
