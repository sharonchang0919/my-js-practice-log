const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){ 
  const today = new Date();
  
  const second = today.getSeconds();
  console.log(second);
  const secondDegrees = (second * 360/60);
  //console.log(secondDegrees);
  secondHand.style.transform = `rotate(${secondDegrees+90}deg)`;


  const minute = today.getMinutes();
  console.log(minute);
  const minuteDegrees = (minute * 360/60);
  //console.log(minuteDegrees);
  minuteHand.style.transform = `rotate(${minuteDegrees+90}deg)`;

  const hour = today.getHours();
  console.log(hour);
  const hourDegrees = (hour * 360/12);
  //console.log(hourDegrees);
  hourHand.style.transform = `rotate(${hourDegrees+90}deg)`;

}

setInterval(setDate, 1000); //setInterval(cb, ms): Run callback cb repeatedly every ms

setDate();

