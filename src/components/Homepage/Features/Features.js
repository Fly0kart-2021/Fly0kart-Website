import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  FaDiceFive,
  FaGlobeAsia,
  FaHandHoldingHeart,
  FaShapes,
} from "react-icons/fa";
import styles from "./features.module.css";
import aos from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className={styles.Features}>
      <h1
        className="text-dark"
        data-aos="fade-up"
        style={{ fontSize: "3rem", marginBottom: "2rem" }}
      >
        READY FOR TAKEOFF
      </h1>
      <p
        data-aos="fade-up"
        style={{ marginBottom: "2rem", color:"#7697fa" }}
      >
        FLY0KART is a Global Technology Company with the Heart of a Startup.
      </p>
      <Container
        fluid
        data-aos="fade-up"
        style={{ marginBottom: "5rem" }}
        className="featuresContainer"
      >
        <Row>
          <Col xs lg="3">
            <Card
              className={styles.card}
              style={{ margin: "0 0 1rem 0 " }}
              data-aos="fade-right"
            >
              <Card.Body>
                <Card.Title>
                  <FaHandHoldingHeart size={70} className={styles.iconColor} />
                </Card.Title>
                <Card.Text>FLY0KART WE KEEP OUR CUSTOMERS AT HEART.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="3">
            <Card
              className={styles.card}
              style={{ margin: "0 0 1rem 0 " }}
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <Card.Body>
                <Card.Title>
                  <FaShapes size={70} className={styles.iconColor} />
                </Card.Title>
                <Card.Text>
                  ONE STOP SHOP FOR ALL TRAVEL REQUIREMENTS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="3">
            <Card
              className={styles.card}
              style={{ margin: "0 0 1rem 0 " }}
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <Card.Body>
                <Card.Title>
                  <FaGlobeAsia size={70} className={styles.iconColor} />
                </Card.Title>
                <Card.Text>SERVING 185 COUNTRIES AND COUNTING</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="3">
            <Card
              className={styles.card}
              style={{ margin: "0 0 1rem 0 " }}
              data-aos="fade-right"
              data-aos-delay="350"
            >
              <Card.Body>
                <Card.Title>
                  <FaDiceFive size={70} className={styles.iconColor} />
                </Card.Title>
                <Card.Text>WE HAVE FIVE WAYS TO BOOK YOUR TRAVEL</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Features;
