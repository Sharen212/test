var backgroundArc = d3.arc()
  .innerRadius(30)
  .outerRadius(40)
  .cornerRadius(10)
  .startAngle(0)
  .endAngle(Math.PI*2);
  
var mainArc = d3.arc()
  .innerRadius(30)
  .outerRadius(40)
  .cornerRadius(10)
  .startAngle(0)
  .endAngle(function(d) { return d/100*Math.PI* 2 });
  
var data = [52.12] // percents.
  
var svg1 = d3.select("#vote-pie").append("svg")
  .attr("viewBox", "0 0 100 100");
  
var charts = svg1.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform",function(d,i) { 
     return "translate("+(i*100+50)+",45)";
  });
  
charts.append("path")
  .attr("d", backgroundArc)
  .attr("fill","#de435b");

charts.append("path")
  .attr("d", mainArc) 
  .attr("fill","#246fed");

let legend = svg1
    .selectAll('.legend')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
        return "translate("+(i*100+50)+",45)";
    });

legend
    .append('text')
    .attr('x', 1)
    .attr('y', 1)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')
    .style('fill', '#246fed')
    .style("font-weight", "800")
    .text(function(d) {
        return '52' + '%';
    });