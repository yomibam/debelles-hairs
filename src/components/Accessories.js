import accessories_image from "../images/accessories-image.jpg";
import hr from "../images/hr.png";

function Accessories() {
  return (
    <div className="accessories">
      <div className="accessories--main">
        <div className="accessories--image--wrapper">
          <img
            src={accessories_image}
            className="accessories--image"
            alt="accessories img"
          />
        </div>
        <div className="accessories--text">
          <h2>
            Get top of the line
            <br />
            hair accessories.
          </h2>
          <p>
            When it comes to your looks, your hair is Key!
            <br />
            Your hair and hair accessories gives more importance
            <br />
            to your personal taste and preferences.
          </p>
        </div>
      </div>
      <img src={hr} alt="horizontal line" className="hr" />
    </div>
  );
}

export default Accessories;
