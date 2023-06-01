import Home from "./components/home/Home";
import Menu from "./components/menü/Menu";
import About from "./components/about/About";
import BookTable from "./components/booktable/BookTable";
import List from "./pages/List";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Icon from "./components/icon/Icon";
import Layout from "./pages/Layout/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <List />
        <Routes>
          <Route element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
        <Icon />
      </BrowserRouter>
    </div>
  );
}

export default App;
