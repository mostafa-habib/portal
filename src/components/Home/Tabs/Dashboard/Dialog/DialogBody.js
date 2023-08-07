import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import DialogTitlePT from "./DialogTitle";
import {
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
import InvoiceDetails from "./InvoiceDetails";

const DialogBody = ({ handleClose, intialValue }) => {
  const columns = [
    { id: "invoice_number", name: "Invoice Number" },
    { id: "customer_name", name: "Customer Name" },
    { id: "sending_date", name: "Sending Date" },
    { id: "order_date", name: "Order Date" },
    { id: "payment_status", name: "Payment Status" },
    { id: "type", name: "Type" },
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
    console.log("data ==>",data);
    setOpen(true);
  };
  const handleCloseInvoice = () => {
    setOpen(false);
  };

  useEffect(() => {
    // fetch("http://localhost:8000/employee").then(resp => {
    //     return resp.json();
    // }).then(resp => {
    rowchange(intialValue.tableData);
    // }).catch(e => {
    //     console.log(e.message)
    // })
  }, []);

  return (
    <div className="">
      <DialogTitlePT id="customized-dialog-title" onClose={handleClose}>
        {intialValue.name}
      </DialogTitlePT>
      <DialogContent dividers>
        <TableContainer
          sx={{ maxHeight: 450 }}
          style={{ borderRadius: "7px", border: "1px solid rgba(0,0,0,.125)" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: "#f8f9fa" }}
                    key={column.id}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows
                  .slice(page * rowperpage, page * rowperpage + rowperpage)
                  .map((row, i) => {
                    return (
                      <TableRow key={i}>
                        {columns &&
                          columns.map((column, i) => {
                            let value = row[column.id];
                            return (
                              <TableCell key={value}>
                                {column.id === "invoice_number" ? (
                                  <Tooltip
                                    arrow
                                    placement="top"
                                    title="View Invoice Details"
                                  >
                                    <span className="invoicNumber" onClick={() => handleClickOpenInvoice(row)}>
                                      {value}
                                    </span>
                                  </Tooltip>
                                ) : (
                                  <span>{value}</span>
                                )}
                              </TableCell>
                            );
                          })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowperpage}
          page={page}
          count={rows.length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </DialogContent>
      <PopUpDialog
        onClose={handleCloseInvoice}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"md"}
      >
        
        <InvoiceDetails handleClose={handleCloseInvoice}  />
      </PopUpDialog>
    </div>
  );
};

export default DialogBody;
