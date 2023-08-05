import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TabsBar = () => {
  const tabs = [
    {
      id: "1",
      name: "Dashboard",
      dropdown: false,
      items: [],
      link:"/dashboard"
    },
    {
      id: "2",
      name: "Search E-invoice",
      dropdown: false,
      items: [],
      link:"/search-e-invoice"
    },
    {
      id: "3",
      name: "Single invoice",
      dropdown: true,
      items: ["New Customer", "Existing Customer"],
    //   link:"/single-invoice"
    },
    {
      id: "4",
      name: "Group invoice",
      dropdown: true,
      items: ["Search Group E-invoice", "Create Group E-invoice"],
    },
    {
      id: "5",
      name: "Payment Link",
      dropdown: false,
      items: [],
      link:"/payment-link"
    },
    {
      id: "6",
      name: "Recurring invoice",
      dropdown: true,
      items: ["New Customer", "Existing Customer"],
    },
    {
      id: "7",
      name: "Invoice template",
      dropdown: false,
      items: [],
      link:"/invoice-template"
    },
  ];

  const [activeTab,setActiveTab] = useState('1')

  const handleActiveTab = (id) => {
    setActiveTab(id)
  };

  useEffect(() => {

  },[activeTab])

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom  flex-column flex-sm-row"
      style={{ backgroundColor: "#fcfdff" }}
    >
      <div className="container">
        <button
          className="navbar-toggler me-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTabs"
          aria-controls="navbarTabs"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTabs">
          {tabs.map((tab, index) => (
            <>
              {tab?.dropdown ? (
                <div
                  className="nav-item dropdown flex-sm-fill text-sm-center nav-link  active py-1 rounded profile"
                  id={index}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    aria-current="page"
                    href="#"
                  >
                    {tab.name}
                  </a>
                  <ul class="dropdown-menu " style={{ width: "100%" }}>
                    {tab?.items?.map((item) => (
                      <li>
                        <a class="dropdown-item text-wrap" href="#">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  className="flex-sm-fill text-sm-center nav-link  active py-1 rounded profile"
                  aria-current="page"
                  to={tab.link}
                  id={index}
                  onClick={() => handleActiveTab(tab.id)}
                  style={tab.id === activeTab ? {color:"rgb(0 108 152)",fontWeight:600} : null}
                >
                  {tab.name}
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabsBar;
