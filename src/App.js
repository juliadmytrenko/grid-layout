import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      {/* navbar */}
      <nav className="main-nav">
        <ul>
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">4</a>
          </li>
        </ul>
      </nav>
      {/* main container */}
      <section className="top-container">
        <header className="showcase">
          <div className="showcase-container">
            <h1>title</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              dignissimos, similique optio totam ea inventore, dicta
              consequuntur quo eaque rerum at, fugit est velit adipisci ex
              quasi. Repudiandae esse error voluptatibus nihil nobis repellat.
              Doloremque, commodi id? Explicabo dolore recusandae culpa vero sit
              maxime totam veniam repudiandae neque? Tenetur, consequatur.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </header>
        <div className="top-box top-box-a">
          <h4>Membership</h4>
          <p className="price">$199/mo</p>
          <a href="#" className="btn">
            Buy Now
          </a>
        </div>
        <div className="top-box top-box-b">
          <h4>Pro Membership</h4>
          <p className="price">299/mo</p>
          <a href="#" className="btn">
            Buy Now
          </a>
        </div>
      </section>

      {/* boxes section */}
      <section className="boxes">
        <div className="box">
          <i />
          <h3>Analytics</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            voluptatibus, doloremque totam dolores repellendus illo fuga rem
            quae quas repudiandae.
          </p>
        </div>
        <div className="box">
          <i />
          <h3>Analytics</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            voluptatibus, doloremque totam dolores repellendus illo fuga rem
            quae quas repudiandae.
          </p>
        </div>
        <div className="box">
          <i />
          <h3>Analytics</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            voluptatibus, doloremque totam dolores repellendus illo fuga rem
            quae quas repudiandae.
          </p>
        </div>
        <div className="box">
          <i />
          <h3>Analytics</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            voluptatibus, doloremque totam dolores repellendus illo fuga rem
            quae quas repudiandae.
          </p>
        </div>
      </section>

      {/* info section */}
      <section className="info">
        <img src="img/pic2.jpg" alt="" />
        <div>
          <h2>Your business on the web</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            sint iste molestias quasi libero incidunt distinctio architecto ea
            ab odio vel praesentium alias ad dolorum atque perferendis
            assumenda, vero quod.
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </section>

      {/* portfolio section */}
      <section className="portfolio">
        <img src="https://source.unsplash.com/random/200x200" alt="" />
        <img src="https://source.unsplash.com/random/201x200" alt="" />
        <img src="https://source.unsplash.com/random/202x200" alt="" />
        <img src="https://source.unsplash.com/random/203x200" alt="" />
        <img src="https://source.unsplash.com/random/204x200" alt="" />
        <img src="https://source.unsplash.com/random/205x200" alt="" />
        <img src="https://source.unsplash.com/random/206x200" alt="" />
        <img src="https://source.unsplash.com/random/207x200" alt="" />
        <img src="https://source.unsplash.com/random/208x200" alt="" />
      </section>

      {/* footer */}
      <footer>
        <p>GridBiz &copy; 2022 </p>
      </footer>
    </div>
  );
}

export default App;
