document.addEventListener("DOMContentLoaded", function() {
  (function() {
      const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

      const numberOfDays = 30;

      const countDown = new Date().getTime() + numberOfDays * day;
      const x = setInterval(function() {
          const now = new Date().getTime();
          const distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / day);
          document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

          if (distance < 0) {
              clearInterval(x);
          }
      }, 0);
  })();
});