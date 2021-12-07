import React from "react"
import { Row, Col } from "react-bootstrap"
import logo from "./logo.png";
import "./footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelopeOpenText, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <><footer className="row bgf mx-auto shadow-lg rounded">
      <div class="col-4 my-auto">
        <img
          src={logo}
          width="130"
          height="42"
          className="d-inline-block align-top"
          alt="" />
      </div>
        <div className="col-md-4 row text-center my-auto mx-auto ff">

          <span className="col-lg-6"> <FaEnvelopeOpenText size={15} /><br/>Hello@Fly0kart.com</span>
          <span className="col-lg-6"><FaMobileAlt size={15} /><br/>+91-7057962948</span>

        </div>
      <div className="col-md-4 my-auto text-center mx-auto">
        <h3 className="p-3">Follow Us</h3>
        <Row className="d-flex m-3">
          <Col xs lg="1">
            <a href="">  <FaTwitter size={25} /></a>
          </Col>
          <Col xs lg="1"><a href="#"><FaInstagram size={25} /></a></Col>
          <Col xs lg="1"><a href="#"><FaFacebookF size={25} /></a></Col>

          <Col xs lg="1">
            <a href="#"> <FaWhatsapp size={25} /></a>
          </Col>
        </Row>
      </div>
    </footer></>
  )
}

export default Footer