import { List, Item, Text, Button } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
// import { getContacts, getFilterValue } from 'redux/contactsSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';

export function ContactList() {
  const { data, isFetching, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  // const dispatch = useDispatch();

  // const filter = useSelector(getFilterValue);
  // const contacts = useSelector(getContacts);

  // const visibleContacts = () => {
  //   const normalizeFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizeFilter)
  //   );
  // };

  return (
    <div>
      {error && <Text>Sorry something wrong! :(</Text>}
      {isFetching ? (
        <Loader />
      ) : (
        <List>
          {data.map(contact => {
            return (
              <Item key={contact.id}>
                <Text>
                  {contact.name}: {contact.phone}
                </Text>
                <Button type="button" onClick={() => deleteContact(contact.id)}>
                  Delete
                </Button>
              </Item>
            );
          })}
        </List>
      )}
    </div>
  );
}
