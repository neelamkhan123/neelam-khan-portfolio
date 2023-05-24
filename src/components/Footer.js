import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.section}>
      <ul className={classes.icons}>
        <li className={classes.icon}>
          <Link
            to="https://www.linkedin.com/in/neelam-khan-6008901a5"
            target="_blank"
            className={classes.link}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </li>
        <li className={classes.icon}>
          <Link
            to="https://github.com/neelamkhan123"
            target="_blank"
            className={classes.link}
          >
            <i className="fa-brands fa-github"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
