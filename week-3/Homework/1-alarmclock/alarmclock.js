// La function se encarga de activar la alarma cuando el tiempo se agota
let rep = -1;
function setAlarm() {
  // se toma el valor agregado en el input
  clearInterval(rep)
  let value = document.querySelector("#alarmSet").value;
  //let value2 = parseInt(value) +1;
  let change = 1000;
 // let minI = "00:";

  // por cada intervalo de segundo evalua para modificar el dom
  rep = setInterval(() => {
    let time = document.querySelector("#timeRemaining");
    if(value === 0) {
      clearInterval(rep)
      playAlarm()
    }
 //   if(value < 10) {
 //     time.innerHTML = `Time Remaining: ${minI}0${value}`;
 //   } else if(value >= 10 && value <= 60) {
 //     time.innerHTML = `Time Remaining: ${minI}${value}`;
 //   }else if(value > 60) {
 //     // en esta codición creamos 2 variables y cada variable es un condicional para saber cuando lleva el numero 0 por delante
 //   }
    let min = parseInt(value/60) < 10 ? `0${parseInt(value/60)}` : parseInt(value/60);
    let seg = value % 60 < 10 ? `0${value % 60}` : value % 60
    time.innerHTML = `Time Remaining: ${min}:${seg}`
    // por cada intervalo se va restando el valor inicial del input
    // en este caso cada intervalo es un segundo
    value = value -1;
  }, change);

  // se creo setTimeout para controlar el setInterval
//  setTimeout(() => {
//    clearInterval(rep)
//  }, value2  * change);
  
  // se utiliza el numero obtenido del input para activar el sonido!!!
  //setTimeout(()=> playAlarm(),value2 * change  )
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
