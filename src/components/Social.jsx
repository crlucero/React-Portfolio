import React from 'react';

function Social() {
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
        `}
      </style>
      <div className='body'>
          <h1>My social profiles will be posted soon</h1>
      </div>
    </div>
  );
}

export default Social;
