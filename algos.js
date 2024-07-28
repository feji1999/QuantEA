// fx charts analysis indicator---do not copy---fejiro eruotor 2022
function spotx() {
  var spot = document.getElementById("spot").value;
  var spotx;
  const wallclock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var fibH;
  var H;
  var precedence;

  // core functionality
  var D = new Date();
  var H = D.getHours();
  var S = D.getSeconds();

  // check for "enter key" press
  document.getElementById("spot").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("advisor").click();
    }
  });

  // wallclock function
  if (H == 0) {
    fibH = wallclock[10] + wallclock[9]; // 12AM
  } else if (H == 1) {
    fibH = wallclock[11] + wallclock[10]; // 1AM
  } else if (H == 2) {
    fibH = wallclock[0] + wallclock[11]; // 2AM
  } else if (H == 3) {
    fibH = wallclock[1] + wallclock[2]; // 3AM
  } else if (H == 4) {
    fibH = wallclock[2] + wallclock[1]; // 4AM
  } else if (H == 5) {
    fibH = wallclock[3] + wallclock[2]; // 5AM
  } else if (H == 6) {
    fibH = wallclock[4] + wallclock[3]; // 6AM
  } else if (H == 7) {
    fibH = wallclock[5] + wallclock[4]; // 7AM
  } else if (H == 8) {
    fibH = wallclock[6] + wallclock[5]; // 8AM
  } else if (H == 9) {
    fibH = wallclock[7] + wallclock[6]; // 9AM
  } else if (H == 10) {
    fibH = wallclock[8] + wallclock[7]; // 10AM
  } else if (H == 11) {
    fibH = wallclock[9] + wallclock[8]; // 11AM
  } else if (H == 12) {
    fibH = wallclock[10] + wallclock[9]; // 12PM
  } else if (H == 13) {
    fibH = wallclock[11] + wallclock[10]; // 1PM
  } else if (H == 14) {
    fibH = wallclock[0] + wallclock[11]; // 2PM
  } else if (H == 15) {
    fibH = wallclock[1] + wallclock[2]; // 3PM
  } else if (H == 16) {
    fibH = wallclock[2] + wallclock[1]; // 4PM
  } else if (H == 17) {
    fibH = wallclock[3] + wallclock[2]; // 5PM
  } else if (H == 18) {
    fibH = wallclock[4] + wallclock[3]; // 6PM
  } else if (H == 19) {
    fibH = wallclock[5] + wallclock[4]; // 7PM
  } else if (H == 20) {
    fibH = wallclock[6] + wallclock[5]; // 8PM
  } else if (H == 21) {
    fibH = wallclock[7] + wallclock[6]; // 9PM
  } else if (H == 22) {
    fibH = wallclock[8] + wallclock[7]; // 10PM
  } else if (H == 23) {
    fibH = wallclock[9] + wallclock[8]; // 11PM
  } else {
    return 0;
  }

  // Main Computation
  spotx = (24 / H) * fibH * spot;
  var i = spotx;
  var x = i.toFixed(0); // rounds the value

  // Candlestick Chart Functions
  var direction = Math.sin(x);

  if (direction <= -0.01 && direction >= -0.1) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "100px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "50 MPIP";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.1 && direction >= -0.2) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "100px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "100 MPIP";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.2 && direction >= -0.3) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "darkgreen";
    candle.style.width = "24px";
    candle.style.height = "100px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "200 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.3 && direction >= -0.4) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "125px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "300 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.4 && direction >= -0.5) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "150px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "400 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.5 && direction >= -0.6) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "175px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "500 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.6 && direction >= -0.7) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "200px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "600 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.7 && direction >= -0.8) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "225px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "700 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.8 && direction >= -0.9) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "250px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "800 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= -0.9 && direction >= -1.0) {
    var advice = document.getElementById("results");
    advice.innerHTML = " \n Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "red";
    candle.style.width = "24px";
    candle.style.height = "275px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "900 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 1.0 && direction >= 0.9) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "300px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "1000 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.9 && direction >= 0.8) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "275px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "900 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.8 && direction >= 0.7) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "250px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "800 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.7 && direction >= 0.6) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "225px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "700 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.6 && direction >= 0.5) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "200px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "600 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.5 && direction >= 0.4) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "175px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "500 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.4 && direction >= 0.3) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "150px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "400 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.3 && direction >= 0.2) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "125px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "300 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.2 && direction >= 0.1) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "100px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "200 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  } else if (direction <= 0.1 && direction >= 0) {
    var advice = document.getElementById("results");
    advice.innerHTML = "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;";

    // candle drawing
    var candle = document.createElement("div");
    candle.style.background = "green";
    candle.style.width = "24px";
    candle.style.height = "75px";
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent += "100 MPIP Catch";
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  }
}

