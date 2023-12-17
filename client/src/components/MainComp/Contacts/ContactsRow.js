import { Card } from '@mui/material';
import { contactsConstants } from './ContactsConstants';
import Contact from './Contact';
const ContactsRow = () => {
  return (
    <Card className="contacts-row">
      {contactsConstants.social.map((oneContact) => (
        <Contact key={oneContact.id} contact={oneContact} />
      ))}
    </Card>
  );
};
export default ContactsRow;
