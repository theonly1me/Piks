import React from 'react';

const FooterComponent = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        Made with {`❤️`} by Atchyut Preetham Pulavarthi
      </p>
      <div className="footer__social-links">
        <a
          className="footer__link-instagram"
          href="https://www.instagram.com/pulavarthi.preetham/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram instagram"></i>
        </a>
        <a
          className="footer__link-twitter"
          href="https://twitter.com/AtchyutPreetham"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter twitter"></i>
        </a>
        <a
          className="footer__link-linkedin"
          href="https://www.linkedin.com/in/atchyutpulavarthi/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a
          className="footer__link-github"
          href="https://github.com/theonly1me"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github github"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
