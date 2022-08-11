import { ContactsReviewForm } from './form/FormContacts';
import { ContactList } from './list/ContactsList';
import { Filter } from './filter/Filter';
import { Container, Title } from './App.styled';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsReviewForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
