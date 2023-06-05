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
import { deleteUser, getUser } from "./components/Redux/Actions/UserAction";
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
import Profile from "./components/Profile";
import PrivateRoutes from "./components/PrivateRoutes";
import AdminPrivateRoutes from "./AdminPrivateRoute";
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
  // const { getUser, deleteUser } = bindActionCreators(
  //   UserActionCreators,
  //   dispatch
  // );

  const contacts = useSelector(
    (state: State) => state.ContactReducer.contactListe
  );
  useEffect(() => {
    getUser();
    getContact();
  }, []);

  return (
    <div className="page-container">
      {/* <div className="navbar-container ">
        <Navbar />
      </div> */}
      {/* <Divider type="vertical" /> */}

      <BrowserRouter>
        <Routes>
          {/* <DataContext.Provider value={data}> */}

          <Route
            path="/"
            element={
              <SharedLayout
              // data={data}
              // onLanguageChange={handleLanguageChange}
              />
            }
          >
            {/* <Route index element={<Section />} /> */}
            {/* <Route path="/" element={<Section />} /> */}
          </Route>
          <Route element={<AdminPrivateRoutes />}>
            <Route path="admin" element={<SharedLayoutDashboard />}>
              <Route path="/admin/Dashboard" element={<Dashboard />} />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/contacts" element={<Contacts />} />
              <Route path="/admin/reports" element={<Reports />} />
            </Route>
          </Route>

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/reportbug" element={<ReportBug />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/reportbug" element={<ReportBug />} /> */}

          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* <Route path="/*" element={<Section />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <div className="test">
        <Add />
        {contacts ? (
          contacts.map((el: any) => (
            <div style={{ width: "100px", border: "1px solid black" }}>
              <h1>{el?.Name}</h1>
              <h1>{el?.email}</h1>
              <h1>{el?.organisation}</h1>
              <h1>{el?.subject}</h1>
              <h1>{el?.message}</h1>
              <button onClick={() => deleteContact(el?.id)}>DELETE</button>
            </div>
          ))
        ) : (
          <h3>loading ..</h3>
        )}
      </div> */}
      {/* <Admin dataProvider={lb4Provider("http://localhost:5002")}>
        <Resource name="contact/contacts" />
        <Resource name="user/users" />
      </Admin> */}
    </div>
  );

  // <div className="container">
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<SharedLayout />}>
  //         <Route index element={<Home />} />
  //         <Route path="transfer" element={<Transfer />} />
  //         <Route path="stepper" element={<Stepper value={setRate} />} />
  //         <Route path="cascader" element={<Cascader />} />
  //         <Route path="datepicker" element={<DatePicker />} />
  //         <Route path="card" element={<FpCard />} />
  //       </Route>
  //     </Routes>

  //   </BrowserRouter>
  // </div>;
}

export default App;
