import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                We help premium brands achieve their future through innovation 
		            and creative perspectives. We grow your company 
		            through proprietary in-house ideas, tested and perfected over the years.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                Jl. H.Nawi Malik no. 40 
                Kel. Pondok Petir, Kec. Bojongsari 
                <br />
                Indonesia
              </p>
              <p>P: +62 882 1044 4407</p>
              <p>
                E: <a href="#">info@digibit.co.id</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              ?? copyright {new Date().getFullYear()} by{" "}
              <a href="#">DIGIBIT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
