import React from 'react';
import './App.scss';
import {
  Badge,
  Button,
  Container,
  Col,
  Nav,
  Navbar, } from 'react-bootstrap';

import { products } from './constants/index';
import { number } from 'prop-types';

const Products = products;

const myCart: any = [];


const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Shopping cart</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link>
          My cart
          <Badge pill variant="info" className="ml-2">{myCart.length}</Badge>
        </Nav.Link>
        <div className="my-cart border position-absolute col-3">
          <ul>
            <li>
              <div className="d-flex justify-contont-start border-bottom py-3 px-2">
                <p className="mr-4 mb-0 font-weight-bold">name</p>
                <p className="mb-0">price</p>
                <Button variant="outline-danger" size="sm" className="ml-auto">X</Button>
              </div>
            </li>
          </ul>
          <div className="d-flex py-3 px-2">
            <p className="mr-auto mb-0">total price</p>
            <Button variant="primary">Check out</Button>
          </div>
        </div>
      </Nav>
    </Navbar>
      <Container>
        <div className="product-wrapper">
        {products.map(product => 
          <Col sm="4" className="product-item" key={product.id}>
            <img src={product.img} alt="placeholder" className="product-img"/>
            <p className="product-name font-weight-bold text-md mt-3 mb-0">{product.name}</p>
            <p className="product-price">$ {product.price}</p>
            <Button variant="outline-primary">Add to cart</Button>
          </Col>)}
        </div>
      </Container>
    </div>
  );
};



export default App;
