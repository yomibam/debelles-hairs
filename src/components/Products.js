function ProductLink() {
  return (e) => {
    e.preventDefault();

    console.log("clicked");
  };
}

function Products(props) {
  return (
    <div className="products">
      <div className="products--stats">
        <img
          src={require(`../images/${props.img}`)}
          alt=""
          className="products--image"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `https://wa.me/2349136225444?text=Hello,%20%20I'd%20like%20to%20inquire%20about%20your%20${props.name}, ${props.type}.`;
          }}
        />
        <h3 className="products--name">{props.name}</h3>
        <p className="products--type">{props.type}</p>
        <p className="products--price">{props.price}</p>
      </div>
    </div>
  );
}

export default Products;
