import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";
const Form = () => {
  const [inputHandler, setInputHandler] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b4p0dql",
        "template_ldmo9re",
        e.target,
        "user_5Mz6LOjRdRi5pa2jEtEFi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInputHandler({
      user_name: "",
      user_email: "",
      message: "",
    });
  }
  const changeValue = (e) => {
    setInputHandler((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <form onSubmit={sendEmail} className={styles.form}>
        <label>Name:</label>
        <input
          className={styles.inputs}
          required
          onChange={changeValue}
          placeholder="Your Name..."
          value={inputHandler.user_name}
          name="user_name"
          type="text"
        />

        <label>Email:</label>
        <input
          className={styles.inputs}
          required
          onChange={changeValue}
          value={inputHandler.user_email}
          placeholder="Your e-mail..."
          name="user_email"
          type="email"
        />

        <label>Message:</label>
        <textarea
          className={styles.inputs}
          required
          onChange={changeValue}
          value={inputHandler.message}
          placeholder="Your message"
          name="message"
          type="text"
        />
        <input className={styles.submit} type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Form;
