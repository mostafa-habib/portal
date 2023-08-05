import React from 'react'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Container = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight:"200px",
    boxShadow: "0 1px 6px #cecece",
    borderRadius:"7px",
  }));

export default Container