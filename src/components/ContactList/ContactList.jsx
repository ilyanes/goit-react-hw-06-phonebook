import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <table>
      <tbody>
        {contacts.map(({ id, name, number }) => {
          return (
            <tr id={id} key={id}>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
