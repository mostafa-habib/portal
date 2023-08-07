import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../../../common/Card";
import Total from "../../../Icons/total.svg";
import Paid from "../../../Icons/paid.svg";
import UnPaid from "../../../Icons/unpaid.svg";
import Expired from "../../../Icons/expired.svg";
import Refunded from "../../../Icons/refunded.svg";
import Canceled from "../../../Icons/canceled.svg";
import PopUpDialog from "../../../common/PopUpDialog";
import DialogBody from "./Dialog/DialogBody";

const Summary = () => {
  const TableBodyData = [
    { id: "1", invoice_number: "1261561", customer_name: "amr", sending_date: "2023-03-15", order_date: "---", payment_status: "Expired", type: "Single"   },
    { id: "2", invoice_number: "1261561", customer_name: "amr", sending_date: "2023-03-15", order_date: "---", payment_status: "Expired", type: "Single"   },
    { id: "3", invoice_number: "1261561", customer_name: "amr", sending_date: "2023-03-15", order_date: "---", payment_status: "Expired", type: "Single"   },
    { id: "4", invoice_number: "1261561", customer_name: "amr", sending_date: "2023-03-15", order_date: "---", payment_status: "Expired", type: "Single"   },
    { id: "5", invoice_number: "1261561", customer_name: "amr", sending_date: "2023-03-15", order_date: "---", payment_status: "Expired", type: "Single"   },
    { id: "6", invoice_number: "1261561", customer_name: "amr", sending_date: "2023-03-15", order_date: "---", payment_status: "Expired", type: "Single"   },
    
  ];
  const dataSet = [
    {
      id: 1,
      name: "Total",
      icon: Total,
      number: "258",
      price: "6,805,676.33",
      tableData: TableBodyData,
    },
    {
      id: 1,
      name: "Paid",
      icon: Paid,
      number: "3",
      price: "972.18",
      tableData: TableBodyData,
    },
    {
      id: 1,
      name: "Un Paid",
      icon: UnPaid,
      number: "78",
      price: "1,649,643.52",
      tableData: TableBodyData,
    },
    {
      id: 1,
      name: "Expired",
      icon: Expired,
      number: "177",
      price: "5,155,060.63",
      tableData: TableBodyData,
    },
    {
      id: 1,
      name: "Refunded",
      icon: Refunded,
      number: "0",
      price: "0.00",
      tableData: TableBodyData,
    },
    {
      id: 1,
      name: "Canceled",
      icon: Canceled,
      number: "0",
      price: "0.00",
      tableData: TableBodyData,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [intialValue, setIntialValue] = React.useState([]);


  const handleClickOpen = (data) => {
    console.log("data ==>",data);
    setIntialValue(data)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIntialValue([])
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        {dataSet.map((data, index) => (
          <Grid item lg={2.6666666667} xs={12}>
            <Card onClick={() => handleClickOpen(data)}>
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
      <PopUpDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"md"}
      >
        
        <DialogBody handleClose={handleClose} intialValue={intialValue} />
      </PopUpDialog>
    </Box>
  );
};

export default Summary;
