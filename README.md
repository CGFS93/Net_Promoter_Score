### Net Promoter Score Calculator Documentation

#### Overview
This web page provides a Net Promoter Score (NPS) calculator, allowing users to input the number of promoters, detractors, total survey responses, and the goal score. The calculator then calculates the current score, displays it along with the result, and visualizes the progress towards the goal using a pie chart.

#### Usage
1. **Input Fields**: Users can enter the following data into the input fields:
   - **Number of Promoters**: Number of customers who are promoters.
   - **Number of Detractors**: Number of customers who are detractors.
   - **Total Survey Responses**: Total number of survey responses.
   - **Goal Score**: Desired NPS goal.

2. **Calculate Button**: Clicking the "Calculate" button triggers the calculation process.

3. **Score Display**: The current NPS score is displayed below the input fields. The color of the score changes based on the comparison with the goal:
   - Red: Score is below the goal.
   - Green: Score exceeds the goal.
   - Blue: Score equals the goal.

4. **Result Display**: The result of the calculation is displayed below the score. It shows one of the following messages:
   - Remaining promoters to reach goal (if the score is below the goal).
   - Goal achieved! Exceeded by [points] (if the score exceeds the goal).
   - Goal has been achieved! (if the score equals the goal).
   - Error message (if any errors occur during calculation).

5. **Pie Chart**: A pie chart visualizes the progress towards the goal. It displays two segments:
   - Percentage Achieved: Represents the current score as a percentage of the goal.
   - Percentage to Goal: Represents the remaining percentage to reach the goal.

#### Implementation Details
- The calculation of the NPS score and result display is handled by the `calculatePoints()` function.
- The pie chart visualization is generated using the Chart.js library.
- CSS styling is applied to enhance the appearance and layout of the elements.
- Input validation ensures that only numeric values are accepted in the input fields.
- Tooltip functionality is implemented for the pie chart to provide additional information when hovering over segments.

#### Dependencies
- **Chart.js**: The Chart.js library is used to create interactive and responsive charts.

#### Styling
- The page is styled using CSS to ensure readability and aesthetic appeal.
- Fonts, text alignment, and margins are adjusted to enhance the overall design.

#### Compatibility
- The page is designed to work across modern web browsers and devices with proper responsiveness.

#### Error Handling
- Errors encountered during calculation are displayed to the user for better understanding and troubleshooting.

#### Future Improvements
- Additional features or visualizations could be added to provide more insights into NPS data.
- User authentication and data storage capabilities could be incorporated for tracking NPS trends over time.
