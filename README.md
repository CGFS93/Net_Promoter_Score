### Net Promoter Score Calculator Documentation

*Version 1.2*

#### Introduction
This documentation provides an overview of the Net Promoter Score (NPS) Calculator application, including its purpose, usage, and functionality.

#### Purpose
The Net Promoter Score (NPS) Calculator is a web-based tool designed to calculate and visualize the Net Promoter Score, a metric used to assess customer satisfaction and loyalty based on survey responses.

#### Usage
Users can input the number of promoters, neutral respondents, detractors, and a target score into the provided form. Upon submission, the application calculates the current NPS score, determines the progress towards the target score, and visualizes the data using a pie chart.

Documentation for Updates to `updatePieChart` Function:

1. **Progress and Remaining Percentage Calculation**:
   - Revised the calculation of `progressPercentage` and `remainingPercentage` to accurately reflect progress towards the goal.
   - Addressed various scenarios such as when the goal is 0, when the current score is negative, and when the current score exceeds the goal.
   - Ensured that edge cases are properly handled to prevent incorrect percentage values.

2. **Chart Update**:
   - Implemented a check to see if an existing chart instance exists before creating a new one.
   - If an existing chart instance is found, it is destroyed to prevent memory leaks and ensure proper chart updates.
   - This helps maintain the integrity of the chart display and prevents potential conflicts between multiple chart instances.

3. **Error Handling and Debugging**:
   - Added comments throughout the code to clarify the purpose of each section and highlight areas that may need review.
   - Implemented console log statements to output progress and remaining percentages, aiding in debugging and verifying the correctness of calculations.

4. **Code Structure and Readability**:
   - Reviewed the code structure to ensure readability and maintainability.
   - Employed consistent naming conventions and indentation for better code organization.
   - Provided comments to explain complex logic and ensure clarity for future maintenance.

These updates aim to enhance the functionality and reliability of the `updatePieChart` function, ensuring accurate calculation and display of progress and remaining percentages while maintaining code readability and robustness.
