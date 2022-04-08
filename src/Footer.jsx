import React from "react";
import ReactDOM from 'react-dom';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
// import footer_logo from './assets/images/foot_logo.png'
import footer_logo from './assets/images/foot_lg.png'
import footerlcon from './assets/images/map_f.png'
import footericon2 from './assets/images/phone_f.png'
import footericon3 from './assets/images/toll_f.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_sec">
          <div className="container">
            <div className="f_row">
              <div className="f_col">

                <div class="footer_logo">
                  <a href="#"><img src={footer_logo}></img></a>
                </div>
              </div>
              <div className="f_col">
                <h3>Business Hours</h3>
                <ul className="hrs_f">
                  <li>Monday 7-6 MST</li>
                  <li>Tuesday 7-6 MST</li>
                  <li>Friday 7-6 MST</li>
                  <li>Monday 7-6 MST</li>
                  <li>Monday 7-6 MST</li>
                </ul>
              </div>
              <div className="f_col">
                <h3>Our Address</h3>
                <div className="addres_f">
                  <p><span><a href="#"><img src={footerlcon}></img></a></span>Complete Home Warranty P.O. Box 9720 Salt Lake City, UT 84109</p>
                  <div className="hrs"><span><a href="#"><img src={footericon3}></img></a></span><a href="#">Emergency Hours: make a claim 24/7</a></div><div className="toll"><span><a href="#"><img src={footericon2}></img></a></span><a href="tel:8884949460">Toll-Free: 888-494-9460</a></div></div>
              </div>
              <div className="f_col">
                <div className="f_icons">
                  <span><a className="nav_facebook" target="_blank" href="https://www.facebook.com/acclaimedhomewarranty/"><FaFacebook /></a></span>
                  <span><a className="nav_insta" target="_blank" href="https://www.instagram.com/acclaimedhw/"><FaInstagram /></a></span>
                  <span><a className="nav_twiter" target="_blank" href="#"><FaTwitterSquare /></a></span>
                </div>
              </div>
            </div>
            <div className="menu_footer">
              <ul>
                <li><a href="#">ORDER NOW</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Member Advantages</a></li>
                <li><a href="#">Contractors</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Make A Claim</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};
export default Footer;
