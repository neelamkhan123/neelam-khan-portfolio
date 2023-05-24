import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>About</h1>
      <h3 className={classes.text}>
        My name is Neelam Khan, I am a front-end developer based in London, UK.
        Starting with simple HTML/CSS and JavaScript, I now specialise in
        ReactJS.{" "}
      </h3>
      <h3 className={classes.text}>
        I am passionate about web design and working with other creative minds
        in order to create new and innovative web applications that appeal to
        the growing consumer expectations.
      </h3>
    </div>
  );
};

export default About;
