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
import ExclamationCircleOutlined from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";

const Reports = () => {
  const dispatch = useDispatch();
  const { confirm } = Modal;

  const { getReport, deleteReport, updateReport } = bindActionCreators(
    ReportActionCreators,
    dispatch
  );

  const user = useSelector((state: State) => state.UserReducer.currentUser);

  const handleDelete = (reportId: string) => {
    confirm({
      title: "Confirm Delete",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to delete this report?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteReport(reportId);
        window.location.reload();
      },
    });
  };

  //search partie
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `http://localhost:9200/reports/_doc/_search`,
        {
          query: {
            prefix: {
              typeBug: {
                value: searchTerm,
              },
            },
          },
        }
      );
      setResults(response.data.hits.hits);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchResult = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9200/reports/_doc/_search`
      );
      setResults(response.data.hits.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSearchResult();
  }, []);

  //modal partie
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState({
    status: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="table-responsive">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Type of Bug</th>
            <th>Email</th>
            <th>Description</th>
            <th>status</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.length != 0 ? (
            results.map((result: any) => (
              <tr key={result.id}>
                {/* <td>{report.id}</td> */}
                <td>{result?._source?.typeBug}</td>
                <td>{result?._source?.email}</td>
                <td>{result?._source?.description}</td>
                <td>
                  {result?._source?.status}

                  {user?.role === "support" ? (
                    <button onClick={showModal}>
                      <EditIcon />
                    </button>
                  ) : (
                    ""
                  )}
                  <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={() => {
                      updateReport(result?._source?.id, status);
                      handleOk();
                    }}
                    onCancel={handleCancel}
                  >
                    <select
                      onChange={(e) =>
                        setStatus({ ...status, status: e.target.value })
                      }
                    >
                      <option value="">Choisi votre statut</option>
                      <option value="pas encore">pas encore</option>
                      <option value="fini">fini</option>
                    </select>
                  </Modal>
                </td>
                <td>
                  <a href={result?._source?.image}>
                    Click here to show the image
                  </a>
                </td>

                <td>
                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(result?._source?.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <span>{`Type bug doesn't exist`}</span>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Reports;
