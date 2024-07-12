import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import PlayList from "./pages/PlayList";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router basename="/pawsome-plates">
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/PlayList" element={<PlayList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
