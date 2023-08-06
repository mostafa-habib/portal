import React, { useEffect } from "react";
import TabsBar from "../Navs/TabsBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Tabs/Dashboard/Dashboard";
import SearchInvoice from "./Tabs/SearchInvoice";
import PaymentLink from "./Tabs/PaymentLink";
import InvoiceTemplate from "./Tabs/InvoiceTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/usersActions";

const HomeContents = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  },[])
  return (
    <>
      <TabsBar />
        <div className="container py-5">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search-e-invoice" element={<SearchInvoice />} />
            <Route path="/payment-link" element={<PaymentLink />} />
            <Route path="/invoice-template" element={<InvoiceTemplate />} />
          </Routes>
        </div>
    </>
  );
};

export default HomeContents;
