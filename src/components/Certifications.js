import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpg";

import classes from "./Certifications.module.css";

const Certifications = () => {
  return (
    <div className={classes.section}>
      <img src={one} className={classes.img} alt="HTML + CSS Certification" />
      <img src={two} className={classes.img} alt="JavaScript Certification" />
      <img src={three} className={classes.img} alt="React Certification" />
    </div>
  );
};

export default Certifications;
