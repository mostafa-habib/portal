import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../../../Card";
import Total from "../../../Icons/total.svg";
import Paid from "../../../Icons/paid.svg";
import UnPaid from "../../../Icons/unpaid.svg";
import Expired from "../../../Icons/expired.svg";
import Refunded from "../../../Icons/refunded.svg";
import Canceled from "../../../Icons/canceled.svg";

const Summary = () => {
  const dataSet = [
    {
      id: 1,
      name: "Total",
      icon: Total,
      number: "258",
      price: "6,805,676.33",
    },
    {
      id: 1,
      name: "Paid",
      icon: Paid,
      number: "3",
      price: "972.18",
    },
    {
      id: 1,
      name: "Un Paid",
      icon: UnPaid,
      number: "78",
      price: "1,649,643.52",
    },
    {
      id: 1,
      name: "Expired",
      icon: Expired,
      number: "177",
      price: "5,155,060.63",
    },
    {
      id: 1,
      name: "Refunded",
      icon: Refunded,
      number: "0",
      price: "0.00",
    },
    {
      id: 1,
      name: "Canceled",
      icon: Canceled,
      number: "0",
      price: "0.00",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        {dataSet.map((data, index) => (
          <Grid item lg={2.6666666667} xs={12}>
            <Card>
              <img src={data.icon} alt="Total" />
              <div className="container pt-3">
                <p
                  className="m-0 pb-1"
                  style={{ fontSize: "14px", color: "#3d4254" }}
                >
                  {data.name}
                </p>
                <h3
                  style={{
                    color: "#005c83",
                    fontWeight: 530,
                    fontSize: "1.75rem",
                  }}
                >
                  {data.number}
                </h3>
                <p
                  style={{
                    color: "#3d4254",
                    fontWeight: 600,
                    fontSize: "17px",
                  }}
                >
                  {data.price}{" "}
                  <span
                    style={{
                      color: "#3d4254",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                  >
                    EGP
                  </span>
                </p>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Summary;
