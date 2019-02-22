import React from 'react';
import { Link } from 'react-router-dom'
import ReactPic from '../assets/images/react.png'
import JavaScript from '../assets/images/javascript.png'
import CSharp from '../assets/images/cshrp.png'
import HTML from '../assets/images/HTML_Logo.png'
import CSS from '../assets/images/css.png'
import Me from '../assets/images/me.png'



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
            height: 125vh;
            font-family: "Oswald", sans-serif;
            letter-spacing: 2px;
            background: linear-gradient(to right, #283048, #859398);
          }
          .content {
            background-color: #494343;
            border-radius: 8px;
            width: 66%;
          }
          h1 {
            text-align: center;
            padding-top: 1px;
            font-size: 36px;
            color: white;
          }
          p {
            color: white;
            text-align: center;
            margin-bottom: 20px;
            font-size: 20px;
          }
          .tools {
              display: flex;
              justify-content: space-between;
              border-top: solid;
              width: 50%;
              margin: auto;
              padding-top: 35px;
          }
          .avatar {
              margin-top: 10px;
              margin-left: 37%;
          }

        `}
      </style>
      <div className='body'>
        <div className='content'>
          <div className='avatar'>
            <img src={Me} />
          </div>
          <h1>Hello, I'm Cristian Lucero.</h1>
          <hr />
          <p>I am a front-end web developer.</p>
          <p>
            If you would like to get to know a little about me,
            <Link to='/about' style={{ textDecoration: 'none', color: 'skyblue' }}> click here</Link>.</p>
          <p><Link to='portfolio' style={{ textDecoration: 'highlight', color: 'orange' }}>Click here</Link> if you don't want to get to know me, and just want to see some of my work.</p>
          <p>You could also just<Link to='social' style={{ textDecoration: 'none', color: 'green' }}> click here </Link>if you wish to check out my social sites.</p>
        </div>
        <div className='tools'>
        {/* React */}
            <div> 
                <img src={ReactPic}/>
            </div>
        {/* CSS */}
            <div> 
                <img src={CSS}/>
            </div>
        {/* JavaScript */}
            <div>
                <img src={JavaScript}/>
            </div>
        {/* HTML */}
            <div>
                <img src={HTML}/>
            </div>
        {/* CSharp */}
            <div>
                <img src={CSharp}/>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
