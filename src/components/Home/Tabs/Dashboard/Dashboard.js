import React from "react";
import Summary from "./Summary";
import AboutToExpire from "./AboutToExpire";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Summary />
      <Box sx={{ mt: 6 }} />
      <AboutToExpire />
    </>
  );
};

export default Dashboard;
