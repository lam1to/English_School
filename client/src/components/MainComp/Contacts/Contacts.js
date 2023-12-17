import ContactsRow from './ContactsRow';
import '../../../Styles/contacts.css';

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="_container">
        <h5>Наши контакты</h5>
        <ContactsRow />
      </div>
    </section>
  );
};
export default Contacts;
