function Services(props) {
  return (
    <div className="services">
      <div className="services--stats">
        <img
          src={require(`../images/${props.img}`)}
          alt=""
          className="services--image"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `https://wa.me/2349136225444?text=Hello,%20%20I'd%20like%20to%20inquire%20about%20your%20${props.name}%20service.`;
          }}
        />
        <h3 className="services--name">{props.name}</h3>
        <p className="services--type">{props.description}</p>
      </div>
    </div>
  );
}

export default Services;
