import { createSlice } from "@reduxjs/toolkit";
import { get_data,set_data } from "../../Components/StorageData";

const cars_ = get_data("Cars");

const CarSlice = createSlice({
  name: "Cars",
  initialState: {
    status: "idle",
    error: null,
    data: cars_,
  },
  reducers: {
    update_car: (state, action) => {
      const data = action.payload;
      state.status = "pending";
      console.log(data)

      try {
        const new_car_record = state.data.map((car) => {
          console.log([car.id, action.payload.id, action, car.id == action.payload.id])
          if (car.id == data.id) return data;
          else {
            return car;
          }
        });
        set_data("Cars", new_car_record);
        state.status = "fulfilled";
        state.data = new_car_record;
        


      } catch (error) {
        state.error = error;
        state.status = "Rejected";
      }
    },
  },
});

function carSelector(store, Id) {
    console.log("Selecting a car with id: ", Id, store.Cars)
  return store.Cars.data.find((car) => car.id === Id);
  
}

function carSliceStatus(store) {
  return store.Cars.status;
}

function carSliceError(store) {
  return store.Cars.error;
}

export const { update_car } = CarSlice.actions;
export { carSelector, carSliceStatus, carSliceError }
export default CarSlice.reducer;
