import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import DialogTitlePT from "./DialogTitle";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import PopUpDialog from "../../../../common/PopUpDialog";
import Container from "../../../../common/Container";

const InvoiceDetails = ({ handleClose, intialValue }) => {
  const table1 = [
    { id: "creation_date", name: "Creation Date", value: "2023-03-15" },
    { id: "sending_date", name: "Sending Date", value: "2023-03-15" },
    { id: "expiry_date", name: "Expiry Date", value: "2023-03-22 07:05 PM" },
    { id: "payment_status", name: "Payment Status", value: "Expired" },
    { id: "payment_method", name: "Payment Method", value: "---" },
    { id: "payment_link", name: "Payment Link", value: "LINK" },
  ];

  const table2 = [
    {
      id: "customer_name",
      name: "Customer Name",
      value: "اشرف حمدي جاد الكريم محمد",
    },
    { id: "customer_mobile", name: "Customer Mobile", value: "01091847118" },
    {
      id: "customer_email",
      name: "Customer Email",
      value: "e.mohamednasser@gmail.com",
    },
    { id: "business_reference", name: "Business Reference", value: "23013587" },
  ];

  const invoice = [
    { id: "1", name: "Sub Total", value: "138.62 EGP" },
    { id: "2", name: "Discount", value: "-0 EGP" },
    { id: "3", name: "Service", value: "0EGP" },
    { id: "4", name: "Taxes", value: "0.00 EGP" },
    { id: "5", name: "Total Amount", value: "138.62 EGP" },
  ];

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  const [rows, rowchange] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);
  const [open, setOpen] = React.useState(false);

  const handleClickOpenInvoice = (data) => {
    console.log("data ==>", data);
    setOpen(true);
  };
  const handleCloseInvoice = () => {
    setOpen(false);
  };

  useEffect(() => {
    // fetch("http://localhost:8000/employee").then(resp => {
    //     return resp.json();
    // }).then(resp => {
    // rowchange(intialValue.tableData);
    // }).catch(e => {
    //     console.log(e.message)
    // })
  }, []);
  return (
    <div className="">
      <DialogTitlePT id="customized-dialog-title" onClose={handleClose}>
        Invoice Details
      </DialogTitlePT>
      <DialogContent dividers>
        <TableContainer
          sx={{ maxHeight: 450 }}
          style={{
            borderRadius: "7px",
            border: "1px solid rgba(0,0,0,.125)",
            boxShadow: "0 1px 6px #cecece",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {table1.map((table) => (
                  <TableCell style={{ fontWeight: "bold" }} key={table.id}>
                    {table.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {table1 &&
                  table1.map((table, i) => {
                    return (
                      <TableCell>
                        <span>{table.value}</span>
                      </TableCell>
                    );
                  })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 2 }} />

        <TableContainer
          sx={{ maxHeight: 450 }}
          style={{
            borderRadius: "7px",
            border: "1px solid rgba(0,0,0,.125)",
            boxShadow: "0 1px 6px #cecece",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {table2.map((table) => (
                  <TableCell style={{ fontWeight: "bold" }} key={table.id}>
                    {table.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {table2 &&
                  table2.map((table, i) => {
                    return (
                      <TableCell>
                        <span>{table.value}</span>
                      </TableCell>
                    );
                  })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 2 }} />

        <Container>
          <Grid container spacing={2} className="pt-4">
            <Grid item xs={3} md={3}>
              <span>image</span>
            </Grid>
            <Grid item xs={4} md={4}>
              <span>Porsche 911 Carrera GTS Comm.091055</span>
            </Grid>
            <Grid item xs={2} md={2}>
              <span>2 Item</span>
            </Grid>
            <Grid item xs={3} md={3}>
              <span>69.31 EGP</span>
            </Grid>
          </Grid>
          <hr />
          <div className="container px-5">
            {invoice.map((item) => (
              <div class="d-flex justify-content-between pt-2">
                <div>{item.name}</div>
                <div>{item.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </DialogContent>
      <PopUpDialog
        onClose={handleCloseInvoice}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"md"}
      >
        {/* <DialogBody handleClose={handleClose} intialValue={intialValue} /> */}
      </PopUpDialog>
    </div>
  );
};

export default InvoiceDetails;
