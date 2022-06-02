var timeEl = document.querySelector("#time");
var users =  document.querySelector("#users");

window.onload = function() {
    var i = 0;
    
    users.innerText = ++i;
}
setInterval(() => {
    var time = new Date();
    var timeArr = [time.getHours(), time.getMinutes(), time.getSeconds()];
    
    timeEl.innerText = timeArr.join(":");
}, 1000);