import Pages from "./pages/Pages";
import "./App.css";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { SiFoodpanda } from "react-icons/si";
import { Link } from "react-router-dom";
function App() {
  return (
    <main>
      <BrowserRouter>
        <header>
          <Link to="/">
            <div className="logo-container">
              <SiFoodpanda />
            </div>
          </Link>
          <h1>Foodie food</h1>
        </header>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </main>
  );
}

export default App;
