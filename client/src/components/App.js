import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Leaderboard from "./Leaderboard";
import MapContainer from "./MapContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/map" component={MapContainer} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
