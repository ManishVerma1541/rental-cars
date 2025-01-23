import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCar} from "../Store/StoreSlice/getCarSlice";
import { fetchCar_data } from "../api/cars";
import Car from "./Car";
import carDelete from "./deleteCar";

const Car_ = () => {
  const dispatch = useDispatch();

  const cars = useSelector((store) => store.car.cars);

  useEffect(() => {
    fetchCar_data(dispatch);
  }, []);

  

  return (
    <div className="container mx-5">
      <div className="d-flex ps-1 row mt-5 ">
        {cars && cars.map((car) => <Car car={car} onDelete={carDelete} />)}
      </div>
    </div>
  );
};

export default Car_;
