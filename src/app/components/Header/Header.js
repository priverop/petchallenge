import './Header.scss';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => (
  <div>
    <Navbar fixed="top">
      <NavbarBrand href="/">Woofder!</NavbarBrand>
    </Navbar>
  </div>
);

export default Header;
