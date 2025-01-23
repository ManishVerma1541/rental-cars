import Car_ from "./get_Car";
const Home = () => {
  return (
    <main>
      <div className="main-banner ">
        <div className="container text-uppercase">
          <h1>make your tour memorable </h1>
          <h3>with our luxurios cars...</h3>
        </div>
      </div>

      <div>
      <Car_ />
      </div>
      
    </main>
  );
};

export default Home;
