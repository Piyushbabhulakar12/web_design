import React from "react";

const Navbar = () => {
  const locationList = [
    {
      title: "Location , XYZ , Nevi Mumbai",
    },
    {
      title: "Location , XYZ , Mumbai",
    },
  ];

  const langList = [
    {
      title: "English",
    },
    {
      title: "Spanish",
    },
  ];

  return (
    <div style={{ position: "relative", zIndex: "100", padding: "20px" }}>
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className="nav-item dropdown"
              style={{
                background: "#f1f1f169",
                color: "#fff",
                padding: "4px",
              }}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLeft"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                <i class="bi bi-geo-alt"></i> Location , XYZ , Nevi Mumbai
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLeft"
                style={{ background: "#f1f1f169" }}
              >
                {locationList.map((data, index) => (
                  <li
                    key={index}
                    style={{
                      ":hover": { background: "rgb(255 255 255 / 0%)" },
                    }}
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        color: "#fff",
                        background: "rgb(255 255 255 / 0%)",
                      }}
                    >
                      <i class="bi bi-geo-alt"></i> {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li
              style={{
                background: "#f1f1f169",
                color: "#fff",
                padding: "4px",
              }}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuRight"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Language
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuRight"
                style={{ background: "#f1f1f169" }}
              >
                {langList.map((data, index) => (
                  <li
                    key={index}
                    style={{
                      ":hover": { background: "rgb(255 255 255 / 0%)" },
                    }}
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        color: "#fff",
                        background: "rgb(255 255 255 / 0%)",
                      }}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li
              className="nav-item"
              style={{
                background: "#f1f1f169",
                color: "#fff",
                padding: "4px",
                marginLeft: "10px",
              }}
            >
              <a className="nav-link" href="#" style={{ color: "#fff" }}>
                <i class="bi bi-bell-fill"></i>
              </a>
            </li>
            <li
              className="nav-item"
              style={{
                background: "#f1f1f169",
                color: "#fff",
                padding: "4px",
                marginLeft: "10px",
              }}
            >
              <a className="nav-link" href="#" style={{ color: "#fff" }}>
                <i className="bi bi-person"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
