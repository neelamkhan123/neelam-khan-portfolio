import { Link } from "react-router-dom";

import calculator from "../img/projects/calculator.png";
import tipcalculator from "../img/projects/tipcalculator.png";
import cozy from "../img/projects/cozy.png";
import femgym from "../img/projects/femgym.png";
import instagram from "../img/projects/instagram.png";
import todolist from "../img/projects/todolist.png";
import trivia from "../img/projects/trivia.png";
import weather from "../img/projects/weather.png";

import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <div className={classes.container}>
        <ul className={classes.projects}>
          <Link
            to="https://cozy-react-neelam.netlify.app/"
            className={classes.project}
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>E-commerce Design Template</p>
            </div>
            <img src={cozy} alt="" className={classes.link} />
          </Link>

          <Link
            to="https://weather-webapp-neelam.netlify.app/"
            className={classes.project}
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>Weather WebApp</p>
            </div>
            <img src={weather} alt="" className={classes.link} />
          </Link>

          <Link
            to="https://to-do-list-react-neelam.netlify.app/"
            className={classes.project}
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>To-do List</p>
            </div>
            <img src={todolist} alt="" className={classes.link} />
          </Link>

          <Link
            to="https://tip-calculator-neelam.netlify.app/"
            className={classes.project}
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>Tip Calculator</p>
            </div>
            <img src={tipcalculator} alt="" className={classes.link} />
          </Link>

          <Link
            to="https://fem-gym-neelam.netlify.app/"
            className={classes.project}
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>Wesbite Design Template</p>
            </div>
            <img src={femgym} alt="" className={classes.link} />
          </Link>

          <Link
            to="https://design-clone-neelam.netlify.app/"
            className={classes.project}
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>Instagram Design Clone</p>
            </div>
            <img src={instagram} alt="" className={classes.link} />
          </Link>

          <Link
            to="https://trivia-app-neelam.netlify.app/"
            className={classes.project}
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>Trivia </p>
            </div>
            <img src={trivia} alt="" className={classes.link} />
          </Link>

          <Link
            className={classes.project}
            to="https://calculator-neelam.netlify.app/"
            target="_blank"
          >
            <div className={classes.wrapper}>
              <p>Calculator</p>
            </div>
            <img src={calculator} alt="" className={classes.link} />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Projects;
