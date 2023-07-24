# Profasee Coding Challenge - Graphs (React)

This is a React application that fetches sample data from an API and displays various graphs using Chart.js to visualize the data.

## Getting Started

To run the application, follow these steps:

1. Clone the repository or download the code files.
2. Install the required dependencies by running `npm install` in the project root directory.
3. Run the application using `npm start`.
4. The application will be accessible at `http://localhost:3000` in your browser.

## Overview

This application fetches sample data from the Profasee API (located at [https://dev-api2.profasee.com/reports/test-data](https://dev-api2.profasee.com/reports/test-data)) and uses React, Chart.js, and Tailwind CSS to create informative graphs.

The application showcases the following graphs:

1. **Units and Revenue Comparison** (Line Chart):
   This chart compares the units sold and revenue generated over time using a line chart. The x-axis represents dates, and the y-axis represents units and revenue values.

2. **Cost of Goods Sold (COGS) Comparison** (Line Chart):
   This chart displays the cost of goods sold (COGS) over time using a line chart. The x-axis represents dates, and the y-axis represents the COGS values.

3. **Daily Ad Cost Comparison** (Line Chart):
   This chart shows the daily advertising cost over time using a line chart. The x-axis represents dates, and the y-axis represents the ad cost values.

4. **Best Sellers Rank Comparison** (Line Chart):
   This chart compares the best sellers rank over time using a line chart. The x-axis represents dates, and the y-axis represents the best sellers rank values.

5. **Units vs. Revenue Scatter Plot** (Scatter Plot):
   This scatter plot displays the relationship between units sold and revenue generated. The x-axis represents units, and the y-axis represents revenue. Each data point corresponds to a specific date.

6. **Revenue and COGS Comparison (Stacked Bar Chart)** (Bar Chart):
   This stacked bar chart compares revenue and cost of goods sold (COGS) over time. The x-axis represents dates, and the y-axis represents the stacked values of revenue and COGS.

## Dependencies

The application uses the following main dependencies:

-   React: A JavaScript library for building user interfaces.
-   react-chartjs-2: A wrapper around Chart.js to use charts in React components.
-   Chart.js: A popular JavaScript library for creating charts.
-   axios: A library for making HTTP requests to fetch data from the Profasee API.
-   chartjs-adapter-date-fns: A date adapter for Chart.js using the date-fns library.
-   Tailwind CSS: A utility-first CSS framework used for styling the components.

## Data Fetching

The application fetches the sample data from the Profasee API using the axios library. The data is retrieved from the endpoint located at [https://dev-api2.profasee.com/reports/test-data](https://dev-api2.profasee.com/reports/test-data). Once the data is fetched, the graphs are updated with the relevant data to display.

## Graphs

The graphs are created using Chart.js and react-chartjs-2. The application showcases line charts, scatter plots, and a stacked bar chart to visualize the different aspects of the sample data.

## Running the Application

To run the application locally, make sure you have Node.js and npm installed on your machine. After installing the dependencies using `npm install`, use `npm start` to run the development server. The application will be available at `http://localhost:3000` in your browser.

## Credits

The application code and sample data are part of the Profasee Coding Challenge. The charts and graphs were created using Chart.js and Tailwind CSS.

## License

This project is licensed under the MIT License

Feel free to reach out if you have any questions or feedback about the application or the coding challenge.

Happy coding!
