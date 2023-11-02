// src/components/FilterNav.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Button, Navbar} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



const FilterNav = ({ applyFilter }) => {
  const [openNow, setOpenNow] = useState(false);
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [checked, setChecked] = useState(false);

    const handleApplyFilter = () => {
        applyFilter({ openNow, price, category });
    };

  return (
    <Navbar expand="sm" bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Filter By :</Navbar.Brand>
        {/* <ToggleButton
        className=""
        id="toggle-check"
        type="checkbox"
        variant="outline-light"
        checked={openNow}
        value="1"
        size='sm'
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Open Now
      </ToggleButton> */}
        <label className='openNow'>
         <input type="checkbox" value={openNow} onChange={() => setOpenNow(!openNow)} />
                Open Now
       </label>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Price" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Low</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Medium</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">High</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" value={category} onChange={(e) => setCategory(e.target.value)} onClick={handleApplyFilter}>Seafood</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" value={category}>Sundanese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" value={category}>Japanese</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant='outline-primary'>CLEAR ALL</Button>
      </Container>
    </Navbar>
  );
};

export default FilterNav;
