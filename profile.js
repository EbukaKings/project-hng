setInterval(function() {
    var currentTime = new Date();
    var utcTime = currentTime.toUTCString();
    document.querySelector(".current-TimeUTC").innerHTML = utcTime
}, 1000);
