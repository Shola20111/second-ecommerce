import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from './pages/ProductDetail.jsx';
import Home from "./pages/Home.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;