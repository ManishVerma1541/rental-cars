import { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Car from "./Car";



const CarForm = () => {
  
  const id = uuidv4(null);
  const _Img = useRef(null);
  const _Name = useRef(null);
  const _Model = useRef(null);
  const Seats = useRef(null);
  const Door = useRef(null);
  const Fuel_capacity = useRef(null);
  const Car_Mileage = useRef(null)

function formData() {
    return {
      
      car_img: _Img.current.value,
      car_Name: _Name.current.value,
      car_Model : _Model.current.value,
      car_seats: Seats.current.value,
      car_door: Door.current.value,
      fuel_capacity: Fuel_capacity.current.value,
      car_mileage : Car_Mileage.current.value
    };
  }

  function formData_clear() {
    _Img.current.value = "";
    _Name.current.value = "";
    _Model.current.value = "";
    Seats.current.value = "";
    Door.current.value = "";  
    Fuel_capacity.current.value = "";
    Car_Mileage.current.value = ""
  }

  function save_Data(e) {
    const data = formData();
    fetch("http://127.0.0.1:8000/addCar", {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Load error:Unable to Load");

        return response.json();
      })
      .then((json) => {
        
        return(json);
      });

    formData_clear();
  }

  return (
    <div className="text-center col-md-5 bg-info-subtle ">
      <div className="mb-3">
        <h1>Car Form</h1>
        <lable forHtml="_Img" className="form-label">Car Image</lable>
        <input
          ref={_Img}
          type="text"
          className="form-control"
          placeholder="Car Image"
        />
      </div>
      <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Name</lable>
        <input
          ref={_Name}
          type="text"
          className="form-control"
          placeholder="Car Name"
        />
      </div>
      <div className="mb-3">
        <lable forHtml="_Name" className="form-label">Car Model</lable>
        <input
          ref={_Model}
          type="text"
          className="form-control"
          placeholder="Car Model"
        />
      </div>
      <div className="mb-3">
        <lable forHtml="Seats" className="form-label">Seats</lable>
        <input
          ref={Seats}
          id="book_subject"
          type="text"
          className="form-control"
          placeholder="Total Seats"
        />
      </div>
      <div className="mb-3">
        <lable forHtml="Door" className="form-label">Door</lable>
        <input
          ref={Door}
          id="book_pages"
          type="text"
          className="form-control"
          placeholder="Total Door"
        />
      </div>
      <div className="mb-3">
        <lable forHtml="Fuel_capacity" className="form-label">Fuel Capacity</lable>
        <input
          ref={Fuel_capacity}
          id="book_mrp"
          type="text"
          className="form-control"
          placeholder="Fuel Capacity"
        />
      </div>
      <div className="mb-3">
        <lable forHtml="Car_Mileage" className="form-label">Mileage</lable>
        <input
          ref={Car_Mileage}
          id="book_mrp"
          type="text"
          className="form-control"
          placeholder="Car Mileage"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={save_Data}>
        Save Form
      </button>
    </div>
  );
};


export default CarForm;
