// Select currency pair function
let fxpair = '';
document.getElementById("currencySelector").addEventListener("change", async function() {
    const selectedCurrency = this.value;
    fxpair = selectedCurrency;  // Update fxpair dynamically
    console.log('Selected Currency:', fxpair);  // Debugging

    const [base, quote] = selectedCurrency.split('/');
    const apiKey = 'H5C4BHJSC3IGB0LX'; // Your Alpha Vantage API key

    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${base}&to_currency=${quote}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data['Realtime Currency Exchange Rate'] && data['Realtime Currency Exchange Rate']['5. Exchange Rate']) {
            const exchangeRate = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
            document.getElementById("spot").value = exchangeRate;
        } else {
            console.error('Exchange rate not found in the response:', data);
            document.getElementById("results").innerHTML = 'Exchange rate not found. Please try again.';
        }
    } catch (error) {
        console.error('Error fetching the currency data:', error);
        document.getElementById("results").innerHTML = 'Error fetching the currency data. Please try again.';
    }
});

// EA main function
function spotx() {
    const spot = parseFloat(document.getElementById("spot").value);
    console.log('Spot Value:', spot);  // Debugging

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
    const entry = Math.sin(spot); // get the sine value of the actual entry, will use later in y-axis value computation

    console.log('Direction:', direction, 'Entry:', entry);  // Debugging

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

    // Add new data point to KPI chart
    const newPoint = {
        x: [Math.abs(direction)], // Risk-Reward Ratio
        y: [Math.abs(entry)], // Win Ratio
        mode: 'markers',
        type: 'scatter',
        name: direction >= 0 ? `Bullish (${fxpair})` : `Bearish (${fxpair})`,
        marker: { size: 12, color: direction >= 0 ? 'green' : 'red' }
    };

    console.log('New Point:', newPoint);  // Debugging

    Plotly.addTraces('mychart', newPoint);
}

function getChartConfig() {
    const screenWidth = window.innerWidth;
    let fontSize = 30; // Default font size for larger screens
    let showAnnotations = true; // Default to showing annotations

    if (screenWidth <= 480) {
        fontSize = 14; // Small font size for mobile devices
        showAnnotations = false; // Hide annotations on small screens
    } else if (screenWidth <= 768) {
        fontSize = 20; // Medium font size for tablets
    }

    return { fontSize, showAnnotations };
}

const { fontSize, showAnnotations } = getChartConfig();

const initialData = [];
const layout = {
    title: 'Trades Probability Chart',
    xaxis: {
        title: 'Risk-Reward-Ratio',
        range: [0, 1],
        tickformat: '%'
    },
    yaxis: {
        title: 'Win-Ratio',
        range: [0, 1],
        tickformat: '%'
    },
    shapes: [
        // Quadrant lines
        {
            type: 'line',
            x0: 0.5,
            y0: 0,
            x1: 0.5,
            y1: 1,
            line: {
                color: 'yellow',
                width: 2
            }
        },
        {
            type: 'line',
            x0: 0,
            y0: 0.5,
            x1: 1,
            y1: 0.5,
            line: {
                color: 'yellow',
                width: 2
            }
        }
    ],
    annotations: showAnnotations ? [
        {
            x: 0.25,
            y: 0.75,
            text: 'B+ Setups',
            showarrow: false,
            font: {
                size: fontSize,
                color: 'rgba(200, 200, 200, 0.5)'
            },
            xref: 'paper',
            yref: 'paper'
        },
        {
            x: 0.75,
            y: 0.75,
            text: 'A+ Setups',
            showarrow: false,
            font: {
                size: fontSize,
                color: 'rgba(200, 200, 200, 0.5)'
            },
            xref: 'paper',
            yref: 'paper'
        },
        {
            x: 0.25,
            y: 0.25,
            text: 'C Setups',
            showarrow: false,
            font: {
                size: fontSize,
                color: 'rgba(200, 200, 200, 0.5)'
            },
            xref: 'paper',
            yref: 'paper'
        },
        {
            x: 0.75,
            y: 0.25,
            text: 'B- Setups',
            showarrow: false,
            font: {
                size: fontSize,
                color: 'rgba(200, 200, 200, 0.5)'
            },
            xref: 'paper',
            yref: 'paper'
        }
    ] : []
};

Plotly.newPlot('mychart', initialData, layout);

// Add an event listener for window resize
window.addEventListener('resize', function() {
    const { fontSize, showAnnotations } = getChartConfig();
    Plotly.relayout('mychart', {
        annotations: showAnnotations ? [
            {
                x: 0.25,
                y: 0.75,
                text: 'B+ Setups',
                showarrow: false,
                font: {
                    size: fontSize,
                    color: 'rgba(200, 200, 200, 0.5)'
                },
                xref: 'paper',
                yref: 'paper'
            },
            {
                x: 0.75,
                y: 0.75,
                text: 'A+ Setups',
                showarrow: false,
                font: {
                    size: fontSize,
                    color: 'rgba(200, 200, 200, 0.5)'
                },
                xref: 'paper',
                yref: 'paper'
            },
            {
                x: 0.25,
                y: 0.25,
                text: 'C Setups',
                showarrow: false,
                font: {
                    size: fontSize,
                    color: 'rgba(200, 200, 200, 0.5)'
                },
                xref: 'paper',
                yref: 'paper'
            },
            {
                x: 0.75,
                y: 0.25,
                text: 'B- Setups',
                showarrow: false,
                font: {
                    size: fontSize,
                    color: 'rgba(200, 200, 200, 0.5)'
                },
                xref: 'paper',
                yref: 'paper'
            }
        ] : []
    });
});
