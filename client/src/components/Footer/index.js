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
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center"> 
          <div className="d-flex justify-content-center"> 
          
          <FacebookShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote= {" Meals made easy during isolation, check it out! "}>
                    <FacebookIcon className="mx-3" size={36}/>
                </FacebookShareButton>
                <TwitterShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote= {"Meals made easy during isolation, check it out!"}>
                    <TwitterIcon className="mx-3" size={36}/>
                </TwitterShareButton>
                <RedditShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote= {"Meals made easy during isolation, check it out!"}>
                    <RedditIcon className="mx-3" size={36}/>
                </RedditShareButton>
                <LinkedinShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote= {"Meals made easy during isolation, check it out!"}>
                    <LinkedinIcon className="mx-3" size={36}/>
                </LinkedinShareButton>
                <WhatsappShareButton
                url={"https://iso-meals.herokuapp.com/"}
                quote= {"Meals made easy during isolation, check it out!"}>
                    <WhatsappIcon className="mx-3" size={36}/>
                </WhatsappShareButton>
          </div> 
          
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
