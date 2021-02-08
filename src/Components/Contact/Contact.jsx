import NameText from "../NameText/NameText";
import Form from "./Form";
import SocialMedia from "./SocialMedia";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <NameText text="Contact" />
      <Form />
      <SocialMedia />
    </div>
  );
};
export default Contact;
