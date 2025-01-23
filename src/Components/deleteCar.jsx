import { deletedCarApi} from "../api/cars";




const carDelete = (id, dispatch) => {
  
      console.log("Deleting car id",id)
      deletedCarApi({id}, dispatch)

}


export default carDelete;
