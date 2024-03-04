function updatePieChart(currentScore, goal) {
    // Get canvas element
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');

    // Check if there's an existing chart instance and destroy it
    if (canvas.chart) {
        canvas.chart.destroy();
    }

    // Set conditions on percent
    if (currentScore > goal && goal != 0) {
        progressPercentage = Math.abs((currentScore / goal) * 100)
        remainingPercentage = 0
    } else if (currentScore > goal && goal <= 0) {
        progressPercentage = Math.abs((currentScore + 100))
        remainingPercentage = 0
    } else if (currentScore < goal && goal != 0 && currentScore > 0) {
        progressPercentage = Math.abs((currentScore / goal) * 100);
        remainingPercentage = 100 - progressPercentage;
    } else if (currentScore == goal) {
        progressPercentage = 100
        remainingPercentage = 0
    } else if (currentScore <= 0 | goal <= 0 ) {
        progressPercentage = 0
        remainingPercentage = 100 - currentScore
    }


    // Set colors based on whether current score exceeds the target or not
    const backgroundColor = (progressPercentage >= 100) ? ['rgba(255, 0, 0)', 'rgba(255, 99, 132, 0.6)'] : ['rgba(255, 0, 0)', 'rgba(255, 99, 132, 0.6)'];

    // Create the doughnut chart
    const updatePieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [progressPercentage, remainingPercentage],
                backgroundColor: backgroundColor,
                hoverOffset: 4
            }],
            labels: ['Progress', 'Remaining']
        }
    });

    // Store the chart instance with the canvas element
    canvas.chart = updatePieChart;
}
