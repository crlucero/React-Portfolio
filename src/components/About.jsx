import React from 'react'

function About() {
    return (
      <div>
        <style jsx>
          {`
            @import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");
            .body {
                display: flex;
                flex-flow: row;
                justify-content: flex-start;
                margin: -9px;
                height: 650px;
                font-family: "Oswald", sans-serif;
                letter-spacing: 2px;
                background: linear-gradient(to right, #283048, #859398);
            }
            .leftCol {
                background-color: #283048;
                height: 100%;
                width: 50%;  
            }
            .rightCol {
                background-color: #859398;
                height: 100%;
                width: 50%;
            }
            h1 {
                padding-top: 120px;
                padding-left: 10px;
                font-size: 112px;
                color: white;
                text-align: center;
            }
            p {
                font-size: 30px;
                padding: 15px;
                color: white;
            }
          `}
        </style>
        <div className='body'>
          <div className='leftCol'>
            <h1>ABOUT ME.</h1>
          </div>
          <div className='rightCol'>
            <p>I am a passionate web developer who has been in the field for about a year. Although fairly new, I love to design and create programs that are visually appealing. 
            </p>
            <p>My focus is building applications to the exact needs of a client. I strive to make their ideas come to life. 
            </p>
          </div>
        </div>
      </div>
      );
}

export default About