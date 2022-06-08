const countDate = new Date("Jun 10, 2022 00:00:00").getTime();
console.log(countDate);

function newYear() {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}
setInterval(() => {
  newYear();
}, 1000);
