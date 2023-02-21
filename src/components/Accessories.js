import accessories_image from "../images/accessories-image.jpg";

function Accessories() {
  return (
    <div className="accessories">
      <div className="accessories--main">
        <img src={accessories_image} className="accessories--image" alt="" />
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
      <hr className="main" />
    </div>
  );
}

export default Accessories;
