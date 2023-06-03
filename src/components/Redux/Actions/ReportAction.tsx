import {
  GET_REPORT,
  GET_REPORT_SUCCESS,
  GET_REPORT_FAIL,
  ADD_REPORT,
  ADD_REPORT_FAIL,
  ADD_REPORT_SUCCESS,
  DELETE_REPORT,
  DELETE_REPORT_SUCCESS,
  DELETE_REPORT_FAIL,
  UPDATE_REPORT,
  UPDATE_REPORT_FAIL,
} from "../Constante/ReportType";
import axios from "axios";
import { Dispatch } from "redux";

// Define TypeScript types for response data
interface ReportData {
  // Update the types based on your actual response data structure
}
export interface newReport {
  // <T>(arg: T): T;
}
export interface report {}
// Define TypeScript types for action objects
interface GetReportAction {
  type: typeof GET_REPORT;
}
interface AddReportSuccessAction {
  type: typeof ADD_REPORT_SUCCESS;
  payload: ReportData;
}

interface AddReportFailAction {
  type: typeof ADD_REPORT_FAIL;
  payload: any; // Update the type based on your error data type
}
interface DeleteReportSuccessAction {
  type: typeof DELETE_REPORT_SUCCESS;
  payload: ReportData;
}

interface DeleteReportFailAction {
  type: typeof DELETE_REPORT_FAIL;
  payload: any; // Update the type based on your error data type
}
interface UpdateReportSuccessAction {
  type: typeof DELETE_REPORT_SUCCESS;
  payload: ReportData;
}
interface UpdateReportFailAction {
  type: typeof UPDATE_REPORT_FAIL;
  payload: any; // Update the type based on your error data type
}

interface GetReportSuccessAction {
  type: typeof GET_REPORT_SUCCESS;
  payload: ReportData;
}

interface GetReportFailAction {
  type: typeof GET_REPORT_FAIL;
  payload: any; // Update the type based on your error data type
}
interface ADDReportAction {
  type: typeof ADD_REPORT;
  payload: any; // Update the type based on your error data type
}
interface DELETEReportAction {
  type: typeof DELETE_REPORT;
  payload: any; // Update the type based on your error data type
}
interface UPDATEReportAction {
  type: typeof UPDATE_REPORT;
  payload: any;
}

// Define the combined type for all possible actions
type ReportAction =
  | GetReportAction
  | GetReportSuccessAction
  | GetReportFailAction
  | ADDReportAction
  | AddReportSuccessAction
  | AddReportFailAction
  | DeleteReportFailAction
  | DeleteReportSuccessAction
  | DELETEReportAction
  | UPDATEReportAction
  | UpdateReportFailAction
  | UpdateReportSuccessAction;

export const getReport = () => async (dispatch: Dispatch<ReportAction>) => {
  dispatch({ type: GET_REPORT });
  // const accessToken = localStorage.getItem("token");
  try {
    let result = await axios.get("/reports", {
      // headers: {
      //   Authorization: accessToken ? `Bearer ${accessToken}` : "",
      // },
    });

    dispatch({ type: GET_REPORT_SUCCESS, payload: result.data });

    // Check if user is an admin and redirect to admin dashboard
    // if (result.data.isAdmin) {
    //   window.location.href = "/admin/dashboard";
    // }
  } catch (error) {
    dispatch({ type: GET_REPORT_FAIL, payload: error });
  }
};

export const addReport =
  (newReport: newReport) => async (dispatch: Dispatch<ReportAction>) => {
    try {
      let result = await axios.post("/report/create", newReport);
      dispatch({ type: ADD_REPORT, payload: result.data });
    } catch (error) {
      dispatch({ type: ADD_REPORT_FAIL, payload: error });
    }
  };
export const deleteReport =
  (id: any) => async (dispatch: Dispatch<ReportAction>) => {
    try {
      let result = await axios.delete(`/report/${id}/delete`);
      dispatch({ type: DELETE_REPORT, payload: result.data });
    } catch (error) {
      dispatch({ type: DELETE_REPORT_FAIL, payload: error });
      console.log(error);
    }
  };
export const updateReport =
  (id: any) => async (dispatch: Dispatch<ReportAction>) => {
    try {
      let result = await axios.put(`/report/${id}/update`);
      dispatch({ type: UPDATE_REPORT, payload: result.data });
    } catch (error) {
      dispatch({ type: UPDATE_REPORT_FAIL, payload: error });
      console.log(error);
    }
  };
