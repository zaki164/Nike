import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { AOSInit } from "./aos";

const App = () => {
  return (
    <BrowserRouter>
      <AOSInit />
      <Layout />
    </BrowserRouter>
  );
};

export default App;
