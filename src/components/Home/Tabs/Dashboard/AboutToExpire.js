import React from "react";
import Container from "../../../common/Container";
import { Select } from "@mui/material";
import NoData from "../../../common/NoData";

const AboutToExpire = () => {
  const DaysList = [
    { id: 1, name: "1 Day" },
    { id: 2, name: "2 Days" },
    { id: 3, name: "3 Days" },
    { id: 4, name: "4 Days" },
    { id: 5, name: "5 Days" },
  ];
  const TableData = [];
  return (
    <div>
      <h4 className="text-start">About To Expire</h4>
      <Container>
        <div className="d-flex flex-row-reverse pt-3 px-3">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary dropdown-toggle stophover"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Number of days
            </button>
            <ul class="dropdown-menu">
              {DaysList.map((day) => (
                <li>
                  <span
                    class="dropdown-item"
                    style={{ cursor: "pointer" }}
                    value={day.id}
                    onClick={(e) => {
                      console.log("eee", day.id);
                    }}
                  >
                    {day.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {TableData.length ? (
            ""
        ) : (
        <NoData/>
        )}
      </Container>
    </div>
  );
};

export default AboutToExpire;
