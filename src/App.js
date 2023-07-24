import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import { Home } from './Components/Home';
import { Continent } from './Components/Continent';
import { Country } from './Components/Country';
import { Destination } from './Components/Destination';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/continent" element={<Continent/>} />
        <Route path="/country" element={<Country/>} />
        <Route path="/destination" element={<Destination/>} />
      </Routes>
    </div>
  );
}

export default App;
