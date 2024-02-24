### Net Promoter Score Calculator Documentation

#### Introduction
This documentation provides an overview of the Net Promoter Score (NPS) Calculator application, including its purpose, usage, and functionality.

#### Purpose
The Net Promoter Score (NPS) Calculator is a web-based tool designed to calculate and visualize the Net Promoter Score, a metric used to assess customer satisfaction and loyalty based on survey responses.

#### Usage
Users can input the number of promoters, neutral respondents, detractors, and a target score into the provided form. Upon submission, the application calculates the current NPS score, determines the progress towards the target score, and visualizes the data using a pie chart.

#### HTML Structure
- The HTML structure consists of a form containing input fields for the number of promoters, neutral respondents, detractors, and the target score.
- The calculated score and result are displayed below the form.
- A pie chart is used to visualize the progress towards the target score.

#### JavaScript Functions

1. **calculatePoints()**
   - Calculates the current NPS score and progress towards the target score.
   - Updates the score display and result.
   - Calls the function to update the pie chart.

2. **promoter_target_count(promoter, neutral, detractor, target, promoter_sum=false, new_nps=false, to_target=true)**
   - Calculates the number of additional promoters needed to reach the target score.
   - Returns the count of additional promoters or the new NPS score depending on the parameters.

3. **nps_calculator(promoter, neutral, detractor)**
   - Calculates the NPS score based on the number of promoters, neutral respondents, and detractors.

4. **updatePieChart(currentScore, goal)**
   - Updates the pie chart with the percentage achieved and percentage remaining to the goal.
   - Destroys the previous chart instance before creating a new one.

5. **triggerReflow()**
   - Triggers a reflow to ensure proper rendering of the chart when the window is focused.

6. **focusNextInput(currentInput, nextInputId)**
   - Shifts focus to the next input field upon user input.

7. **submitIfLastInput(currentInput)**
   - Submits the form if the last input field is filled.

#### External Libraries
- **Chart.js**: Used to create and display the pie chart visualizing the progress towards the target score.

#### Dependencies
- CSS styles are included for styling the application.
- JavaScript files (`logic.js`, `chart.js`, `iphone.js`) contain the application logic, chart configuration, and additional functionality.

#### Compatibility
- The application is compatible with modern web browsers.
- Responsive design ensures usability across various devices.

#### Conclusion
The Net Promoter Score Calculator provides a simple yet effective way to calculate and visualize NPS scores, helping businesses gauge customer satisfaction and make informed decisions to improve their products or services.
