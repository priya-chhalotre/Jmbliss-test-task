import React, { useState, useEffect } from 'react';
import APIUrl from "./Api";
import { Helmet } from "react-helmet";
import HomeSlider from './HomeSlider';
import WomanLoadingClothes from './assets/images/Woman-Loading-Clothes.jpg';
import whychoose2 from './assets/images/whychoose2.jpeg';
import overall from './assets/images/overall.png';
import Customizable from './assets/images/Customizable.png';
import costeffect from './assets/images/costeffect.png';
import Trustworthy from './assets/images/Trustworthy.png';
import faster from './assets/images/faster.png';
import pigy from './assets/images/pigy.png';
import customer from './assets/images/customer.png';
import location from './assets/images/location.png';
import fas from './assets/images/faster_1.png';
import cus from './assets/images/customer_1.png';
import pig from './assets/images/pigy_1.png';
import loc from './assets/images/location_1.png';

const Home = () => {
  const cityImage = (APIUrl.defaults.assetsURL)
  const [citydata, setCityData] = useState([]);
  useEffect(async () => {
    const result = await APIUrl.get(`/get_locations`)
    setCityData(result.data);
  }, []);
  return (
    <>
      <Helmet>
        <title>Home Warranty</title>
        <meta name="description" content="Acclaimed Home Warranty offers coverage plans in five states, with several coverage upgrades to meet homeowner needs. " />
      </Helmet>
      <div className="home_page">
        <HomeSlider />
        <section className="why_choose_us">
          <div className="container">
            <div className="row">
              <div className="choose-col">
                <h1>Why Choose Us</h1>
                <ul>
                  <li>We provide a variety of plan options and looked at the number of plans each company offered and the flexibility adjusting the plan</li>
                  <li>We compared the costs of each company to competitors.</li>
                  <li>We looked at the number of items each company covers. we dig into all service contracts available to get all the details.</li>
                  <li>we were able to judge each company’s customer service.</li>
                </ul>
              </div>
              <div className="choose-col">
                <div className="choose-col-inner" style={{ backgroundImage: `url(${whychoose2})` }}>
                  <div className="col-in">
                    <img src={overall} alt="overall" />
                    <h4>Best Overall</h4>
                  </div>
                  <div className="col-in">
                    <img src={Customizable} alt="Customizable" />
                    <h4>Best Customizable Plans</h4>
                  </div>
                  <div className="col-in">
                    <img src={costeffect} alt="costeffect" />
                    <h4>Most Cost-Effective Plans</h4>
                  </div>
                  <div className="col-in">
                    <img src={Trustworthy} alt="Trustworthy" />
                    <h4>Most Trustworthy</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="advantage">
          <div className="container">
            <div className="firstrow">
              <div className="adv_col">
                <h1>Advantages of <span className="d_clr">Choosing</span> Our <span className="d_clr">Warranty </span>Plans</h1>
              </div>
              <div className="adv_col2">
                <p>Advantages of Choosing Our Warranty PlansAt Home Warranty, we offer numerous home warranty options, including options forreal estateproperties about to hit the market, as well as for new homeowners. Our warranty plans provide many advantages, including:</p>
              </div>
            </div>
            <div className="secondtrow">
              <div className="sec_col">
                <div className="lg_img"><img src={faster} alt="faster" />
                  <img src={fas} alt="faster" className="fas_img" /></div>
                <h4>Faster Fixes</h4>
              </div>
              <div className="sec_col">
                <div className="lg_img">
                  <img src={pigy} alt="pigy" />
                  <img src={pig} alt="faster" className="fas_img" />
                </div>
                <h4>Numerous Plan Options</h4></div>

              <div className="sec_col">
                <div className="lg_img">
                  <img src={customer} alt="customer" />
                  <img src={cus} alt="faster" className="fas_img" />
                </div>
                <h4>Responsive Customer Service</h4>
              </div>
              <div className="sec_col">
                <div className="lg_img">
                  <img src={location} alt="location" />
                  <img src={loc} alt="faster" className="fas_img" />
                </div>
                <h4>Locally Owned</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="woman_load_clothes" style={{ backgroundImage: `url(${WomanLoadingClothes})` }}>
          <div className="container">
            <div className="citys_plan">
              <div className="inner_txt">
                <h1>Why Choose Home Warranty?</h1>
              </div>
              <div className="inner">
                {citydata.map(item => (
                  <div className="col-3" key={item.id} style={{ backgroundImage: `url(${cityImage}/${item.images})` }}>
                    <div className="perfect-cta">
                      <h3 className="perfect-cta__state">{item.location_name}</h3>
                      <p className="perfect-cta__plans">Plans</p>
                    </div>
                    <div className="btn-cont">
                      <a href={'/homeowner-plans/' + item.slug} className="btn">compare homeowner&nbsp;plans</a><br />
                      <a href="/real-estate-orders/" className="btn">compare real estate&nbsp;plans&nbsp;</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="home_ttl">
          <div className="container">
            <h1 class="ttl1">Find the Perfect Home Warranty Plan for You</h1>
            <h4 class="ttl2">Home Warranty Helps You Protect Your Home</h4>
          </div>
          <div className="cont_btn">
            <a href="/contact-us">Contact Us</a>
          </div>
        </section>
      </div>
    </>
  );
  const Toggle = () => {
    const [show, toggleShow] = React.useState(true);

    return (
      <div>
        <button
          onClick={() => toggleShow(!show)}
        >
          toggle: {show ? 'show' : 'hide'}
        </button>
        {show && <div>Hi there</div>}
      </div>
    )
  }
};
export default Home;