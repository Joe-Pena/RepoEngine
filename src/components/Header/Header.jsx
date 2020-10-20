import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import logo from '../../assets/repoenginelogo.png';

const Header = () => {
  return (
    <Navbar className="bg-white d-flex justify-content-center">
      <Image height={80} src={logo} />
    </Navbar>
  );
};

export default Header;
