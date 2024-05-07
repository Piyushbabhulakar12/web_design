import React from "react";

const Card = ({ imageUrl, title, subTitle }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: "58vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "25px",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "#00000052",
          borderRadius: "25px",
        }}
      ></div>
      <div className="card-body">
        <div style={{ position: "absolute", top: "20px", left: "22px" }}>
          <div
            style={{
              background: "#4848486b",
              padding: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              borderRadius: "50px",
              display: "flex",
              gap: "7px",
              fontSize: "13px",
              alignItems: "center",
            }}
          >
            <i className="bi bi-star-fill" style={{ color: "#fff" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#fff" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#fff" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#fff" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#fff" }}></i>
            <div>
              <h6
                style={{
                  margin: "0px",
                  color: "#fff",
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                (1.1k)
              </h6>
            </div>
          </div>
        </div>
        <div
          className="card-body"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "15px",
            right: "15px",
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2 className="card-title">{title}</h2>
              <p className="card-text" style={{ color: "#f1f1f1" }}>
                {subTitle} | 4 Miles Away
              </p>
            </div>
            <div>
              <h2
                style={{
                  color: "#dbe18e",
                  fontSize: "35px",
                  fontWeight: "600",
                }}
              >
                40 OMR
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
