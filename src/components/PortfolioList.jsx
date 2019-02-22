import React from 'react';
import Portfolio from './Portfolio';
import PropTypes from 'prop-types';
import TopProjects from './TopProjects';

// TODO: Get original, hardcoded project list to show on portfolio comp
function PortfolioList(props) {
  return (
    <div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");
          .body {
            margin: -9px;
            font-family: "Oswald", sans-serif;
            letter-spacing: 2px;
            background: linear-gradient(to right, #283048, #859398);
            padding-top: 5px;
            padding-bottom: 100px;
          }
          .flex-container {
            display: flex;
            flex-flow: column wrap;
            height: 100%;
            justify-content: space-around;
            margin-left: 10%;
            padding-bottom: 10px;
          }
          .flex-item {
            
            width: 40%;
            height: 40%;
            text-align: center;
          }
        `}
      </style>
      <div className='body'>
        <div classname='flex-container'>
            <TopProjects />
        </div>
        <div className='flex-container'>
          {props.portfolioList.map((project, index) => (
            <div className='flex-item'>
              <Portfolio
                name={project.name}
                description={project.description}
                link={project.link}
                liveLink={project.liveLink}
                key={project.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

PortfolioList.propTypes = {
  portfolioList: PropTypes.array
};
export default PortfolioList;
