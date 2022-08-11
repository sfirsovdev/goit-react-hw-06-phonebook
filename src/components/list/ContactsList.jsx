import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsTitle, List } from './ContactsList.styled';
import { getVisibleContacts } from '../../redux/contactsSelectors';
import { ContactsItem, DeleteButton, Text } from './ContactsItem.styled';
import { itemsSlice } from '../../redux/myContacts/contactsSlice';

export const ContactList = () => {
  const items = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <div>
      <ContactsTitle>Contacts list</ContactsTitle>
      <List>
        {items.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Text>Name: {name}</Text>
              <Text>Number: {number}</Text>
              <DeleteButton
                type="button"
                id={id}
                onClick={evt =>
                  dispatch(itemsSlice.actions.deleteContact(evt.target.id))
                }
              >
                Delete
              </DeleteButton>
            </ContactsItem>
          );
        })}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};
