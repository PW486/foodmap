import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="position-absolute top-0 start-0 m-3 p-3 bg-white shadow rounded-4 d-flex align-items-center gap-3" style={{ zIndex: 10, maxWidth: "400px" }}>
      <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 overflow-hidden" style={{ width: "40px", height: "40px" }}>
          <img src={logo} alt="World Food Map Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div>
          <h1 className="h6 m-0 fw-bold" style={{ color: "#1e3a8a" }}>World Food Map</h1>
          <p className="m-0 small text-secondary" style={{fontSize: '0.8rem'}}>Zoom & Click to explore</p>
      </div>
    </header>
  );
};

export default Header;
