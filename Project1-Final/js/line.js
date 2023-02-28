class Line {

    constructor( _data) {

        this.data = _data;

  
      // Call a class function
      this.initVis();
    }
  
    initVis() {
      let vis = this;
  
      var margin = {top: 30, right: 30, bottom: 50, left: 60},
    width = 550 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select('#discoveriesTime')
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g").append("text").text("Number of Discoveries Over Time").attr("x", margin.left).attr("y", -5);
          var x = d3.scaleLinear()
      .domain(d3.extent(vis.data, function(d) { return d.key; }))
      .range([ 0, width ]);

      vis.xScale = d3.scaleTime().domain([new Date(1992, 0, 0), new Date(2022, 0, 0)])
        .range([0, width]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(vis.xScale));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(vis.data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

       // Label for x Axis
    svg.append("g").append("text")
    .attr("transform", "translate(" + (width/2) + " ," + (height+40) + ")")
    .style("text-anchor", "middle")
    .text("Discovery Year");

 // Label for y Axis
 svg.append("g").append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -((height + margin.top)/2))
    .attr("y", (-40))
    .style("text-anchor", "middle")
    .text("Number of Discoveries");

      svg.append("path")
      .datum(vis.data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.key) })
        .y(function(d) { return y(d.value) })
        )


    }
  
  }