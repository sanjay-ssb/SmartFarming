import React from "react";
import "../index.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer className=" justify-content-center  border-bottom ">
          <div className="text-center p-4 ">
            © 2022 Copyright:
            <span className="text-reset fw-bold">Smart-Farming </span>
            <span>
              <a
                href="https://www.instagram.com/shubham_bhatt_2/"
                className="mx-2"
              >
                <img
                  className="zoom img-fluid"
                  src={require("../photos/instagram.png")}
                  alt="instagram"
                />
              </a>
            </span>
            <span>
              <a href="mailto: shubhbhatt101@gmail.com">
                <img
                  src={require("../photos/gmail.png")}
                  className="gmail zoom"
                  alt="gmail"
                />
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
