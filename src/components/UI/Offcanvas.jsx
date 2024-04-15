import "./Offcanvas.css";

const Offcanvas = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.hideCartHandler} />
      <div className="offcanvas">
        <div className="offcanvas">{props.children}</div>
      </div>
    </div>
  );
};

export default Offcanvas;
