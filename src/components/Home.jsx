import React from 'react';
import { Link } from 'react-router-dom'

// TODO: Implement icon images to contact 


function Home() {
  return (
    <div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");
          .body {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin: -9px;
            height: 570px;
            font-family: "Oswald", sans-serif;
            letter-spacing: 2px;
            background: linear-gradient(to right, #283048, #859398);
          }
          .content {
            margin-top: 80px;
            margin-bottom: auto;
            border: solid;
            background-color: #494343;
            border-radius: 8px;
            width: 66%;
          }
          h1 {
            text-align: center;
            padding-top: 10px;
            font-size: 36px;
            color: white;
          }
          p {
            color: white;
            text-align: center;
            margin-bottom: 20px;
            font-size: 20px;
          }
          .social-links {
              display: flex;
              justify-content: space-between;
              border: solid;
              border-radius: 20px;
              width: 50%;
              margin: auto;
          }
        `}
      </style>
      <div className="body">
        <div className="content">
          <h1>Hello, I'm Cristian Lucero.</h1>
          <hr />
          <p>I am a front-end web developer.</p>
          <p>
            If you would like to get to know a little about me,{" "}
            <Link to="/about" style={{ textDecoration: "none", color: "black" }}>click here</Link>.</p>
          <p><Link to="projects" style={{ textDecoration: "none", color: "black" }}>Click here</Link>if you don't want to get to know me, and just want to see some of my work.</p>
          <p>You could also just<Link to="social" style={{ textDecoration: "none", color: "black" }}> click here </Link>if you wish to check out my social sites.</p>
        </div>
        <div className='social-links'>
        {/* LinkedIn */}
            <div> 
                {/* <img src={linkedin}/> */}
            </div>
        {/* Github */}
            <div>
                {/* <img src={github}/> */}
            </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
