import React, { useState } from "react";
import { birthdayReminder} from "./components/data/data"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
function App() {
  const [people,setPeople]=useState(birthdayReminder)
  return (
    <>
      <div className="container">
          <div className="col-4 mx-auto mt-4 d-flex justify-content-center align-items-center">
          <div className=" card card-body my-3 ">
            <h5 className="text-capitalize text-secondary my-3">{people.length} birthday today</h5>
            <List people={people} />
            <button onClick={()=>setPeople([]) } className="btn btn-danger">clear all</button>
          </div>
        </div>
        </div>
    </>
  );
}

export default App;
