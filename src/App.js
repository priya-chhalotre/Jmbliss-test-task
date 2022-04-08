import './App.css';
import './assets/css/header.css';
import './assets/css/HomeSlider.css'
import './assets/css/home.css';
import './assets/css/HomeWarranty.css';
import './assets/css/OrderNow.css';
import './assets/css/Brochures.css';
import './assets/css/Memberadvantages.css';
import './assets/css/Faq.css';
import './assets/css/Contractors.css';
import './assets/css/AboutUs.css';
import './assets/css/MakeClaim.css';
import './assets/css/Contact.css';
import './assets/css/Renewals.css';
import './assets/css/footer.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react"
import Menu from './Menu';
import Home from './Home';
import HomeWarranty from "./HomeWarranty";
import OrderNow from './OrderNow';
import Brochures from './Brochures';
import MemberAdvantages from './MemberAdvantages';
import Faq from './Faq';
import Contractors from './Contractors';
import AboutUs from './AboutUs';
import MakeClaim from './MakeClaim';
import Contact from './Contact';
import Renewals from './Renewals';
import Footer from './Footer';

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="pagecontent">
          <main>
            <Router>
              <header className={scroll ? "fixedHeader" : "staticHeader"}>
                  <Menu/>
              </header>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/home-warranty" component={HomeWarranty} exact/>
                <Route path="/order-now" component={OrderNow} exact/>
                <Route path="/brochures" component={Brochures} exact/>
                <Route path="/member-advantages" component={MemberAdvantages} exact/>
                <Route path="/home-warranty-faqs" component={Faq} exact/>
                <Route path="/contractors" component={Contractors} exact/>
                <Route path="/about-us" component={AboutUs} exact/>
                <Route path="/make-a-claim" component={MakeClaim} exact/>
                <Route path="/contact-us" component={Contact} exact/>
                <Route path="/renewals" component={Renewals} exact/>
              </Switch>
            </Router>
          </main>
        </div>
            <Footer/>
      </div>
    </>
  );
}
export default App;
