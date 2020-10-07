	var width = 620, height = 400;

    var svg2 = d3.select("#sengkang-map").append("svg")
            .attr("viewBox", "0 0 " + (width) + " " + (height))
            //.style("max-width", "700px")

   d3.json("data/electoral-boundary-dataset.geo.json", function (error, mapData) {
        var features = mapData.features;
    
    var projection = d3.geoMercator()
    
    var path = d3.geoPath().projection(projection);
    
    var fixed = features.map(function(f) {
      return turf.rewind(f,{reverse:true});
    })
    
    console.log(fixed);
    
    projection.fitSize([width,height],{"type": "FeatureCollection","features":fixed})
    
    svg2.append("g")
                .attr("class", "region")
                .selectAll("path")
                .data(fixed)
                .enter()
                .append("path")
                .attr("d", path)
                //.style("fill", "#fff");
                .style("fill", ( d ) => d.properties.ED_DESC === 'SENGKANG' ? '#246fed' : '#fff');
    });