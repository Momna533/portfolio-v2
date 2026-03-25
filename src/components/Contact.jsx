import { useGlobalContext } from "../context/Context";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { contactRef } = useGlobalContext();
  return (
    <div className="contact row container" id="contact" ref={contactRef}>
      <div className="container__content column contact__content">
        <div className="row contact__info">
          <div className="column column__left column__gap1 contact__info__left">
            <div className="h4 oswald f__w2 t__ca">My Contacts</div>
            <div className="sh3 grey2">Contact me to get my services</div>
            <div className="h4 oswald f__w2 t__ca">Address</div>
            <div className="sh3">Faisalabad Pakistan</div>
            <div className="h4 oswald f__w2 t__ca">Phone</div>
            <div className="sh3">+92-123456789</div>
            <div className="h4 oswald f__w2 t__ca">Email</div>
            <div className="sh3">momnadev533gb@gmail.com</div>
          </div>
          <div className="column column__left column__gap1 contact__info__right">
            <div className="h4 oswald f__w2 t__ca">Quick contact form</div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
