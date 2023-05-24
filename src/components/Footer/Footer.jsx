import React from 'react';

function Footer(props) {
  return (
    <>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="footer-container">
            <span>© 2023 Restaurants</span>
            <a className="grey-text text-lighten-4 right footer-link"
              href="https://koko.by/"
              target='blank'>
              Koko.by
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;