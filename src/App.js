import logo from "./logo.svg";
import "./App.css";

import { useEffect, useRef } from "react";
// import WebMap from "@arcgis/core/WebMap.js";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";

import CapCities from "./CapCities/CapCities";

function App() {
  const mapDiv = useRef();
  const map = useRef();
  const mapView = useRef();

  useEffect(() => {
    map.current = new Map({
      basemap: "streets-vector",
    });
    mapView.current = new MapView({
      map: map.current,
      zoom: 7,
      center: [35.5, 31.5],
    });

    //// test
    // fetch(
    //   "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0?f=pjson"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });

    mapView.current.container = mapDiv.current;

    mapView.current.when(() => {
      const citiesLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",
      });

      map.current.add(citiesLayer);

      mapView.current.on("click", async function (event) {
        if (event.button === 0) {
          // const response = await citiesLayer.queryFeatures({
          //   geometry: event.mapPoint,
          //   spatialRelationship: "intersects",
          // });

          //********** TEST EXAMPLE FOR Jerusalem point ****************
          let longitude = 31.771959;
          let latitude = 5.217018;
          const query = {
            geometry: {
              x: longitude,
              y: latitude,
              spatialReference: {
                wkid: 4326,
              },
            },
            geometryType: "esriGeometryPoint",
            spatialRelationship: "esriSpatialRelIntersects",
            returnGeometry: true,
            outFields: "*",
          };

          // A POPUP NOT WORKING ! BECAUSE I"m have problem with query/
          // Error message: "Unable to perform query. Please check your parameters."
          // =>
          console.log(
            'THIS IS GET NOT WORKING ! I"m have problem with query. \nError message: "Unable to perform query. Please check your parameters."'
          );

          //const response = await citiesLayer.queryFeatures(query);

          const response = {};
          response.features = {};

          console.log("mapPoint: ", event.mapPoint);
          if (response.features.length > 0) {
            const city = response.features[0];
            const popupTemplate = new PopupTemplate({
              title: "{CITY_NAME}",
              content: "Population: {POPULATION}",
            });

            city.popupTemplate = popupTemplate;
            mapView.current.openPopup({
              location: event.mapPoint,
              features: [city],
              fetchFeatures: true,
            });
          }
        }
      });
    });
  }, []);

  return (
    <div
      className="App"
      ref={mapDiv}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    ></div>

    // <CapCities MyMapDiv={mapDiv} />
  );
}

export default App;
