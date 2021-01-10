import './Header.scss';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => (
  <div>
    <Navbar fixed="top">
      <NavbarBrand href="/">Wofder!</NavbarBrand>
    </Navbar>
  </div>
);

export default Header;
