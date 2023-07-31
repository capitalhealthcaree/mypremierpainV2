import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="d-xl-none" id="">
        <div id="" className="">
          <div className="">
            <div className="container">
              {/* <nav className=""> */}
                <div className="common-btn" style={{ display: "flex" }}>
                  <Link
                    href="/appointment/"
                    style={{
                      backgroundColor: "#0046c0",
                      color: "white",
                      padding: "10px 11px",
                    }}
                  >
                    Appointment
                  </Link>{" "}
                  <Link
                    href="tel:+14695624188"
                    style={{
                      backgroundColor: "#0046c0",
                      color: "white",
                      padding: "10px 12px",
                    }}
                  >
                    469-562-4188
                  </Link>
                </div>
              {/* </nav> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;