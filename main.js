require(["esri/Map", "esri/views/MapView", "esri/widgets/Search"], function(
  Map,
  MapView,
  Search
) {
  var map = new Map({
    basemap: "streets-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-97.745363, 30.270545], // longitude, latitude
    zoom: 13
  });

  var search = new Search({
    view: view
  });
  view.ui.add(search, "top-right");

  // console.log(view.ui.watch(search.SearchResult));
  //
  // obtain search result address
});
