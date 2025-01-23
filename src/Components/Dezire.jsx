import Dezireimg from "../Images/Dezireimg";
import dezire_img from "../Images/dezire.jpg";

const Dezire = () => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card  car_card">
        <div className="card-thumb">
          <img className="card-img-top img" src={dezire_img} alt="" />
        </div>
        <hr />
        <h3 className="card-title mt-2 ps-2 ">Suzuki Dezire 2024</h3>
        <hr />
        <div className="card-text ps-2">
          <p className="mb-2 mt-2">
            Seat capacity : <strong>5 People</strong>
          </p>
          <p className="mb-2">
            Total Doors : <strong>4 Door</strong>
          </p>
          <p>
            <i class="bi bi-fuel-pump-fill me-2"></i>
            Fuel Tank : <strong>37 L</strong>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-around my-2 ">
          <i class="bi bi-whatsapp btn btn-lg text-success border border-success"></i>

          <i class="bi bi-phone btn btn-lg border border-black "></i>
        </div>
      </div>
    </div>
  );
};

export default Dezire;
