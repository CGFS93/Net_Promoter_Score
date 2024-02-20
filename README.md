# Net Promoter Score Calculator

This HTML document contains a simple Points to Goal Calculator implemented using HTML, CSS, and JavaScript. This calculator helps determine the number of promoters needed to reach a specified goal score based on the Net Promoter Score (NPS) survey responses.

## HTML Structure

The HTML structure consists of:

- `<!DOCTYPE html>`: Declaration of the document type.
- `<html lang="en">`: Opening tag of the HTML document with the specified language.
- `<head>`: Contains metadata and links to external resources.
  - Meta tags for character set and viewport configuration.
  - Title of the document.
  - Internal CSS styles.
- `<body>`: Body of the HTML document containing the calculator form and result display area.

## Calculator Form

The calculator form includes input fields for:

- Number of Promoters
- Number of Detractors
- Total Survey Responses
- Goal Score

There's also a "Calculate" button that triggers the `calculatePoints()` JavaScript function when clicked.

## CSS Styling

The CSS styles defined in the `<style>` tag are applied to format the calculator form and result display area. It sets the font family, text alignment, and margin for the body, and adjusts the layout of the form and result display.

## JavaScript Functionality

The JavaScript section contains two functions:

1. `calculatePoints()`: This function retrieves values from the input fields, validates them, and calculates the remaining promoters needed to reach the goal score. It handles error cases and updates the result display accordingly.

2. `remainingPromoters(promoter, detractor, totalSurvey, goal)`: This function calculates the number of remaining promoters needed based on the provided inputs and the goal score.

## How to Use

To use the Points to Goal Calculator:

1. Enter the number of promoters, detractors, total survey responses, and the goal score.
2. Click the "Calculate" button.
3. The result will be displayed below the form, indicating the remaining promoters needed to reach the goal score or if the goal has been exceeded.

Ensure to input only numeric values in the input fields to avoid errors.

This calculator can be embedded into any webpage or used as a standalone tool for calculating NPS-related metrics.
