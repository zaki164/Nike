import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "aos/dist/aos.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
