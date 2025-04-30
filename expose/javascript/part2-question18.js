function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  // Call printTume every 1 second
  setInterval(printCurrentTime, 1000);
  