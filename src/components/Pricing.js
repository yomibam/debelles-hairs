function Pricing(props) {
  return (
    <div className="prices--list">
      <h2>{props.wigName}</h2>
      <p>{props.wigPrice}</p>
      <h2>{props.frontalName}</h2>
      <p>{props.frontalPrice}</p>
      <h2>{props.careName}</h2>
      <p>{props.carePrice}</p>
    </div>
  );
}

export default Pricing;
