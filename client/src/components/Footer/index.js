import React from 'react';
import './Footer.css'
import { useLocation, useHistory } from 'react-router-dom';
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
    WhatsappIcon
    
} from "react-share"; 

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (


//     <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
//     <div className="d-flex justify-content-center"> 
//     <FacebookShareButton
//     url={"https://github.com/mjhwest"}
//     quote= {" An Aspiring Full Stack Developer"}>
//         <FacebookIcon className="mx-3" size={36}/>
//     </FacebookShareButton>
//     <TwitterShareButton
//     url={"https://github.com/mjhwest"}
//     quote= {" An Aspiring Full Stack Developer"}>
//         <TwitterIcon className="mx-3" size={36}/>
//     </TwitterShareButton>
//     <RedditShareButton
//     url={"https://github.com/mjhwest"}
//     quote= {" An Aspiring Full Stack Developer"}>
//         <RedditIcon className="mx-3" size={36}/>
//     </RedditShareButton>
//     <LinkedinShareButton
//     url={"https://github.com/mjhwest"}
//     quote= {" An Aspiring Full Stack Developer"}>
//         <LinkedinIcon className="mx-3" size={36}/>
//     </LinkedinShareButton>
//     <WhatsappShareButton
//     url={"https://github.com/mjhwest"}
//     quote= {" An Aspiring Full Stack Developer"}>
//         <WhatsappIcon className="mx-3" size={36}/>
//     </WhatsappShareButton>
//     </div>
//     <p className="pt-3 text-center">
//         Copyright&copy;
//         {new Date().getFullYear()}&nbsp; Iso Meals
//     </p>
// </div>
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
           {/* Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            
          </span>{' '} 
          by Author.  */}
        </h4>
      </div>
    </footer>
  );

  
};

export default Footer;
