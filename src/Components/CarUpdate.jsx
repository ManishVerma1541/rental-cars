import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update_car,carError,carSelect,carStatus, } from "../Store/StoreSlice/getCarSlice";
import {  updateCarApi } from "../api/cars";


const CarUpdate = () => {
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Id } = useParams();

  const carData = useSelector((store) => carSelect(store, Id));
  const carstatus = useSelector((store) => carStatus(store));
  const carerror = useSelector((store) => carError(store));

 
  

  function handle_update() {

    const action = update_car(car);
    console.log(action);
    dispatch(action);

    updateCarApi({...car, id:Id})

  }

  if (carstatus === "fulfilled") {
    navigate("/");
  }

  useEffect(() => {
    setCar(carData);
  }, [carData]);

  return (
    car && (
      <div className=" col-md-5 bg-white form car_card px-5 ">
        <div className="mb-3 ">
          <h1 className="text-center">Car Form</h1>
          <lable forHtml="_Name" className="form-label">Car Image</lable>
          
          <input
            type="text"
            className="form-control"
            placeholder="Car Image"
            value={car.Car_img}
            onChange={(e) => setCar({ ...car,Car_img: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Name</lable>
          <input
            type="text"
            className="form-control"
            placeholder="Car Name"
            value={car.Car_name}
            onChange={(e) => setCar({ ...car, Car_name: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Model</lable>
          <input
            type="text"
            className="form-control"
            placeholder="Car Model"
            value={car.Car_model}
            onChange={(e) => setCar({ ...car, Car_model: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Seats</lable>
          <input
            type="text"
            className="form-control"
            placeholder="Total Seats"
            value={car.Car_seats}
            onChange={(e) => setCar({ ...car, Car_seats: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Door</lable>
          <input
            type="text"
            className="form-control"
            placeholder="Total Door"
            value={car.Car_door}
            onChange={(e) => setCar({ ...car, Car_door: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Mileage</lable>
          <input
            type="text"
            className="form-control"
            placeholder="Car Mileage"
            value={car.Car_mileage}
            onChange={(e) => setCar({ ...car, Car_mileage: e.target.value })}
          />
        </div>
        <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Fuel_capacity</lable>
          <input
            type="text"
            className="form-control"
            placeholder="Fuel Capacity"
            value={car.Car_fuel_capacity}
            onChange={(e) =>
              setCar({ ...car, Car_fuel_capacity: e.target.value })
            }
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mb-3 d-flex justify-content-center"
          onClick={handle_update}
        >
          Save Form
        </button>
      </div>
    )
  );
};

export default CarUpdate;


