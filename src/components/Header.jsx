import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
      <div>
        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,700');
            }
            .links {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                text-align: center;
                padding-left: 20%;
                padding-right: 20%;
                padding-top: 1%;
                padding-bottom: 1%;
                font-family: 'Oswald', sans-serif;
                letter-spacing: 2px;
                background: linear-gradient(to right, #9cb0ca, #647080, #282E34);
            }
          `}
        </style>
          <div className="links">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
            <Link
              to="projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              Projects
            </Link>
            <Link
              to="social"
              style={{ textDecoration: "none", color: "white" }}
            >
              Social
            </Link>
          </div>
      </div>
    );
}

export default Header