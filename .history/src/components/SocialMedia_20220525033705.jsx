import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/d_rayzey">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/rayzeydmusee">
        <FaGithub />
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
