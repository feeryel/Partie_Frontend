import React from "react";
import { Route, Routes } from "react-router-dom";
import Magazine from "./Magazine";
import Pricing from "./Pricing";
import Roadmap from "./Roadmap";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";

const CreateRoutes = () => {
  return (
    <Routes>
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default CreateRoutes;
