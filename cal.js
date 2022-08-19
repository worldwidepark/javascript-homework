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

console.log(`       ${month}月 ${year}`);
console.log(" 日 月 火 水 木 金 土");

let date = new Date(year, month - 1, 1).toLocaleString({
  timeZone: "Asia/Tokyo",
});
let lastDate = new Date(year, month, 0).toLocaleString({
  timeZone: "Asia/Tokyo",
});

let daySet = new Date(date).getDay();
let lastDaySet = new Date(lastDate).getDate();

let weekCount = Math.ceil((daySet + lastDaySet) / 7);
let firstDayOfWeek = 8 - daySet;
let week = {};
for (i = 1; i <= weekCount; i++) {
  week[i] = "";

  if (i == 1) {
    for (j = 0; j < daySet; j++) {
      week[i] = week[i] + "   ";
    }
    for (n = 1; n <= 7 - daySet; n++) {
      week[i] = week[i] + " " + n.toString().padStart(2);
    }
  } else if (i == weekCount) {
    for (j = 1; firstDayOfWeek <= lastDaySet; j++) {
      week[i] = week[i] + " " + firstDayOfWeek.toString().padStart(2);
      firstDayOfWeek++;
    }
  } else {
    for (j = 1; j <= 7; j++) {
      week[i] = week[i] + " " + firstDayOfWeek.toString().padStart(2);
      firstDayOfWeek++;
    }
  }
  console.log(week[i]);
}
