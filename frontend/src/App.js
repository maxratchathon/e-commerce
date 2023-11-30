import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <>
      <div className='navbar-container'>
        <div>
          <h2>EverShop</h2>
        </div>
        <div>
          <a>Men</a>
          <a>Women</a>
        </div>
        <div>
          <a>[icon]</a>
          <a>[icon]</a>
          <a>[icon]</a>
        </div>
      </div>

      <div>
        <div style={{ height: "300px", backgroundColor: "#EEEEEE" }}>
          [imageframe]
        </div>
      </div>

      <div className="card-container">
        <div>
          <div className="img-card" style={{ height: "300px", width: "350px", backgroundColor: "#CCCCCC" }} />
          <h3>MEN SHOES COLLECTION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button type="button">button</button>
        </div>
        <div>
          <div className="img-card" style={{ height: "300px", width: "350px", backgroundColor: "#CCCCCC" }} />
          <h3>WOMEN SHOES COLLECTION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button type="button">button</button>
        </div>
        <div>
          <div className="img-card" style={{ height: "300px", width: "350px", backgroundColor: "#CCCCCC" }} />
          <h3>MEN SHOES COLLECTION</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button type="button">button</button>
        </div>
      </div>

      <div className="shoes-container">
        <div>
          <div className="img-card" style={{ height: "250px", width: "250px", backgroundColor: "#CCCCCC" }} />
          <h3>Shoes name</h3>
          <p>$ 425.50</p>
          <button type="button">button</button>
        </div>
        <div>
          <div className="img-card" style={{ height: "250px", width: "250px", backgroundColor: "#CCCCCC" }} />
          <h3>Shoes name</h3>
          <p>$ 425.50</p>
          <button type="button">button</button>
        </div>
        <div>
          <div className="img-card" style={{ height: "250px", width: "250px", backgroundColor: "#CCCCCC" }} />
          <h3>Shoes name</h3>
          <p>$ 425.50</p>
          <button type="button">button</button>
        </div>
      </div>

      <div className="footer">
        <p>[logo]</p>
        <p>[logo]</p>
        <p>[logo]</p>
      </div>


    </>
  );
}

export default App;
