import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

import { addContact } from 'redux/actions';

export default function Form({ onSubmit }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  const contactName = useSelector(state =>
    state.contacts.items.some(contact => contact.name === name)
  );

  // console.log('contact', contactName);

  const newContact = {
    id: shortid.generate(),
    name: name,
    number: number,
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contactName) {
      alert(`${name} is already in the contact`);
      reset();
    } else {
      dispatch(addContact(newContact));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameInputId}
          onChange={handleChange}
        />

        <div className="bar"></div>
      </div>

      <div>
        <input
          type="tel"
          name="number"
          placeholder="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={numberInputId}
          onChange={handleChange}
        />

        <div className="bar"></div>
      </div>
      <button type="submit">add contact</button>
    </form>
  );
}
