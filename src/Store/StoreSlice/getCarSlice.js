import { createSlice } from "@reduxjs/toolkit";

const car = createSlice({
  name: "car",
  initialState: {
    status: "idle",
    cars: null,
    error: null
  },
  reducers: {
    loadData: (state, action) => {
      state.cars = action.payload;
      state.status = "idle";
    },
    updateStatus: (state, action) => {
      state.status = action.payload.status;
      state.error = action.payload.error;
    },
    update_car: (state, action) => {
      
      state.status = "pending";

      try {
        const updatedCar = state.cars.map((car) => {
          console.log(car.id, action.payload.id, action, car.id == action.payload.id)
          if (car.id == action.payload.id) return action.payload;
          else {
            return car;
          }
        });

        // save_Data("car", updatedCar);
        state.status = "fulfilled";
        state.data = updatedCar;
      } 
      
      catch (error) {
        state.error = error;
        state.status = "rejected";
      }
    },

    deleteCar:(state,action)=>{
      const {id} = action.payload
      state.status = "pending";
      
      try {
        const deletedCar = state.cars.filter((car)=>{
          console.log(car.id !== id)
          if (car.id !== id ) return id;
          else {
            return car;
          }
        });

        // save_Data("car",deletedCar);
        state.status = "fulfilled";
        state.data = deletedCar;
      }
      catch (error) {
        state.error = error;
        state.status = "rejected";
      }
      
      
    }
  },
});
function carSelect(store, Id) {
  const Select  = store.car.cars?.find((car) => car.id == Id)
  console.log("Selecting a car with id: ", Id, Select, store.car)
  return Select;
}

function carStatus(store) {
  const Status = store.car.status
  return Status;
}

function carError(store) {
  const Error = store.car.error
  return Error ;
}

export const { loadData, updateStatus, update_car, deleteCar } = car.actions;
export { carSelect, carStatus, carError };
export default car.reducer;
