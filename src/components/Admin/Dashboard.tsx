import React from "react";
import SidebarAdmin from "./SidebarAdmin";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { Line } from "react-chartjs-2";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="dashboard">
      {/* <h1>Dashboard - Admin Panel</h1> */}

      {/* <SidebarAdmin /> */}
      <div className="dashboard-container">
        <Typography component="h1">Dashboard</Typography>

        <div className="lineChart">
          <LineChart width={300} height={100} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line dataKey="uv" stroke="#82ca9d" />
          </LineChart>{" "}
        </div>

        {/* <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
