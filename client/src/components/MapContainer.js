import React, { Component } from "react";
import MapSidebar from "./MapSidebar";

class MapContainer extends Component {
  render() {
    return (
      <div style={{ height: "100vh", "background-color": "gray" }}>
        <MapSidebar />
      </div>
    );
  }
}

export default MapContainer;
