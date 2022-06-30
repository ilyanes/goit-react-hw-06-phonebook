import PropTypes from 'prop-types';

function Header({ title, children }) {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Header;
