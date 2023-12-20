import ContactsRow from './ContactsRow';
import '../../../Styles/contacts.css';

const Contacts = ({ t }) => {
  return (
    <section className="contacts">
      <div className="_container">
        <h5
          dangerouslySetInnerHTML={{
            __html: t('home.contacts.title'),
          }}
        />

        <ContactsRow />
      </div>
    </section>
  );
};
export default Contacts;
