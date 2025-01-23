import { func } from "prop-types";
import { updateStatus, loadData, deleteCar } from "../Store/StoreSlice/getCarSlice";

const getCarSlice_url = "http://localhost:8000/get_car";


export function fetchCar_data(dispatch) {

    dispatch(updateStatus({ status: "pending" }));
  
    return fetch(getCarSlice_url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Load error:Unable to Load");
        }
  
        dispatch(updateStatus({ status: "loading" }));
        return response.json();
      })
      .then((json) => {
        dispatch(updateStatus({ status: "filfilled" }));
        dispatch(loadData(json));
      })
  
      .catch((error) => {
        let status = { status: "error", error };
        dispatch(updateStatus(status));
        return status;
      });
  }



 export function updateCarApi(data) {
    console.log("Saving car data from form: ", data)
   return  fetch("http://127.0.0.1:8000/update", {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(data),
    })
  
      .then((response) => {
        if (!response.ok) throw new Error("Server Error:Unable to Update data");
  
        return response.json();
      })
      .then((json) => {
    
        console.log(json)
      })
      .catch(error=>{
        console.error("Unknown Error: ", error)
      })
    
  }

  export function deletedCarApi(data, dispatch){
    const {id} =data;
    return fetch("http://127.0.0.1:8000/delete",{
        method:"POST",
        contentType:"application/json",
        body : JSON.stringify(data)
    })
      
    .then((response) => {
        if (!response.ok) throw new Error("Server Error:Unable to Delete data");
  
        return response.json();
      })
      .then((json) => {
    
        dispatch(deleteCar({id}))
      })
      .catch(error=>{
        console.error("Unknown Error: ", error)
      })
  }



  
  
  
  