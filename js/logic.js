var pieChart;

function calculatePoints() {
    try {
        var promoter = parseFloat(document.getElementById('promoter').value);
        var detractor = parseFloat(document.getElementById('detractor').value);
        var totalSurvey = parseFloat(document.getElementById('total_survey').value);
        var goal = parseFloat(document.getElementById('goal').value);

        if (isNaN(promoter) || isNaN(detractor) || isNaN(totalSurvey) || isNaN(goal)) {
            throw new Error("Please enter numbers only.");
        }

        var currentScore = ((promoter - detractor) / totalSurvey) * 100;
        var remainingPoints = goal - currentScore;

        // Update the score display
        document.getElementById('score').innerHTML = "Current Score: " + currentScore.toFixed(2);

        // Get the score display element
        var scoreDisplay = document.getElementById('score');

        // Add color based on the score
        if (currentScore < goal) {
            scoreDisplay.style.color = 'red';
        } else if (currentScore > goal) {
            scoreDisplay.style.color = 'green';
        } else {
            scoreDisplay.style.color = 'blue';
        }

        if (currentScore < goal) {
            document.getElementById('result').innerHTML = "Remaining promoters to reach goal: " + Math.abs(remainingPoints).toFixed(2);
        } else if (currentScore > goal) {
            document.getElementById('result').innerHTML = "Goal achieved! Exceeded by " + Math.abs(remainingPoints).toFixed(2) + " Points";
        } else if (currentScore == goal) {
            document.getElementById('result').innerHTML = "Goal has been achieved! ";
        }  else {
            document.getElementById('result').innerHTML = "Score is not available";
        }

        updatePieChart(currentScore, goal);

    } catch (error) {
        document.getElementById('result').innerHTML = "Error: " + error.message;
    }
}

function calculatePercentage(score, target) {
    if (target === 0) {
        return 0;
    } else {
        return (score / target) * 100;
    }
}

function correctPercent(percent) {
    if (percent > 100) {
        return 0;
    } else {
        return 100 - percent;
    }
}
