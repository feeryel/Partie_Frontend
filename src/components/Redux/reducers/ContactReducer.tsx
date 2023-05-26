import {
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  ADD_CONTACT,
  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
} from "../Constante/ContactType";
import {
  UPDATE_REPORT,
  UPDATE_REPORT_FAIL,
  UPDATE_REPORT_SUCCESS,
} from "../Constante/ReportType";

interface Contact {
  // Define the shape of the contact object
  // Update the types based on your actual data structure
  // For example: id: number, name: string, etc.
}

interface ContactState {
  contactListe: Contact[];
  errors: any | null;
  status: string;
}

interface ContactAction {
  type: string;
  payload: any; // Update the type based on your payload data type
}

const initialState: ContactState = {
  contactListe: [],
  errors: null,
  status: "",
};

const ContactReducer = (
  state: ContactState = initialState,
  { type, payload }: ContactAction
): ContactState => {
  switch (type) {
    case GET_CONTACT:
      return { ...state, status: "request send" };
    case GET_CONTACT_SUCCESS:
      return { ...state, status: "Success", contactListe: payload };
    case GET_CONTACT_FAIL:
      return { ...state, status: "Fail", errors: payload };
    case ADD_CONTACT:
      return { ...state, status: payload };
    case DELETE_CONTACT:
      return { ...state, status: payload };
    case DELETE_CONTACT_SUCCESS:
      return { ...state, status: payload };
    case DELETE_CONTACT_FAIL:
      return { ...state, status: payload };

    default:
      return state;
  }
};

export default ContactReducer;
