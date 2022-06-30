import Header from 'components/Header/Header';
import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <Header title={'PhoneBook'}>
        <Filter />
      </Header>
      <Section title={'Contacts'}>
        <Form />
        <ContactList />
      </Section>
    </div>
  );
};
