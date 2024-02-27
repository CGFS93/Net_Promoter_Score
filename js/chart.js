function updatePieChart(currentScore, goal) {
    // Get canvas element
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');

    // Check if there's an existing chart instance and destroy it
    if (canvas.chart) {
        canvas.chart.destroy();
    }

// Define the countingToZero function
function countingToZero(currentScore) {
    let count = 0;
    while (currentScore < 0) {
        count += 1;
        currentScore += 1;
    }
    return count/100;
}


// Calculate percentage of progress
let progressPercentage, remainingPercentage;

if (goal === 0) {
    if (currentScore === 0) {
        progressPercentage = 100;
        remainingPercentage = 0;
    } else if (currentScore < 0) {
        progressPercentage = 100 - progressPercentage;
        remainingPercentage = countingToZero(currentScore) * 100;
    } else {
        progressPercentage = (currentScore / goal) * 100;
        remainingPercentage = 100 - progressPercentage;
    }
}
    if (currentScore <= 0) {
        progressPercentage = 0
        remainingPercentage = Math.abs(currentScore)  + goal
    } else if (currentScore > goal) {
        progressPercentage = currentScore + goal
        remainingPercentage = 0
    }

// Handle edge cases
if (progressPercentage < 0) {
    progressPercentage = 0;
    remainingPercentage = 100;
} else if (progressPercentage > 100) {
    progressPercentage = currentScore + 75;
    remainingPercentage = 0;
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
