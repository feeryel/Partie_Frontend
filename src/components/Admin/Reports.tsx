import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "../../_dist/Reports.css";
import { bindActionCreators } from "redux";
import { State, ReportActionCreators } from "../Redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { updateReport } from "../Redux/Actions/ReportAction";
const Reports = () => {
  const dispatch = useDispatch();

  const { getReport, deleteReport } = bindActionCreators(
    ReportActionCreators,
    dispatch
  );
  useEffect(() => {
    getReport();
  }, []);
  const reports = useSelector(
    (state: State) => state.ReportReducer.reportListe
  );

  const handleDelete = (reportId: string) => {
    deleteReport(reportId);
  };
  const handleUpdate = (reportId: string) => {
    updateReport(reportId);
  };
  console.log(reports);

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type of Bug</th>
            <th>Email</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report: any) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.typeBug}</td>
              <td>{report.email}</td>
              <td>{report.description}</td>
              <td>{report.image}</td>

              <td>
                {/* <button className="btn btn-primary mr-2">Edit</button> */}
                {/* <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(report.id)}
                >
                  Delete
                </button> */}
                <Button
                  variant="outlined"
                  onClick={() => handleUpdate(report.id)}
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(report.id)}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Reports;
