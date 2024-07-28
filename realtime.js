// Define data
var trace1 = {
    type: 'scatterpolar',
    r: [60, 70, 80], // Replace with your own data
    theta: ['Factor 1', 'Factor 2', 'Factor 3'], // Replace with your own labels
    fill: 'toself',
    name: 'Dataset 1',
    marker: {color: 'blue'}
};

var trace2 = {
    type: 'scatterpolar',
    r: [50, 60, 70], // Replace with your own data
    theta: ['Factor 1', 'Factor 2', 'Factor 3'], // Replace with your own labels
    fill: 'toself',
    name: 'Dataset 2',
    marker: {color: 'red'}
};

var data = [trace1, trace2];

// Define layout
var layout = {
    polar: {
        radialaxis: {
            visible: true,
            range: [0, 100] // Adjust based on your data range
        }
    },
    title: 'Conjoined Triangle Chart'
};

// Create the plot
Plotly.newPlot('myRadarChart', data, layout);
