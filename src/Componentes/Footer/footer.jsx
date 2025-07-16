import React from 'react';
import './styleFooter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="#">Termos & Condições</a>
          <a href="#">Política de privacidade</a>
        </div>
        <div className="footer-center">
          © 2023 Copyright: KarolAzevedo
        </div>
        <div className="footer-right">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

