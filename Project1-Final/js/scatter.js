class Scatterplot {

    constructor( _data) {

      this.data = _data;
      this.initVis();
    }
    
    /**
     * We initialize scales/axes and append static elements, such as axis titles.
     */

    initVis() {
      console.log("got here");
      let vis = this;
      vis.margin = {top: 30, right: 30, bottom: 80, left: 60},
    vis.width = 600 ,
    vis.height = 300 ;

    vis.removedData = new Map();

    vis.data.forEach(d => {



      
    });

    
// append the svg object to the body of the page
vis.svg = d3.select("#radiusvMass")
  .append("svg")
    .attr("width", vis.width + vis.margin.left + vis.margin.right)
    .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + vis.margin.left + "," + vis.margin.top + ")");

          var g = d3.rollup(vis.data, v=> (d3.sum(v, d => d.pl_bmasse)/v.length), d => d.pl_rade);
          console.log(g);

    vis.svg.append("g").append("text").text("Planet Mass V Planet Radius").attr("x", vis.margin.left).attr("y", -5);

 // Label for x Axis
 vis.svg.append("g").append("text")
 .attr("transform", "translate(" + (vis.width/2) + " ," + (vis.height + 30) + ")")
 .style("text-anchor", "middle")
 .text("Planet Radius in Eath Radius");

// Label for y Axis
vis.svg.append("g").append("text")
 .attr("transform", "rotate(-90)")
 .attr("x", -((vis.height + vis.margin.top)/2))
 .attr("y", -(40))
 .style("text-anchor", "middle")
 .text("Planet Mass in Earth Mass");
    }
  
    /**
     * Prepare the data and scales before we render it.
     */
    updateVis(data) {
      let vis = this;
      vis.data = data;

      // Add X axis
  vis.xScale = d3.scaleSymlog()
  .domain([0, d3.max(vis.data, d => d.pl_rade)])
  .range([ 0, vis.width ]);


// Add Y axis
vis.yScale = d3.scaleLog()
  .domain([0.00003, d3.max(vis.data, d => d.pl_bmasse)])
  .range([ vis.height, 0.0003]);
      
  vis.xAxis = vis.svg.append("g")
    .attr("transform", "translate(0," + vis.height + ")")
    .call(d3.axisBottom(vis.xScale));

    vis.yAxis = vis.svg.append("g")
    .call(d3.axisLeft(vis.yScale));

    let milkyWay = [{pl_name: 'Mercury', pl_bmasse: 0.0553, pl_rade: 0.383 / 2}, {pl_name: 'Venus', pl_bmasse: 0.815, pl_rade: 0.949 / 2}, 
    {pl_name: 'Earth', pl_bmasse: 1, pl_rade: 1}, {pl_name: 'Mars', pl_bmasse: 0.107, pl_rade: 0.532/2},
     {pl_name: 'Jupiter', pl_bmasse: 317.8, pl_rade: 11.21/2}, {pl_name: 'Saturn', pl_bmasse: 95.2, pl_rade: 9.45 / 2 },
      {pl_name: 'Uranus', pl_bmasse: 14.5, pl_rade: 4.01/2}, {pl_name: 'Neptune', pl_bmasse: 17.1, pl_rade: 3.88/2},
       {pl_name: 'Pluto', pl_bmasse: 0.0022, pl_rade: 0.187 / 2}];



  // Add dots
  vis.dots = vis.svg.append('g')
    .selectAll("dot")
    .data(vis.data)
    .enter()
    .append("circle")
      .attr("cx", d=>vis.xScale(d.pl_rade) )
      .attr("cy",  d=>vis.yScale(d.pl_bmasse) )
      .attr("r", 3)
      .style("fill", "#1282A2");

      vis.dotsMilk = vis.svg.append('g').selectAll("mDot").data(milkyWay).enter()
      .append("circle")
      .attr("cx", d=>vis.xScale(d.pl_rade) )
      .attr("cy",  d=>vis.yScale(d.pl_bmasse) )
      .attr("r", 3)
      .style("fill", "#d81159");
      

    vis.dots.on('mouseover', (event,d) => {
  
      //console.log(event); (event.pageX + vis.margin.tooltipPadding)
      //console.log(event.pageY, event.pageX); (event.pageY + vis.margin.tooltipPadding)
      d3.select('body').select('#scatterTooltip')
        .style('display', 'block')
        .style('left', (event.pageX + 20) + 'px')   
        .style('top', (event.pageY + 20) + 'px')
        .html(`
          <div> Planet Name: ${d.pl_name}</div>
          <div>Planet Radius: ${d.pl_rade} Earth Radius</div>
          <div>Planet Mass: ${d.pl_bmasse} Earth Mass</div>
        `).attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "absolute");
    })
    .on('mouseleave', () => {
      d3.select('#scatterTooltip').style('display', 'none');
    });

    vis.dotsMilk.on('mouseover', (event,d) => {
  
      //console.log(event); (event.pageX + vis.margin.tooltipPadding)
      //console.log(event.pageY, event.pageX); (event.pageY + vis.margin.tooltipPadding)
      d3.select('body').select('#scatterTooltip')
        .style('display', 'block')
        .style('left', (event.pageX + 20) + 'px')   
        .style('top', (event.pageY + 20) + 'px')
        .html(`
          <div> Planet Name: ${d.pl_name}</div>
          <div>Planet Radius: ${d.pl_rade} Earth Radius</div>
          <div>Planet Mass: ${d.pl_bmasse} Earth Mass</div>
        `).attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "absolute");
    })
    .on('mouseleave', () => {
      d3.select('#scatterTooltip').style('display', 'none');
    });
    
  }
    
  
  }