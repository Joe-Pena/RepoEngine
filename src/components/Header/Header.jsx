import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import logo from '../../assets/repoenginelogo.png';

const Header = () => {
  return (
    <Navbar sticky="top" className="justify-content-center shadow-sm">
      <Image src={logo} fluid="sm" className="col-8" />
    </Navbar>
  );
};

export default Header;
