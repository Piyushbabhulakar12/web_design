import React from "react";
import app_store from "../assets/images/app-store.png";
import play_store from "../assets/images/google-play-badge.png";

const Footer = () => {
  const footer_bg = {
    background: "red",
    padding: "30px",
    background: "rgb(37,52,48)",
    background:
      "linear-gradient(6deg, rgba(37,52,48,1) 0%, rgba(53,76,70,1) 47%, rgba(64,94,86,1) 100%)",
  };

  return (
    <footer style={footer_bg} className="text-light pt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mb-4 p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <div className="d-flex justify-content-left">
              <img
                src={play_store}
                alt="Badge 1"
                style={{
                  height: "60px",
                  width: "150px",
                  objectFit: "contain",
                }}
              />
              <img
                src={app_store}
                alt="Badge 2"
                style={{
                  height: "60px",
                  width: "120px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="col-md-3 mb-4 p-3">
            <h5
              style={{
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Contact Details
            </h5>
            <ul className="list-unstyled" style={{ fontSize: "16px" }}>
              <li>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <i
                    class="bi bi-geo-alt"
                    style={{ color: "#c1be68", fontSize: "22px" }}
                  ></i>{" "}
                  123 Main St, City, Country
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <i
                    class="bi bi-telephone"
                    style={{ color: "#c1be68", fontSize: "22px" }}
                  ></i>{" "}
                  +1234567890
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <i
                    class="bi bi-envelope"
                    style={{ color: "#c1be68", fontSize: "22px" }}
                  ></i>{" "}
                  info@example.com
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 p-3">
            <h5
              style={{
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Get to Know Us
            </h5>
            <ul className="list-unstyled dot-list">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 p-3">
            <h5
              style={{
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Let Us Help You
            </h5>
            <ul className="list-unstyled dot-list">
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-4">
            Copyright @Demo LTD. 2024. All Rights reserved.
          </div>
          <div className="col-md-6 p-4">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              Follow us on
              <div style={{ display: "flex", gap: "10px" }}>
                <i class="bi bi-facebook" style={{ fontSize: "30px" }}></i>
                <i class="bi bi-instagram" style={{ fontSize: "30px" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
