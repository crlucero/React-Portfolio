import React from "react";
import PropTypes from "prop-types";

function Portfolio(props) {
  return (
    <div>
      <style jsx>
        {`
          .body {
            border-radius: 8px;
            box-shadow: 5px 5px 5px 8px rgba(0, 0, 0, 0.1);
          }
          .body::after {
            content: "";
            border-radius: 5px;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            opacity: 0;
            -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .body:hover {
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
            transition: box-shadow 0.3s ease-in-out;
            -webkit-transform: scale(1.25, 1.25);
            transform: scale(1.25, 1.25);
          }
          .title {
            background: linear-gradient(to right, #283048, #859398);
            border-radius: 6px 6px 0px 0px;
            padding: 2px;
          }
          h3, h5 {
            color: white;
          }
          h5 {
              font-size: 16px;
          }
          p {
            text-align: center;
            font-size: 14px;
            padding-bottom: 10px;
            color: white;
            font-weight: light;
          }
          .link {
              font-style: italic;
          }
        `}
      </style>
      <div className="body">
        <div>
          <div className="title">
            <h3> {props.name} </h3>
          </div>
            <h5> {props.description} </h5>
            <p> GitHub Link: {props.link} </p>
            <div className='link'>
                <p>
                    <a href="https://epichat-d3162.firebaseapp.com/">
                        {props.liveLink}
                    </a>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
Portfolio.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  liveLink: PropTypes.string
};
export default Portfolio;
