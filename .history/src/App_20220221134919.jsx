import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";

import MainLayout from "./layout/MainLayout";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
           
              <Route path="orders" element={<Orders />}></Route>
              <Route path="products" element={<Blank />}></Route>
              <Route path="customers" element={<Blank />}></Route>
              <Route path="settings" element={<Blank />}></Route>
              <Route path="stats" element={<Blank />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>


  );
}
export default App;
