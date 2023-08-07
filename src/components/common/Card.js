import React from 'react'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Card = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height:"240px",
    borderRadius:"7px",
    cursor:"pointer",
    "&:hover": {
        boxShadow: "0 3px 6px #b2b2b3"
      },
  }));

export default Card