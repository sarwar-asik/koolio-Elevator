# Project Overview

This project is a web application developed using React and TypeScript. It simulates an elevator control system with three levels (Ground level, Level 1, Level 2) and up/down buttons on each level. The elevator follows specific rules for movement based on button presses:

- On the Ground level, only the UP button is allowed.
- On Level 1, both UP and DOWN buttons are allowed.
- On Level 2, only the DOWN button is allowed.

Additionally, the elevator has specific behaviors for moving between levels:

- From the Ground level, it takes exactly 5 seconds to reach Level 1 and 10 seconds to reach Level 2. It stops at Level 1 only if the UP button is pressed on Level 1 as well.
- From Level 2, it takes exactly 5 seconds to reach Level 1 and 10 seconds to reach the Ground level. It stops at Level 1 only if the DOWN button is pressed on Level 1 as well.

For bonus points, sound effects can be added to enhance the user experience.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Technologies Used

- React
- TypeScript
- CSS

## Contributors

@sarwar hossain

[Your Name]
