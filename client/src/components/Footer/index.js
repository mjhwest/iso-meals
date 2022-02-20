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
          <div className="socials  align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote={" Meals made easy during isolation, check it out! "}
              >
                <FacebookIcon className="mx-3" size={44} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote={"Meals made easy during isolation, check it out!"}
              >
                <LinkedinIcon className="mx-3" size={44} />
              </LinkedinShareButton>
              <RedditShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote={"Meals made easy during isolation, check it out!"}
              >
                <RedditIcon className="mx-3" size={44} />
              </RedditShareButton>
              <WhatsappShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote={"Meals made easy during isolation, check it out!"}
              >
                <WhatsappIcon className="mx-3" size={44} />
              </WhatsappShareButton>
            </div>
          </div>
     
      </Container>
    </footer>
  );
};

export default Footer;
