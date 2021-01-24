function timeWalk(steps,foot,speedKmH) {
   let speed = speedKmH * 1000 / 3600;
   let distance = steps * foot;
   let rest = Math.floor(distance/500)*60;
   let  time = distance/speed + rest;

   let hours = Math.floor(time/3600).toFixed(0).padStart(2, "0");
   let mins = Math.floor((time - hours* 3600)/60).toFixed(0).padStart(2, "0");
   let seconds = (time - hours*60*60 - mins*60).toFixed(0).padStart(2, "0");

   return `${hours}:${mins}:${seconds}`
}
console.log(timeWalk(4000, 0.60, 5));
