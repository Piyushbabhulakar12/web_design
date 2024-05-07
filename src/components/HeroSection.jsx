import React from "react";
import backgroundImage from "../assets/images/bg.jpg";
import Navbar from "./Navbar";

const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#1118119c",
    zIndex: 1,
  };

  const button_click = {
    width: "250px",
    background: "#c1be68",
    color: "#fff",
    height: "80px",
    fontSize: "28px",
    fontWeight: "550",
  };

  const button_unclick = {
    width: "250px",
    background: "#c1be6800",
    color: "#fff",
    height: "80px",
    fontSize: "28px",
    fontWeight: "500",
  };

  return (
    <>
      <div className="bg_image" style={sectionStyle}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <Navbar />
        </div>
        <div style={overlayStyle}></div>

        <div className="container" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="container" style={{ marginTop: "300px" }}>
                <h1
                  style={{
                    fontWeight: "700",
                    fontSize: "65px",
                    color: "#c1be68",
                  }}
                >
                  DISCOVER{" "}
                  <span style={{ color: "#fff", fontWeight: "500" }}>
                    THE BEST
                  </span>{" "}
                  ACTIVITIES{" "}
                  <span style={{ color: "#fff", fontWeight: "500" }}>
                    FOR YOU
                  </span>
                </h1>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div class="position-relative input-group mb-3 mt-5">
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-pill "
                        style={{
                          height: "70px",
                          backgroundColor: "#20201a1c",
                          color: "#fff",
                          backdropFilter: "blur(10px)",
                          border: "3px solid #c1be687d",
                          "::placeholder": {
                            color: "#fff",
                          },
                        }}
                        placeholder="Search Activities..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        class="btn btn-lg rounded-pill position-absolute  border-0 "
                        type="button"
                        style={{
                          right: "0",
                          top: "0",
                          bottom: "0",
                          zIndex: 100,
                          width: "250px",
                          background: "#c1be68",
                          color: "#fff",
                        }}
                        id="button-addon2"
                      >
                        <i class="bi bi-search"></i> Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "140px" }}>
                <div class="d-grid gap-10 d-md-block ">
                  <button
                    class="btn btn-lg btn-lg rounded-5 rounded-bottom-0"
                    type="button"
                    style={button_click}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          height: "50px",
                          width: "50px",
                          background: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50px",
                          color: "#c1be68",
                        }}
                      >
                        <i class="bi bi-person-walking"></i>
                      </div>{" "}
                      <div>Activities</div>
                    </div>
                  </button>
                  <button
                    class="btn btn-lg btn-lg rounded-5 rounded-bottom-0"
                    type="button"
                    style={button_unclick}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          height: "50px",
                          width: "50px",
                          background: "#ffffff38",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50px",
                          color: "#fff",
                        }}
                      >
                        <i class="bi bi-car-front-fill"></i>
                      </div>{" "}
                      <div>Rent a Car</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
