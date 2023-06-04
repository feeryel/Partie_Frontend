import React, { useEffect, useState } from "react";
import "../src/_dist/app.css";
import Navbar from "./components/Sidebar/Navbar";
import Section from "./components/Section";
import CarouselContainer from "./components/CarouselContainer";
import { Divider } from "antd";
import { bindActionCreators } from "redux";
import { Admin, Resource } from "react-admin";
import lb4Provider from "ra-data-lb4";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Magazine from "./components/Sidebar/Magazine";
import Pricing from "./components/Sidebar/Pricing";
import Roadmap from "./components/Sidebar/Roadmap";
import ContactUs from "./components/Sidebar/ContactUs";
import SignUp from "./components/Sidebar/SignUp";
import { dataEN } from "./components/data/EnglishData";
import { dataFR } from "./components/data/FrenchData";
import {
  ContactActionCreators,
  State,
  UserActionCreators,
} from "./components/Redux";
import { deleteUser } from "./components/Redux/Actions/UserAction";
import { deleteContact } from "./components/Redux/Actions/ContactAction";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Admin/Dashboard";
import SharedLayout from "./components/SharedLayout";
import Users from "./components/Admin/Users";
import Contacts from "./components/Admin/Contacts";
import SharedLayoutDashboard from "./components/SharedLayoutDashboard";
import ComingSoon from "./components/ComingSoon";
import Reports from "./components/Admin/Reports";
import ReportBug from "./components/ReportBug";
import PrivateRoute from "./components/PrivateRoute";
import ProfileUser from "./components/ProfileUser/ProfileUser";

// export const DataContext = React.createContext<any>(null);

function App() {
  const dispatch = useDispatch();
  const { getContact, deleteContact } = bindActionCreators(
    ContactActionCreators,
    dispatch
  );

  // // const [language, setLanguage] = useState(
  //   localStorage.getItem("language") || "English"
  // );
  // const [Data, setData] = useState(localStorage.getItem("language") || "");
  // useEffect(() => {
  //   localStorage.setItem("language", Data);
  // }, [Data]);

  // const handleLanguageChange = (selectedLanguage: string) => {
  //   setData(selectedLanguage);
  // };
  // const data_switch = (Data: any) => {
  //   switch (Data) {
  //     case "English":
  //       return dataEN;
  //     case "French":
  //       return dataFR;
  //     default:
  //       return dataEN;
  //   }
  // };

  // const data = data_switch(Data);
  const { getUser, deleteUser, loginUser } = bindActionCreators(
    UserActionCreators,
    dispatch
  );

  const contacts = useSelector(
    (state: State) => state.ContactReducer.contactListe
  );
  useEffect(() => {
    getUser();
    getContact();
  }, []);

  return (
    <div className="page-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Createaccount" element={<CreateAccount />} />{" "}
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>

          <Route></Route>

          <Route path="admin" element={<SharedLayoutDashboard />}>
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/contacts" element={<Contacts />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/reportbug" element={<ReportBug />} />

          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reportbug" element={<ReportBug />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
