import React from "react";
import Container from "./Container";
import NoDataIcon from "../Icons/nodata.svg";


const NoData = () => {
  return (
    <div className="py-5 px-3">
      <Container>
        <span>
          <img
            src={NoDataIcon}
            alt="Logo"
            // width="20"
            // height="20"
            className="d-inline-block py-3"
          />
        </span>
        <div><span style={{color:'#487184',fontSize:"21px",fontWeight:500}}>There is no data</span></div>
      </Container>
    </div>
  );
};

export default NoData;
