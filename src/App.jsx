import AplicationRoutes from "./routes";
import Background from "./images/background.svg";

function App() {
  return (
    <>
      <img className="imgBackground" src={Background} alt="24" />
      <AplicationRoutes />
    </>
  );
}

export default App;
