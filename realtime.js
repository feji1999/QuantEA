 // Function to load JSON data and plot it
 async function plotData() {
    try {
        const response = await fetch('https://feji1999.github.io/QuantEA/trades.json'); // Fetch data
        const trades = await response.json();

        // Extract data for plotting
        const winRatios = trades.map(trade => trade.winRatio);
        const rewardRiskRatios = trades.map(trade => trade.rewardRiskRatio);
        const tradeLabels = trades.map(trade => trade.trade);

        // Define trace for scatter plot
        const trace = {
            x: rewardRiskRatios,
            y: winRatios,
            mode: 'markers+lines',
            type: 'scatter',
            text: tradeLabels,
            marker: {
                size: 10
            }
        };

        // Define layout for the plot
        const layout = {
            title: 'Traders Win Ratio vs Reward-Risk Ratio',
            xaxis: {
                title: 'Reward-Risk Ratio'
            },
            yaxis: {
                title: 'Win Ratio'
            }
        };

        // Plot the data
        Plotly.newPlot('chart', [trace], layout);
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

// Call the function to plot the data
plotData();