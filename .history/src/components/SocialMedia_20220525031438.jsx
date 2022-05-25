import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="example.com">
      <BsTwitter />
      </a>   
    </div>
    <div>
    <a href="example.com">
      <FaFacebookF />
      </a>   

    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
