import { AnyAction } from "redux";
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
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_FAIL,
} from "../Constante/ReportType";

interface Report {
  email: any;
  typeBug: any;
  description: any;
  image: any;
  // Define the shape of the contact object
  // Update the types based on your actual data structure
  // For example: id: number, name: string, etc.
}
interface ReportState {
  reportListe: Report[];
  errors: any | null;
  status: string;
  isAuthentificated: boolean;
}

interface ReportAction {
  type: string;
  payload: any; // Update the type based on your payload data type
}

const initialState: ReportState = {
  reportListe: [],
  errors: null,
  status: "",
  isAuthentificated: false,
};
const ReportReducer = (
  state: ReportState = initialState,
  { type, payload }: ReportAction
): ReportState => {
  switch (type) {
    case GET_REPORT:
      return { ...state, status: "request send" };
    case GET_REPORT_SUCCESS:
      return { ...state, status: "Success", reportListe: payload };
    case GET_REPORT_FAIL:
      return { ...state, status: "Fail", errors: payload };
    case ADD_REPORT:
      return { ...state, status: payload };
    case ADD_REPORT_SUCCESS:
      return { ...state, status: payload };
    case ADD_REPORT_FAIL:
      return { ...state, status: payload };
    case DELETE_REPORT:
      return { ...state, status: payload };
    case DELETE_REPORT_SUCCESS:
      return { ...state, status: payload };
    case DELETE_REPORT_FAIL:
      return { ...state, status: payload };
    case UPDATE_REPORT:
      return { ...state, status: payload };
    case UPDATE_REPORT_SUCCESS:
      return { ...state, status: payload };
    case UPDATE_REPORT_FAIL:
      return { ...state, status: payload };
    default:
      return state;
  }
};

export default ReportReducer;
