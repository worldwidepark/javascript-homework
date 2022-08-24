//-m オプション
const { Command } = require("commander");
const program = new Command();
program.option("-m, --month <month>").parse();

const today = new Date();
const year = Number(today.getFullYear());
let month;

//-m オプションの値を評価
if (1 <= program.opts().month && program.opts().month <= 12) {
  month = program.opts().month;
} else if (!program.opts().month) {
  month = Number(today.getMonth() + 1).padStart(2, "0");
} else {
  console.log("入力値が正しくありません。");
  return;
}

console.log(`       ${month}月 ${year}`);
console.log(" 日 月 火 水 木 金 土");

const date = new Date(year, month - 1, 1).toLocaleString({
  timeZone: "Asia/Tokyo",
});
const lastDate = new Date(year, month, 0).toLocaleString({
  timeZone: "Asia/Tokyo",
});
//初日の曜日
const daySet = new Date(date).getDay();
const lastDaySet = new Date(lastDate).getDate();
//指定月が何週かを求める
const weekCount = Math.ceil((daySet + lastDaySet) / 7);
//2週目の初めての日にちを求める
let startDateOfSecondWeek = 8 - daySet;
let week = {};

for (i = 1; i <= weekCount; i++) {
  week[i] = "";
  //1週目
  if (i == 1) {
    for (j = 0; j < daySet; j++) {
      week[i] = week[i] + "   ";
    }
    for (n = 1; n <= 7 - daySet; n++) {
      week[i] = week[i] + " " + n.toString().padStart(2);
    }
  } else if (i == weekCount) {
    //最後の週
    for (j = 1; startDateOfSecondWeek <= lastDaySet; j++) {
      week[i] = week[i] + " " + startDateOfSecondWeek.toString().padStart(2);
      startDateOfSecondWeek++;
    }
  } else {
    for (j = 1; j <= 7; j++) {
      week[i] = week[i] + " " + startDateOfSecondWeek.toString().padStart(2);
      startDateOfSecondWeek++;
    }
  }
  console.log(week[i]);
}
