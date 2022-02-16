import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditIcon,
  RedditShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Iso-Meals</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
