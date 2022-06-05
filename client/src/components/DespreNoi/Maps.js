import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import {
  useTheme,
  useMediaQuery
} from "@mui/material";
import "./DespreNoi.scss"

const Maps = ({ google }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // console.log(isMobile);
  

  const mapStyles = {
    width: "400px",
    height: "150px",
    // margin: 20
  };
  const mapStylesMobile = {
    width: "300px",
    height: "150px",
    // margin: 20
  };

  return (
    <div className="containerMaps">
    <Map
      google={google}
      zoom={14}
      style={isMobile ? mapStylesMobile: mapStyles }
      initialCenter={{ lat: 45.295128795352895, lng: 25.996849834094913 }}
    >
      <Marker lat={45.295128795352895} lng={25.996849834094913}></Marker>
    </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCoZTdZwMeIyWEvQNqHgmd-x9CGk1NSaTg",
})(Maps);
