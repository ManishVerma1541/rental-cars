import Car from "./Car";
import { useState, useEffect } from "react";
import { get_data } from "./StorageData";



const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const data = get_data("Cars");
    setCars(data);
  }, []);

  const deleteCar = (id)=>{
    setCars(cars.filter((car)=>car.id != id))
  };
  return (
      <div className="container">
        <div className="d-flex ps-1 row mt-5 ">
          {cars.map(car => 
            <Car key={car.id} car={car} onDelete={deleteCar}/>
          )}
        </div>
      </div>
  );
};

export default Cars;
