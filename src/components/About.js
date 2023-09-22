import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>About</h1>
      <p className={classes.text}>
        I am a self-taught web developer with a passion for crafting elegant and
        functional websites. My journey into the world of web development began
        as a personal quest to turn my creative ideas into digital realities.
        Through countless hours of self-study, experimentation, and dedication,
        I have honed my skills to become a proficient web developer.
      </p>
      <p className={classes.text}>
        My portfolio showcases a diverse range of projects that highlight my
        expertise in front-end and back-end development. From responsive and
        user-friendly interfaces to dynamic web applications, I have tackled
        various challenges to create compelling online experiences. I take pride
        in my ability to write clean, efficient code and my commitment to
        staying up-to-date with the latest industry trends and technologies.
      </p>
      <p className={classes.text}>
        As a self-taught developer, I bring a unique perspective to every
        project. My determination, problem-solving mindset, and passion for
        continuous learning drive me to deliver high-quality solutions. I am
        excited to collaborate with clients and teams to bring their digital
        visions to life and contribute to the ever-evolving web development
        landscape. Explore my portfolio to see the results of my self-driven
        journey in web development.
      </p>
    </div>
  );
};

export default About;
