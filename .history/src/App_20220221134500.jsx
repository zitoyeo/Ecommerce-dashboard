import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";



import RealTimeChart2 from "./components/dailymetric/realtiemchart/realTimeChart2";

function App() {
  return (

    <RealTimeChart2/>

  );
}

export default App;
