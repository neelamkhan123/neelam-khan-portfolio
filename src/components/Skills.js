import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>Skills</h1>
      <ul className={classes.skills}>
        <li className={classes.skill}>HTML</li>
        <li className={classes.skill}>CSS</li>
        <li className={classes.skill}>SASS/SCSS</li>
        <li className={classes.skill}>JavaScript</li>
        <li className={classes.skill}>ReactJS</li>
        <li className={classes.skill}>TypeScript</li>
        <li className={classes.skill}>Node.js</li>
        <li className={classes.skill}>Responsive Design</li>
      </ul>
    </div>
  );
};

export default Skills;
