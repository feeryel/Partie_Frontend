import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pie } from "@ant-design/plots";

import { getReport } from "../Redux/Actions/ReportAction";
import { ReportActionCreators, State, UserActionCreators } from "../Redux";
import { bindActionCreators } from "redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  const reports = useSelector(
    (state: State) => state.ReportReducer.reportListe
  );

  const { getReport } = bindActionCreators(ReportActionCreators, dispatch);
  useEffect(() => {
    getReport();
  }, []);

  const chartData = reports.map((report) => ({
    email: report.email,
    typeBug: report.typeBug,
    description: report.description,
    image: report.image,
  }));

  const data = [
    {
      type: "Janvier",
      value: chartData.length,
    },
    { type: "Février", value: chartData.length },
    { type: "Mars", value: chartData.length },
    { type: "Avril", value: chartData.length },
    { type: "Mai", value: chartData.length },
    { type: "Juin", value: chartData.length },
    { type: "Juillet", value: chartData.length },
    { type: "Aout", value: chartData.length },
    { type: "Septembre", value: chartData.length },
    { type: "octobre", value: chartData.length },
    { type: "Novembre", value: chartData.length },
    { type: "Décembre", value: chartData.length },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return <Pie {...config} />;
};

export default Dashboard;
