import React from 'react';
import Portfolio from './Portfolio';
import PropTypes from 'prop-types';
// import NewProjectControl from './NewProjectControl';
// TODO: Get original, hardcoded project list to show on portfolio comp
function PortfolioList(props) {
  return (
    <div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");
          .body {
            margin: -9px;
            height: 650px;
            font-family: "Oswald", sans-serif;
            letter-spacing: 2px;
            background: linear-gradient(to right, #283048, #859398);
            padding-top: 30px;
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
      <div className="body">
        <div className="flex-container">
          {props.portfolioList.map((project, index) => (
            <div className="flex-item">
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

const projectList = [
  {
    name: "Doctor Search",
    description:
      "A website where user can search for a doctor in greater Seattle area, by name or specialty, using API from BetterDoctor. Built with Javascript, Bootstrap, JQuery.",
    link: <em>https://github.com/crlucero/JS-DoctorAPI</em>
  },
  {
    name: "Angular Site Rebuild",
    description:
      "A remake of the NextOnTop Website using Angular and Javascript. I added my own twist to the site so that users can upload blog posts if they wish to.",
    link: <em>https://github.com/crlucero/Angular-SiteRebuild</em>
  },
  {
    name: "Hair Salon Simulation",
    description:
      "A hair salon application from the perspective of a management position. Users can add clients to stylists, stylists to specialties, and specialties to stylists. Built with C#, ASP.Net, MySQL.",
    link: <em>https://github.com/crlucero/Angular-SiteRebuild</em>
  },
  {
    name: "Chat App",
    description:
      "A project I created with some peers. It allows users to login, and enter a chatroom where they can chat with whoever is in the chatroom. Authentication and hosting are dependant on Firebase. The program is written in Angular, JavaScript/TypeScript.",
    link: <em>https://github.com/crlucero/Angular-SiteRebuild</em>,
    liveLink: "Live Link: 'https://epichat-d3162.firebaseapp.com/'"
  }
];

PortfolioList.propTypes = {
  portfolioList: PropTypes.array
};
export default PortfolioList;
