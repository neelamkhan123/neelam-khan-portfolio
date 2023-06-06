import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form method="POST" action="https://formsubmit.co/neelamkhanwork@gmail.com">
      <div className={classes.form}>
        <div className={`${classes.data1} ${classes.data}`}>
          <label htmlFor="name">Your name</label>
          <input type="text" name="name" id="name" className={classes.input} />
        </div>
        <div className={`${classes.data2} ${classes.data}`}>
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            name="email"
            id="email"
            className={classes.input}
          />
        </div>
        <div className={`${classes.data3} ${classes.data}`}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className={classes.input}
          />
        </div>
        <div className={`${classes.data4} ${classes.data}`}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className={classes.input}
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
