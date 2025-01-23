import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Car = ({car,onDelete}) => {
const dispatch = useDispatch();
  
console.log (car)
  return (  
    <div className="col-md-4 mb-4 ">
      <div className="card car_card">
        <div className="card-thumb">
          <img className="position-relative"  alt="dezire" />
          <button onClick={()=>onDelete(car.id, dispatch)}>
          <i class="bi bi-x-square position-absolute top-0 end-0 btn btn-outline-white bg bg-light text-dark fs-4 text"></i>
          </button>
        </div>
        <hr />

        <h3 className="card-title ps-2  ">{car.Car_name}</h3>
        <hr />

        <div className="card-text ps-2 ">
          <p className="mb-2 mt-2">
            Model : <strong>{car.Car_model}</strong>
          </p>
          <p  className="mb-2"> 
            Seat Capacity : <strong>{car.Car_seats}</strong>
          </p>
          <p className="mb-2">
            Total Doors : <strong>{car.Car_door}</strong>
          </p>
          <p  className="mb-2">
            Mileage : <strong>{car.Car_mileage}</strong>
          </p>
          <p>
            <i class="bi bi-fuel-pump-fill me-2"></i>
            Fuel Tank : <strong>{car.Car_fuel_capacity}</strong>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-around my-2 ">
          <i class="bi bi-whatsapp btn btn-lg text-success border border-success"></i>
          <i class="bi bi-phone btn btn-lg border border-black"></i>
          <Link to={`${car.id}/update`}><i class="bi bi-pencil-square btn btn-lg border border-black"></i></Link>
        </div>
      </div>
      
    </div>
  );
};
export default Car;

