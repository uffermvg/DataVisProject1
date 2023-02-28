class distanceCircles{
    constructor(_svgT,_data){
        this.data = _data;
        this.svgT = _svgT;

        this.innitVis();
    }

    innitVis() {
      let vis = this;

      const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 600 ,
    height = 200 ;

    vis.svg = d3.select(vis.svgT).append('svg').attr("width", width+margin.right+margin.left).attr("height", height+margin.top+margin.bottom);

      vis.xScale = d3.scaleSqrt().domain([0, d3.max(vis.data, d => d.key)])
      .range([0, width]);

      vis.xAxis = d3.axisBottom(vis.xScale);

      vis.xCartesian = vis.svg.append("g")
      .call(vis.xAxis)
      .attr("transform", `translate(${margin.right},${height-margin.bottom})`);
  

      vis.rScale = d3.scaleLog().domain(d3.extent(vis.data, d => d.value)).range([0, 30]);

      vis.titl = vis.svg.append("g").append("text").text("Exoplanet's System Distance From Earth").attr("x", margin.left).attr("y", 30).attr("text-anchor", "left");

    // Label for x Axis
    vis.svg.append("g").append("text")
    .attr("transform", "translate(" + (width/2) + " ," + (height +30) + ")")
    .style("text-anchor", "middle")
    .text("Distance from Earth (pc)");

      // vis.svg.selectAll('circle').data(vis.data).enter().append("circle").attr('cr', function(d) {return rScale(d.value);})
      // .attr('cx', function(d) {return xScale(d=>d.key);});
  
  
    }

    updateVis(data){
      let vis = this;
      vis.data = data;
      vis.circle = vis.svg.selectAll("circle")
    .data(vis.data)
    .enter()
    .append("circle")
      .attr('cx', d=>vis.xScale(d.key) )
      .attr('cy', 100)
      .attr('r', d =>vis.rScale(d.value))
      .style("fill", "#1282A2");

      vis.circle.on('mouseover', (event,d) => {
  
        //console.log(event); (event.pageX + vis.margin.tooltipPadding)
        //console.log(event.pageY, event.pageX); (event.pageY + vis.margin.tooltipPadding)
        d3.select('body').select('#circleTooltip')
          .style('display', 'block')
          .style('left', (event.pageX + 20) + 'px')   
          .style('top', (event.pageY + 20) + 'px')
          .html(`
            <div>Planet distance from Earth: ${d.key} pc to ${d.key+100} pc</div>
            <div>Number of Exoplanets: ${d.value}</div>
          `).attr("class", "tooltip")
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "2px")
          .style("border-radius", "5px")
          .style("padding", "5px")
          .style("position", "absolute");
      })
      .on('mouseleave', () => {
        d3.select('#circleTooltip').style('display', 'none');
      });

    }

}