function spotx() {
  const spot = document.getElementById("spot").value;
  const wallclock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const ranges = [
    { min: -1.0, max: -0.9, color: "red", height: 275, text: "900 MPIP Catch" },
    { min: -0.9, max: -0.8, color: "red", height: 250, text: "800 MPIP Catch" },
    { min: -0.8, max: -0.7, color: "red", height: 225, text: "700 MPIP Catch" },
    { min: -0.7, max: -0.6, color: "red", height: 200, text: "600 MPIP Catch" },
    { min: -0.6, max: -0.5, color: "red", height: 175, text: "500 MPIP Catch" },
    { min: -0.5, max: -0.4, color: "red", height: 150, text: "400 MPIP Catch" },
    { min: -0.4, max: -0.3, color: "red", height: 125, text: "300 MPIP Catch" },
    { min: -0.3, max: -0.2, color: "red", height: 100, text: "200 MPIP Catch" },
    { min: -0.2, max: -0.1, color: "red", height: 75, text: "100 MPIP Catch" },
    { min: 0, max: 0.1, color: "green", height: 75, text: "100 MPIP Catch" },
    { min: 0.1, max: 0.2, color: "green", height: 100, text: "200 MPIP Catch" },
    { min: 0.2, max: 0.3, color: "green", height: 125, text: "300 MPIP Catch" },
    { min: 0.3, max: 0.4, color: "green", height: 150, text: "400 MPIP Catch" },
    { min: 0.4, max: 0.5, color: "green", height: 175, text: "500 MPIP Catch" },
    { min: 0.5, max: 0.6, color: "green", height: 200, text: "600 MPIP Catch" },
    { min: 0.6, max: 0.7, color: "green", height: 225, text: "700 MPIP Catch" },
    { min: 0.7, max: 0.8, color: "green", height: 250, text: "800 MPIP Catch" },
    { min: 0.8, max: 0.9, color: "green", height: 275, text: "900 MPIP Catch" },
    { min: 0.9, max: 1.0, color: "green", height: 300, text: "1000 MPIP Catch" }
  ];

  // Core functionality
  const D = new Date();
  const H = D.getHours();

  // Calculate fibH
  const fibH = wallclock[H % 12] + wallclock[(H - 1 + 12) % 12];

  // Main Computation
  const spotx = (24 / H) * fibH * spot;
  const x = spotx.toFixed(0); // rounds the value

  // Determine direction
  const direction = Math.sin(x);

  // Get the advice element
  const advice = document.getElementById("results");
  advice.innerHTML = direction >= 0
    ? "Prepare for a Buy Entry Market Movement &uarr;&uarr;&uarr;"
    : "Prepare for a Sell Entry Market Movement &darr;&darr;&darr;";

  // Find the appropriate range
  const range = ranges.find(r => direction >= r.min && direction < r.max);

  if (range) {
    // Create and style the candle
    const candle = document.createElement("div");
    candle.style.background = range.color;
    candle.style.width = "24px";
    candle.style.height = `${range.height}px`;
    candle.style.position = "relative";
    candle.style.left = "1%";
    candle.textContent = range.text;
    candle.style.writingMode = "vertical-rl";
    candle.style.color = "white";

    document.getElementById("chart").appendChild(candle);
  }
}

// Event listener for "Enter" key press
document.getElementById("spot").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("advisor").click();
  }
});
