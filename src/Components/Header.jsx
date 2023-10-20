import React from 'react'
import {Navbar, Container, Badge, Button, Form, Stack, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar expand="lg" bg="primary" className='position-fixed w-100 ' style={{zIndex:'1',top:'0'}}>
    <Container>
      <Link to={"/"} className="navbar-brand fw-bolder"><i className="fa-solid fa-cart-shopping me-2"></i>E-cart</Link>
      <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>
      <Navbar.Collapse id="navbarSupportedContent">
        <Form className="d-flex ms-auto">
          <Stack direction='horizontal' gap={4}>
            <Link to={"/wishlist"} className="btn btn-outline-white p-1">
              <Stack direction="horizontal" gap={2}>
                <i className="fa-solid fa-heart"></i>
                <span className='fw-bolder'>Wishlist</span>
                <Badge pill bg="dark">{wishlist.length}</Badge>
              </Stack>
            </Link>
            <Link to={"/Cart"} className="btn btn-outline-white p-1">
              <Stack direction="horizontal" gap={2}>
                <i className="fa-solid fa-cart-plus"></i>
                <span className='fw-bolder'>Cart</span>
                <Badge pill bg="dark">{cart.length}</Badge>
              </Stack>
            </Link>
          </Stack>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default Header