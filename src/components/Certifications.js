import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpg";

import classes from "./Certifications.module.css";

const Certifications = () => {
  return (
    <div className={classes.section}>
      <img src={one} className={classes.img} />
      <img src={two} className={classes.img} />
      <img src={three} className={classes.img} />
    </div>
  );
};

export default Certifications;
