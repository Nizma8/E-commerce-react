import React from 'react'
import { Button, Col, Container, Form, Row,} from 'react-bootstrap' 
function Footer() {
    const linkStyle = {
        textDecoration: 'none', // Remove underline decoration
        color:'white'     // Inherit the text color from parent
      };
  return (
   <>
        <footer className=" bg-dark">
      <Container className="py-3 py-sm-5">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h6 className='fw-bolder'>Quick links</h6>
            <ul className="list-unstyled">
              <li><a href="#" style={linkStyle}>Home</a></li>
              <li><a href="#" style={linkStyle}>What's new</a></li>
              <li><a href="#" style={linkStyle}>Featured Product</a></li>
              <li><a href="#" style={linkStyle}>Newsletter</a></li>
              <li><a href="#" style={linkStyle}>My account</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h6 className='fw-bolder'>Information</h6>
            <ul className="list-unstyled">
              <li><a href="#" style={linkStyle}>About us</a></li>
              <li><a href="#" style={linkStyle}>Membership</a></li>
              <li><a href="#" style={linkStyle}>Shipping &amp; returns</a></li>
              <li><a href="#" style={linkStyle}>Contact</a></li>
              <li><a href="#" style={linkStyle}>Sitemap</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h6 className='fw-bolder'>Follow us</h6>
            <ul className="list-unstyled">
              <li><a href="#" style={linkStyle}>Facebook</a></li>
              <li><a href="#" style={linkStyle}>Twitter</a></li>
              <li><a href="#" style={linkStyle}>Instagram</a></li>
              <li><a href="#" style={linkStyle}>LinkedIn</a></li>
              <li><a href="#" style={linkStyle}>YouTube</a></li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
        
            <div>
              <h6 className='fw-bolder'>Subscribe to Newsletter</h6>
              <Form className='d-inline'>
                <Row>
               < Col lg={8}>
                    <Form.Group controlId="email">
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Button className='bg-warning text-light' type="submit" >
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
      
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={9}>
            <ul className="list-inline">
              <li className="list-inline-item fw-bolder">&copy; {new Date().getFullYear()} Web Company, Inc.</li>
              <li className="list-inline-item fw-bolder">All rights reserved.</li>
              <li className="list-inline-item">
                <a href="#" style={linkStyle} className='fw-bolder'>Terms of use and privacy policy</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="dropdown dropup p-0">
              <button
                type="button"
                className="btn bg-dark btn-sm dropdown-toggle p-2 text-light"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Visit other sites:
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a href="#" className="dropdown-item" style={linkStyle}>www.otherwebsite.com</a>
                <a href="#" className="dropdown-item" style={linkStyle}>www.newwebsite.com</a>
                <a href="#" className="dropdown-item" style={linkStyle}>www.oldwebsite.com</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
   </>
  )
}

export default Footer