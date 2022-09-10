import Pages from "./pages/Pages";
import "./app.css";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { SiFoodpanda } from "react-icons/si";
function App() {
  return (
    <main>
      <BrowserRouter>
        <header>
          <div className="logo-container">
            <SiFoodpanda />
          </div>
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
