import React from "react";
import "../../_dist/SidebarAdmin.css";
// import logokwk from "../../../public/images/logokwk.svg";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ReportIcon from "@mui/icons-material/Report";
import { TreeView } from "@material-ui/lab";
import { TreeItem } from "@material-ui/lab";

const SidebarAdmin = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src="../images/logokwk.svg" alt="KWK" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      {/* <Link to="/admin/products">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          {/* <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
        </Link>  */}

      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/contacts">
        <p>
          <RateReviewIcon />
          Contacts
        </p>
      </Link>
      <Link to="/admin/reports">
        <p>
          <ReportIcon />
          Reports
        </p>
      </Link>
      <Link to="/admin/FAQs">
        <p>
          <QuizIcon />
          FAQs
        </p>
      </Link>
      <Link to="/admin/settings">
        <p>
          <SettingsIcon />
          Settings
        </p>
      </Link>
    </div>
  );
};

export default SidebarAdmin;
