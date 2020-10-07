	var width = $('div#results-bar').width()
    height = 40

    //var svg = d3.select("#results-bar")
    //	.append("svg")
    //	.attr("viewBox", "0 0 800 50")
  	//	.append("g");

  	var svg = d3.select("#results-bar")
  	.append("svg")
  	.attr('height', '40px')
	.attr('width', '100%')
    .attr('preserveAspectRatio', 'none')

    var linearScale = d3.scaleLinear()
	.domain([0, 100])
	.range([0, width]);

	var thresholdScale = d3.scaleThreshold()
	.domain([52])
	.range(['#246fed', '#de435b']);

	var myData = d3.range(0, 100, 3);

	svg
		.selectAll('whatever')
		.data(myData)
	.enter()
	.append('rect')
	.attr('x', function(d) {
		return linearScale(d);
	})
	.attr('width', 23)
	.attr('height', 50)
	.style('fill', function(d) {
		return thresholdScale(d);
	});