require(["esri/Map", "esri/views/MapView", "esri/widgets/Search"], function(
  Map,
  MapView,
  Search
) {
  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.805, 34.027], // longitude, latitude
    zoom: 13
  });

  var search = new Search({
    view: view
  });
  view.ui.add(search, "top-right");
});
