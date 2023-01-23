import { useState } from "react";
import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "./card/Card";

var list = [
  { dvdName: "The lord of the ring", dvdPrice: 9.9 },
  { dvdName: "The Truman show", dvdPrice: 7.9 },
  { dvdName: "Harry Potter and the Sorcerer's Stone", dvdPrice: 5.9 },
  { dvdName: "Harry Potter and the Chamber of Secrets", dvdPrice: 5.9 },
  { dvdName: "Harry Potter and the Prisoner of Azkaban", dvdPrice: 5.9 },
  { dvdName: "Harry Potter and the Goblet of Fire", dvdPrice: 5.9 },
  { dvdName: "Harry Potter and the Order of the Phoenix", dvdPrice: 5.9 },
  { dvdName: "Harry Potter and the Half-Blood Prince", dvdPrice: 5.9 },
  { dvdName: "Harry Potter annd the Deathly Hallows: Part 1", dvdPrice: 5.9 },
  { dvdName: "Harry Potter and the Deathly Hallows: Part 2", dvdPrice: 5.9 },
];

function App() {
  //Dichiarazione dell' 'HOOK'
  const [basketValue, setBasketValue] = useState(0);

  const functionToBeRemoved = () => {
    setBasketValue(basketValue - 1);
    console.log("You have removed an item from the basket!");
  };
  return (
    <div>
      <div className="d-flex justify-content-around align-items-center bg-primary">
        <h2><u>Blockbuster </u></h2>
        <div className="text-center strong border border-3 border-danger m-2">
          <div className="p-2">
            <strong> Basket: </strong>
          </div>
          <div className="border-top border-danger p-1">
            <strong>{basketValue}</strong>
          </div>
        </div>
      </div>

      {list.map((e, index) => {
        return (
          <>
            <Card
              key={index}
              dvdName={e.dvdName}
              dvdPrice={e.dvdPrice}
              addButton={() => {
                setBasketValue(basketValue + 1);
                console.log("You've added an item to the basket");
              }}
              removeButton={functionToBeRemoved}
            />
          </>
        );
      })}

    </div>
  );
}
export default App;
