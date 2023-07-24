import React, { useEffect, useState } from "react";
import { Bar, Line, Scatter } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
const API_URL = "https://dev-api2.profasee.com/reports/test-data";

Chart.register(...registerables);
const adsCostChartOptions = {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Ads Cost",
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                data: [],
            },
            {
                label: "Ads Cost Last Year",
                borderColor: "rgba(255, 159, 64, 1)",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                data: [],
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "yyyy-MM-dd",
                    displayFormats: {
                        day: "yyyy-MM-dd",
                    },
                },
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Ads Cost",
                },
            },
        },
    },
};
const unitsRevenueChartOptions = {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Units",
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                data: [],
            },
            {
                label: "Revenue",
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                data: [],
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "yyyy-MM-dd",
                    displayFormats: {
                        day: "yyyy-MM-dd",
                    },
                },
                title: {
                    display: true,
                    text: "Date",
                },
                adapters: {
                    date: {
                        locale: enUS,
                    },
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Units / Revenue",
                },
            },
        },
    },
};

const cogsChartOptions = {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "COGS",
                borderColor: "rgba(255, 206, 86, 1)",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                data: [],
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "yyyy-MM-dd",
                    displayFormats: {
                        day: "yyyy-MM-dd",
                    },
                },
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "COGS",
                },
            },
        },
    },
};
const bestSellersRankChartOptions = {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Best Sellers Rank",
                borderColor: "rgba(153, 102, 255, 1)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                data: [],
            },
            {
                label: "Best Sellers Rank Last Year",
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                data: [],
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "yyyy-MM-dd",
                    displayFormats: {
                        day: "yyyy-MM-dd",
                    },
                },
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Best Sellers Rank",
                },
            },
        },
    },
};
const scatterPlotOptions = {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Units vs. Revenue",
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                data: [], // Will be populated with sampleData
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                title: {
                    display: true,
                    text: "Units",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Revenue",
                },
            },
        },
    },
};

const revenueCOGSStackedBarChartOptions = {
    type: "bar",
    data: {
        labels: [], // Will be populated with dates
        datasets: [
            {
                label: "Revenue",
                backgroundColor: "rgba(255, 99, 132, 0.7)",
                data: [], // Will be populated with revenueData
            },
            {
                label: "COGS",
                backgroundColor: "rgba(255, 206, 86, 0.7)",
                data: [], // Will be populated with cogsData
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "yyyy-MM-dd",
                    displayFormats: {
                        day: "yyyy-MM-dd",
                    },
                },
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                stacked: true,
                display: true,
                title: {
                    display: true,
                    text: "Revenue / COGS",
                },
            },
        },
    },
};
function App() {
    const [sampleData, setSampleData] = useState(null);

    useEffect(() => {
        axios
            .get(API_URL)
            .then((response) => {
                setSampleData(response.data.payload.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!sampleData) {
        return <div>Loading...</div>;
    }

    const dates = sampleData.map((item) => new Date(item.date));
    const unitsData = sampleData.map((item) => item.units);
    const revenueData = sampleData.map((item) => item.revenue);
    const cogsData = sampleData.map((item) => item.cogs);
    const adsCostData = sampleData.map((item) => item.ads_cost);
    const adsCostLastYearData = sampleData.map(
        (item) => item.ads_cost_lastyear
    );
    const bestSellersRankData = sampleData.map(
        (item) => item.best_sellers_rank
    );
    const bestSellersRankLastYearData = sampleData.map(
        (item) => item.best_sellers_rank_lastyear
    );
    scatterPlotOptions.data.datasets[0].data = sampleData.map((item) => ({
        x: parseFloat(item.units),
        y: parseFloat(item.revenue),
    }));

    // Update revenueCOGSStackedBarChartOptions data
    revenueCOGSStackedBarChartOptions.data.labels = dates;
    revenueCOGSStackedBarChartOptions.data.datasets[0].data = revenueData;
    revenueCOGSStackedBarChartOptions.data.datasets[1].data = cogsData;

    unitsRevenueChartOptions.data.labels = dates;
    unitsRevenueChartOptions.data.datasets[0].data = unitsData;
    unitsRevenueChartOptions.data.datasets[1].data = revenueData;

    adsCostChartOptions.data.labels = dates;
    adsCostChartOptions.data.datasets[0].data = adsCostData;
    adsCostChartOptions.data.datasets[1].data = adsCostLastYearData;

    cogsChartOptions.data.labels = dates;
    cogsChartOptions.data.datasets[0].data = cogsData;

    bestSellersRankChartOptions.data.labels = dates;
    bestSellersRankChartOptions.data.datasets[0].data = bestSellersRankData;
    bestSellersRankChartOptions.data.datasets[1].data =
        bestSellersRankLastYearData;

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">
                Profasee Coding Challenge - Graphs (React)
            </h1>
            <div className="grid grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Units and Revenue Comparison
                    </h2>
                    <Line {...unitsRevenueChartOptions} />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Cost of Goods Sold (COGS) Comparison
                    </h2>
                    <Line {...cogsChartOptions} />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Daily Ad Cost Comparison
                    </h2>
                    <Line {...adsCostChartOptions} />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Best Sellers Rank Comparison
                    </h2>
                    <Line {...bestSellersRankChartOptions} />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Units vs. Revenue Scatter Plot
                    </h2>
                    <Scatter {...scatterPlotOptions} />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Revenue and COGS Comparison (Stacked Bar Chart)
                    </h2>
                    <Bar {...revenueCOGSStackedBarChartOptions} />
                </div>
            </div>
        </div>
    );
}

export default App;
