import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>Neelam Khan</h1>
      <h3 className={classes["sub-title"]}>Self-taught Web Developer</h3>
    </div>
  );
};

export default Landing;
