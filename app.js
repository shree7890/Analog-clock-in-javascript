// element selector

const hour = document.getElementById("hour");
const miniute = document.getElementById("miniute");
const second = document.getElementById("second");

let deg = 6;
function timer() {
  const time = new Date();
  const hr = time.getHours() * 30;
  const min = time.getMinutes() * deg;
  const sec = time.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hr + min / 12}deg)`;
  miniute.style.transform = `rotateZ(${min}deg)`;
  second.style.transform = `rotateZ(${sec}deg)`;
}
setInterval(timer);
