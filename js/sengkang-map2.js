	var width = 620, height = 280;
	
	var tooltip2 = d3.select("body")
					 .append("div")
					 .attr("class", "tooltip")
					 .style('font-size', '18px')
					 .style("opacity", 0);

    var svg2 = d3.select("#sengkang-map").append("svg")
            .attr("viewBox", "0 0 " + (width) + " " + (height))
            //.style("max-width", "700px")

   d3.json("data/electoral-boundary-dataset.geo.json", function (error, mapData) {
        var features = mapData.features;
    
    var projection = d3.geoMercator()
    
    var path = d3.geoPath().projection(projection);
	
	var zoom = d3.zoom().scaleExtent([1,8]).on('zoom',zoomed);
    
    var fixed = features.map(function(f) {
      return turf.rewind(f,{reverse:true});
    })
    
    console.log(fixed);
	
	svg2.call(zoom)
    
    projection.fitSize([width,height],{"type": "FeatureCollection","features":fixed})
    
    svg2.append("g")
                .attr("class", "region")
                .selectAll("path")
                .data(fixed)
                .enter()
                .append("path")
                .attr("d", path)
                //.style("fill", "#fff");
                .style("fill", ( d ) => d.properties.ED_DESC === 'SENGKANG' ? '#fc0fc0' : '#fff')
				.on("mouseover", function(d){
						tooltip2.transition()
								.duration(200)
								.style("opacity", .9);
						tooltip2.text(d.properties.ED_DESC)
								.style("left", (d3.event.pageX + 5) + "px")
								.style("top", (d3.event.pageY - 28) + "px");
								})
				.on("mouseout", function(d) {
						tooltip2.transition()
								.duration(200)
								.style("opacity", 0);
								});
			
				
	function zoomed(){
		svg2.selectAll('path')
			.attr('transform',d3.event.transform)
	};
	

	
    });