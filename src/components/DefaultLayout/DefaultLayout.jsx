import Footer from "../Footer";
import Header from "../Header/Header";
import propTypes from 'prop-types'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.node.isRequired
}
