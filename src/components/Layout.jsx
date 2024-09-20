import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className="max-w-[1440px] mx-auto min-w-[375px] md:py-32">
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
