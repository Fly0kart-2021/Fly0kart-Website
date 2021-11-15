import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelopeOpenText, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container className="pb-5 pt-4 text-center">
      <h3 className="p-3">Follow Us</h3>
      <Row className="justify-content-md-center m-3">
        <Col xs lg="1">
          <a href="">  <FaTwitter size={25} /></a>
        </Col>
        <Col xs lg="1"><a href="#"><FaInstagram size={25} /></a></Col>
        <Col xs lg="1"><a href="#"><FaFacebookF size={25} /></a></Col>

        <Col xs lg="1">
          <a href="#"> <FaWhatsapp size={25} /></a>
        </Col>
      </Row>
      <Row className="justify-content-md-center">

        <Col xs lg="2"> <FaEnvelopeOpenText size={15} />Hello@Fly0kart.com</Col>
        <Col xs lg="2"><FaMobileAlt size={15} />+91-7057962948</Col>

      </Row>
    </Container>
  )
}

export default Footer