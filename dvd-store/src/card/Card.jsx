import "./Card.css";

const Card = ({ dvdName, dvdPrice, dvdImage, addButton, removeButton }) => {
  return (
    <div className="m-4 d-flex flex-column w-20 justify-content-between bg-info border border-4 border-danger rounded">
      <div className="p-1">Movie: {dvdName}</div>
      <p className="m-1">Price: {dvdPrice}</p>
      <img src={dvdImage} alt="" />
      <button className="buttonPlus" onClick={addButton}>
        +
      </button>
      <button className="buttonMinus" onClick={removeButton}>
        -
      </button>
    </div>
  );
};

export { Card };
