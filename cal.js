const { Command } = require("commander");
const program = new Command();

program.option("-m, --month <month>").parse();
let month;
let today = new Date();
const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

if (1 <= program.opts().month && program.opts().month <= 12) {
  month = program.opts().month;
  // date = new Date(2022, month - 1);
} else if (!program.opts().month) {
  month = String(today.getMonth() + 1).padStart(2, "0");
} else {
  return console.log("入力値が正しくありません。");
}

let year = String(today.getFullYear());
let firstDay = new Date(year, month - 1, 1).toLocaleString({
  timeZone: "Asia/Tokyo",
});
let lastDay = new Date(year, month, 0).toLocaleString({
  timeZone: "Asia/Tokyo",
});

// let date = new (function formatDate(date) {
//   // year = String(date.getFullYear());
//   // Stringの`padStart`メソッド（ES2017）で2桁になるように0埋めする
//   const mm = String(date.getMonth() + 1).padStart(2, "0");
//   const dd = String(date.getDate()).padStart(2, "0");
//   return `${year}/${mm}/${dd}`;
// })();

// let cal = formatDate(date);
console.log(`       ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");
// console.log(`${cal}`);

let testDate = new Date().toLocaleString({ timeZone: "Asia/Tokyo" });
let testDate2 = new Date(2022, 2).toLocaleString({ timeZone: "Asia/Tokyo" });
console.log(testDate, testDate2);
let pa = new Date(firstDay).getDay();
let par = new Date(lastDay).getDate();

console.log(pa);
console.log(firstDay);
console.log(par);
console.log(lastDay);
let week = WEEKDAY[pa];
console.log(week);
// const array = ["A", "B", "C"];
// array.push("D"); // "D"を末尾に追加
// console.log(array); // => ["A", "B", "C", "D"]

// const array = ["A", "B", "C"];
// array.unshift("S"); // "S"を先頭に追加
// console.log(array); // => ["S", "A", "B", "C"]

const arr = Array(par)
  .fill()
  .map((v, i) => i + 1);
console.log(arr);
