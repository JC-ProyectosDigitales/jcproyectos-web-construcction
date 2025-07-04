// Establece la fecha del lanzamiento (ajústala según necesites)
const launchDate = new Date("2025-07-15T00:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
};

setInterval(countdown, 1000);
