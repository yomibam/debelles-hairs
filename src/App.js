import "./App.css";
import Accessories from "./components/Accessories";
import Header from "./components/Header";
import ProductData from "./data/ProductData";
import Products from "./components/Products";
import Services from "./components/Services";
import ServiceData from "./data/ServiceData";
import Pricing from "./components/Pricing";
import WigData from "./data/WigData";
import FrontalData from "./data/FrontalData";
import CareData from "./data/CareData";
import Pricing_image from "./images/pricing-img.png";
import Footer from "./components/Footer";
import hr from "./images/hr.png";

function App() {
  const products = ProductData.map((items) => {
    return (
      <Products
        img={items.productImg}
        name={items.productName}
        type={items.productType}
        price={`#${items.productPrice}`}
      />
    );
  });
  const services = ServiceData.map((items) => {
    return (
      <Services
        img={items.serviceImg}
        name={items.serviceName}
        description={items.serviceDescription}
      />
    );
  });
  const wigList = WigData.map((items) => {
    return (
      <Pricing
        wigName={items.wigName}
        wigPrice={`_________________#${items.wigPrice}`}
      />
    );
  });
  const frontalList = FrontalData.map((items) => {
    return (
      <Pricing
        frontalName={items.frontalName}
        frontalPrice={`_________________#${items.frontalPrice}`}
      />
    );
  });
  const careList = CareData.map((items) => {
    return (
      <Pricing
        careName={items.careName}
        carePrice={`_________________#${items.carePrice}`}
      />
    );
  });
  return (
    <div>
      <Header />
      <Accessories />
      <div className="products--main">
        <h2>Our products</h2>
        <p>
          When it comes to your looks, your hair is Key!
          <br />
          Your hair and hair accessories gives more importance to your personal
          taste and preferences.
        </p>
        <section className="products--list">{products}</section>
        <img src={hr} alt="horizontal rule" className="hr" />
      </div>
      <div className="services--main">
        <h2>Our services</h2>
        <p>
          When it comes to your looks, your hair is Key!
          <br />
          Your hair and hair accessories gives more importance to your personal
          taste and preferences.
        </p>
        <section className="services--list">{services}</section>
        {/* <img src={hr} alt="horizontal rule" className="hr" /> */}
      </div>
      <div className="prices--main">
        <h2>Our pricing</h2>
        <p>
          When it comes to your looks, your hair is Key!
          <br />
          Your hair and hair accessories gives more importance to your personal
          taste and preferences.
        </p>
        <div className="prices--content">
          <div className="prices--list--margin">
            <div>
              <h3 className="wig--title">Wig</h3>
              <section>{wigList}</section>
            </div>
            <div>
              <h3 className="frontal--title">Frontal</h3>
              <section>{frontalList}</section>
            </div>
            <div>
              <h3 className="care--title">Wig Care</h3>
              <section>{careList}</section>
            </div>
          </div>
          <div className="prices--img--wrapper">
            <img src={Pricing_image} alt="" className="prices--img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
