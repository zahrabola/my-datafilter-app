import {data} from"./Data.js"
import './App.css';
import ItemCard from "./ItemCard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">Zahra Olanrewaju</header>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 border">filter bar</div>
          <div className="col-sm-9">
            <div className="row mt-2">
              <ItemCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
