import MainHeader from "./MainHeader.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
