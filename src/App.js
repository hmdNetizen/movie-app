import { Fragment } from "react";
import Home from "./components/Home";
import Header from "./layout/Header";

const App = () => {
  return (
    <Fragment className="App">
      <Header />
      <Home />
    </Fragment>
  );
};

export default App;
