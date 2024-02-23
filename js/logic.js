var pieChart;

function calculatePoints() {
    try {
        var promoter = parseFloat(document.getElementById('promoter').value);
        var neutral = parseFloat(document.getElementById('neutral').value);
        var detractor = parseFloat(document.getElementById('detractor').value);
        var goal = parseFloat(document.getElementById('goal').value);

        if (isNaN(promoter) || isNaN(neutral) || isNaN(detractor) || isNaN(goal)) {
            throw new Error("Please enter numbers only.");
        }

        var currentScore = nps_calculator(promoter, neutral, detractor);
        var remainingPoints = promoter_target_count(promoter, neutral, detractor, goal);

        // Update the score display
        document.getElementById('score').innerHTML = "Current Score: " + currentScore;

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
            document.getElementById('result').innerHTML = "Remaining promoters to reach goal: " + remainingPoints;
        } else if (currentScore > goal) {
            document.getElementById('result').innerHTML = "Goal achieved & Exceeded!";
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

function promoter_target_count(promoter, neutral, detractor, target, promoter_sum=false, new_nps=false, to_target=true) {
    // Initiate NPS equation 
    let total = promoter + neutral + detractor;
    let score = Math.round(((promoter - detractor) / total) * 100);

    // Initiate count
    let survey_count = 0;

    while (score < target) {
        // Update score with every loop
        score = Math.round(((promoter - detractor) / total) * 100);

        // add count count to key variable
        total += 1;
        survey_count += 1;
        promoter += 1;
    }

    if (promoter_sum) {
        return promoter;
    } else if (new_nps) {
        return score;
    } else if (to_target) {
        return survey_count;
    } else {    
        return [`Promoters to target: ${survey_count}`, `Total promoters to target: ${promoter}`, `New NPS: ${score}`];
    }
}


// Net Promoter Score Calculation
function nps_calculator(promoter, neutral, detractor) {
    let total_responders = promoter + neutral + detractor;
    let nps_score = Math.round(((promoter - detractor) / total_responders) * 100);

    return nps_score;
}

