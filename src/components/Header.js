import header_logo from "../images/debelles-logo.png";
import header_image from "../images/header-image.png";
import facebook_icon from "../images/facebook-icon.png";
import instagram_icon from "../images/instagram-icon.png";
import tiktok_icon from "../images/tiktok-icon.png";
import whatsapp_icon from "../images/whatsapp-icon.png";
import youtube_icon from "../images/youtube-icon.png";

function ContactUs() {
  return (e) => {
    e.preventDefault();
    window.open(
      "https://wa.me/2349136225444?text=Hello,%20I'd%20like%20to%20make%20some%20inquires%20about%20your%20products%20and%20services.",
      "_blank",
      "noopener",
      "noreferrer"
    );
  };
}

function OrderNow() {
  return (e) => {
    e.preventDefault();
    window.open(
      "https://wa.me/2349136225444?text=Hello,%20I'd%20like%20to%20place%20an%20order.",
      "_blank",
      "noopener",
      "noreferrer"
    );
  };
}

function Header() {
  return (
    <div className="header">
      <div className="header--nav">
        <img src={header_logo} alt="" className="header--logo" />
        <button className="header--contact" onClick={ContactUs()}>
          Contact Us
        </button>
      </div>
      <div className="hero">
        <div className="header--text">
          <h2>
            Let your hair do
            <br />
            the talking.
          </h2>
          <p>
            When it comes to your looks, your hair is Key!
            <br />
            Your hair and hair accessories gives more importance
            <br />
            to your personal taste and preferences.
          </p>
          <button className="hero--button" onClick={OrderNow()}>
            Order Now
          </button>
        </div>
        <div className="header--sub">
          <img src={header_image} alt="" className="header--image" />
          <div className="header--socials">
            <a
              href="https://wa.me/2349136225444"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp_icon} alt="" />
            </a>
            <a
              href="https://instagram.com/debelles_signature"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram_icon} alt="" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <img src={tiktok_icon} alt="" />
            </a>
            <a
              href="https://www.facebook.com/debelleshair"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook_icon} alt="" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube_icon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
