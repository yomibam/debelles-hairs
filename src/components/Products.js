function ProductLink(props) {
  return (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/2349136225444?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20${props.name}, ${props.type}.`,
      "_blank",
      "noopener",
      "noreferrer"
    );
  };
}

function Products(props) {
  return (
    <div className="products">
      <div className="products--stats" onClick={ProductLink(props)}>
        <div className="products--img--wrapper">
          <img
            src={require(`../images/${props.img}`)}
            alt={props.name}
            className="products--image"
          />
        </div>

        <h3 className="products--name">{props.name}</h3>
        <p className="products--type">{props.type}</p>
        <p className="products--price">{props.price}</p>
      </div>
    </div>
  );
}

export default Products;
