import { useRef} from "react";
import Input from "../Inputs/input";
import { useNavigate } from "react-router-dom";

function getFormData(form){
    const formdata = {}
    // const form = document.getElementById(formId)
    for (let input of form.querySelectorAll("input")){
            formdata[input.name] = input.value
    }
    return formdata
}


function save_Data(data) {

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
      return json;
    })
    .catch(error=>{
      console.error("Unknown Error: ", error)
    })
    


}

const CarForm2 = () => {
//   const id = uuidv4(null);
  const form = useRef(null);
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    const data = getFormData(form.current);
    console.log("formdata: ", data)
    save_Data(data)
    form.current.reset();
    navigate("/")
  }

  return (
    <form id="car-form" ref={form} action="#" method="post">
      <div className="bg-white form car_card px-5" >
        <h1 className="text-center mb-1">Car Form </h1>
        
        <Input label="Car Image" id="Car_image" name="Car_image" placeholder="Car Image" />
        <Input label="Car Name" id="Car_name" name="Car_name" placeholder="Car Name" />
        <Input label="Car Model" id="Car_model" name="Car_model" placeholder="Car Model" type="date" />
        <Input label="Car Seats" id="Car_seats" name="Car_seats" placeholder="Car Seats" />
        <Input label="Car Door" id="Car_door" name="Car_door" placeholder="Car Door" />
        <Input label="Car Fuel Capacity" id="Car_fuel_capacity" name="Car_fuel_capacity" placeholder="Car Fuel Capacity" />
        <Input label="Car Mielage" id="Car_mileage" name="Car_mileage" placeholder="Car Mielage" />

       <div className="d-flex pb-3 w-5 justify-content-center">
       <button type="button" className="btn btn-primary " onClick={handleSubmit}>
          Save Form
        </button>
       </div>
      </div>
    </form>
  );
};

export default CarForm2;
