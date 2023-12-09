import Navbar from "./test";
import PropTypes from 'prop-types';
const Layout = ({ children }) => {
    return (
      <div>
        <Navbar/>
        <div className="content">{children}</div>
      </div>
    );
  };
  Layout.propTypes = {
    children: PropTypes.elementType.isRequired,
  };
  export default Layout;