const { Command } = require("commander");
const program = new Command();

program.option("-m, --month <month>").parse();

let today = new Date();
let year = String(today.getFullYear());
let month;

if (1 <= program.opts().month && program.opts().month <= 12) {
  month = program.opts().month;
} else if (!program.opts().month) {
  month = String(today.getMonth() + 1).padStart(2, "0");
} else {
  return console.log("入力値が正しくありません。");
}

let date = new Date(year, month - 1, 1).toLocaleString({
  timeZone: "Asia/Tokyo",
});
let lastDate = new Date(year, month, 0).toLocaleString({
  timeZone: "Asia/Tokyo",
});

let daySet = new Date(date).getDay();
let lastDaySet = new Date(lastDate).getDate();

let dates = new Date(year, month - 1, 1);
let lastDatesSet = new Date(dates).getDate();
console.log(daySet);
console.log(`       ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");
let space = "   ";
let week1 = " 1  2  3  4  5  6";
let week1f = space + space + week1;
console.log(week1f);

console.log(lastDaySet);
console.log(lastDatesSet);
