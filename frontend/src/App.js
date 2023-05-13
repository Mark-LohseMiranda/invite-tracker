import React, { useState, useEffect } from "react";
import Numbers from "./Components/Numbers/Numbers";
import Email from "./Components/Email/Email";
import Update from "./Components/Update/Update";
import API from "./Util/API";
import Snowfall from "react-snowfall";

import Lights from "./Components/Lights/Lights";
import "./App.css";

function App() {
  const [guest, setGuest] = useState();
  const [numbers, setNumbers] = useState();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("guest")) {
      API.findGuest(query.get("guest"))
        .then((res) => setGuest(res.data))
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="App">
      <div className="more-snow">
        <Lights />
        <h1 className="pt-10 text-white text-center">2022's Gingerbread House Party!</h1>
        <Numbers numbers={numbers} setNumbers={setNumbers} />
        {!guest ? <Email setGuest={setGuest} /> : null}
        {guest ? <Update guest={guest} setNumbers={setNumbers} /> : null}
        <Snowfall />
      </div>
    </div>
  );
}

export default App;
