import "./App.css";
import { Routes,Route} from "react-router-dom";
import Layout from "./Components/Layout"
import Home from "./Components/Homepage";
import Cars from "./Components/Cars";
import CarForm2 from "./Components/carForm2";
import CarUpdate from "./Components/CarUpdate";
import Car_ from "./Components/get_Car";

function App() {
  return (
    <>
      
        
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/cars/add" element={<CarForm2 />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/:Id/update" element={<CarUpdate />} />
              <Route path="/car" element={<Car_ />} />
            </Route>
          </Routes>
        
        
          
      
    </>
  );
}

export default App;
