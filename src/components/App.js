import React from "react";
import Header from "./Header";

function App(){
  return (
    <React.Fragment>
      <Header />
      <h3>Keg name</h3>
      <h5>Keg brand</h5>
      <h5>Keg price</h5>
      <h5>Keg alcoholContent</h5>
    </React.Fragment>
  );
}

export default App;