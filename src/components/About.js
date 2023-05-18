import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>About</h1>
      <h3 className={classes.text}>
        lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        dolorem distinctio impedit obcaecati officia assumenda debitis excepturi
        ratione dolores qui.
      </h3>
    </div>
  );
};

export default About;
