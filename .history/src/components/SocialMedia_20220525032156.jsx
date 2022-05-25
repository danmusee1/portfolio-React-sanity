import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.instagram.com/no_niche_kicks/">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/no_niche_kicks/">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/no_niche_kicks/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
