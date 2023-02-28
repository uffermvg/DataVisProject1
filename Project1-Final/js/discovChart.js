class Discovchart{
  constructor(_title, _leftAxis, _rightAxis, _svgTtitle, _dataSet){
      this.data = _dataSet;
      this.title = _title;
      this.left = _leftAxis;
      this.right = _rightAxis;
      this.svgT = _svgTtitle;
      this.color = '#36454F';

      this.innitVis();
  }
  innitVis(){
    let vis = this;
    vis.margin = {top:50, right: 50, bottom: 140, left: 50, tooltipPadding: .2};
    vis.layer = {width: 250 + vis.margin.right + vis.margin.left, height:100 + vis.margin.bottom + vis.margin.top};

    vis.svg = d3.select(vis.svgT).append('svg').attr("width", vis.layer.width+ vis.margin.right+ vis.margin.left).attr("height", vis.layer.height+vis.margin.top+ vis.margin.bottom);

    vis.titl = vis.svg.append("g").append("text").text(vis.title).attr("x", vis.margin.left).attr("y", 30).attr("text-anchor", "left");

  // Label for x Axis
  vis.svg.append("g").append("text")
  .attr("transform", "translate(" + (vis.layer.width/2) + " ," + (vis.layer.height+170) + ")")
  .style("text-anchor", "middle")
  .text(vis.right);

// Label for y Axis
vis.svg.append("g").append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -((vis.layer.height + vis.margin.top)/2))
  .attr("y", (10))
  .style("text-anchor", "middle")
  .text(vis.left);

  vis.background = d3.select(vis.svgT).append('svg').attr("width", vis.layer.width-20).attr("height", vis.layer.height +90).attr("transform",`translate(-${vis.layer.width+ vis.margin.right},-${vis.margin.top})`);
  vis.yCartesian = vis.svg.append("g")
    .attr("transform", `translate(${vis.margin.right},${vis.margin.top})`);;
  vis.xCartesian = vis.svg.append("g")
    .attr("transform", `translate(${vis.margin.right},${vis.layer.height+ vis.margin.top})`);


}
  updateVis(dat){
    let vis = this;
   // let color = '#36454F';
    console.log("update Data: ", dat);
    vis.data = dat;
    vis.yScale = d3.scaleLinear()
    .domain([d3.max(vis.data, d => d.value), 0]).range([0, vis.layer.height]);

    //const xScale = d3.scaleBand().domain(starArr, d => d.stars).range([0, layer.width]).paddingInner(0.05);
    vis.xScale = d3.scaleBand().domain(vis.data.map(d => d.key)).range([0, vis.layer.width]).padding(0.2);
    vis.yAxis = d3.axisLeft(vis.yScale);
    vis.xAxis = d3.axisBottom(vis.xScale); 



 // vis.bars = vis.background.selectAll("rect").data(vis.data).join("g");

vis.rec = vis.background.selectAll("rect").data(vis.data).join("rect")
.attr("width", vis.xScale.bandwidth())
.attr("height", function(d) {return vis.layer.height - vis.yScale(d.value)})
.attr("x", function(d){return vis.xScale(d.key)})
.attr("y", function(d){return vis.yScale(d.value)}).style('fill', vis.color);

vis.rec.append("text").text(function(d) {return d => d.value});

vis.rec.on('mouseover', (event,d) => {

  //console.log(event); (event.pageX + vis.margin.tooltipPadding)
  //console.log(event.pageY, event.pageX); (event.pageY + vis.margin.tooltipPadding)
  d3.select('body').select('#tooltip')
    .style('display', 'block')
    .style('left', (event.pageX + vis.margin.tooltipPadding) + 'px')   
    .style('top', (event.pageY + vis.margin.tooltipPadding) + 'px')
    .html(`
      <div><h>${vis.title}<h><div>
      <div>${vis.left} : ${d.key}</div>
      <div> Number of Exoplanets: ${d.value}</div>
    `).attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("position", "absolute");
})
.on('mouseleave', () => {
  d3.select('#tooltip').style('display', 'none');
});


vis.yCartesian
      .call(vis.yAxis);

    vis.xCartesian
      .call(vis.xAxis).selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");;


}


}




// class Discovchart{

//     constructor(_title, _leftAxis, _rightAxis, _svgTtitle, _dataSet){
//         this.data = _dataSet;
//         this.title = _title;
//         this.left = _leftAxis;
//         this.right = _rightAxis;
//         this.svgT = _svgTtitle;
//         this.color = '#36454F';

//         this.innitVis();
//     }
//     innitVis(){
//       let vis = this;
//       vis.margin = {top:50, right: 50, bottom: 50, left: 50, tooltipPadding: .2};
//       vis.layer = {width: 150 + vis.margin.right + vis.margin.left, height:100 + vis.margin.bottom + vis.margin.top};

//       vis.svg = d3.select(vis.svgT).append('svg').attr("width", vis.layer.width+ vis.margin.right+ vis.margin.left).attr("height", vis.layer.height+vis.margin.top+ vis.margin.bottom);

//       vis.titl = vis.svg.append("g").append("text").text(vis.title).attr("x", vis.margin.left).attr("y", 30).attr("text-anchor", "left");

//     // Label for x Axis
//     vis.svg.append("g").append("text")
//     .attr("transform", "translate(" + (vis.layer.width/2) + " ," + (vis.layer.height+90) + ")")
//     .style("text-anchor", "middle")
//     .text(vis.right);

//  // Label for y Axis
//  vis.svg.append("g").append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("x", -((vis.layer.height + vis.margin.top)/2))
//     .attr("y", (10))
//     .style("text-anchor", "middle")
//     .text(vis.left);

//     vis.background = d3.select(vis.svgT).append('svg').attr("width", vis.layer.width-20).attr("height", vis.layer.height - 20).attr("transform",`translate(-${vis.layer.width+ vis.margin.right},-${vis.margin.top})`);
//     vis.yCartesian = vis.svg.append("g")
//       .attr("transform", `translate(${vis.margin.right},${vis.margin.top})`);;
//     vis.xCartesian = vis.svg.append("g")
//       .attr("transform", `translate(${vis.margin.right},${vis.layer.height+ vis.margin.top})`);
  
  
//   }
//     updateVis(dat){
//       let vis = this;
//      // let color = '#36454F';
//       console.log("update Data: ", dat);
//       vis.data = dat;
//       vis.yScale = d3.scaleLinear()
//       .domain([d3.max(vis.data, d => d.value), 0]).range([0, vis.layer.height]);
  
//       //const xScale = d3.scaleBand().domain(starArr, d => d.stars).range([0, layer.width]).paddingInner(0.05);
//       vis.xScale = d3.scaleBand().domain(vis.data.map(d => d.key)).range([0, vis.layer.width]).padding(0.2);
//       vis.yAxis = d3.axisLeft(vis.yScale);
//       vis.xAxis = d3.axisBottom(vis.xScale); 

  

//    // vis.bars = vis.background.selectAll("rect").data(vis.data).join("g");

//   vis.rec = vis.background.selectAll("rect").data(vis.data).join("rect")
//   .attr("width", vis.xScale.bandwidth())
//   .attr("height", function(d) {return vis.layer.height - vis.yScale(d.value)})
//   .attr("x", function(d){return vis.xScale(d.key)})
//   .attr("y", function(d){return vis.yScale(d.value)}).style('fill', vis.color);

//   vis.rec.append("text").text(function(d) {return d => d.value});

//   vis.rec.on('mouseover', (event,d) => {

//     //console.log(event); (event.pageX + vis.margin.tooltipPadding)
//     //console.log(event.pageY, event.pageX); (event.pageY + vis.margin.tooltipPadding)
//     d3.select('body').select('#tooltip')
//       .style('display', 'block')
//       .style('left', (event.pageX + vis.margin.tooltipPadding) + 'px')   
//       .style('top', (event.pageY + vis.margin.tooltipPadding) + 'px')
//       .html(`
//         <div><h>${vis.title}<h><div>
//         <div>${vis.left} : ${d.key}</div>
//         <div> Number of Exoplanets: ${d.value}</div>
//       `).attr("class", "tooltip")
//       .style("background-color", "white")
//       .style("border", "solid")
//       .style("border-width", "2px")
//       .style("border-radius", "5px")
//       .style("padding", "5px")
//       .style("position", "absolute");
//   })
//   .on('mouseleave', () => {
//     d3.select('#tooltip').style('display', 'none');
//   });


//   vis.yCartesian
//         .call(vis.yAxis);

//       vis.xCartesian
//         .call(vis.xAxis);


// }


// }
//   constructor(_title, _leftAxis, _rightAxis, _svgTtitle, _dataSet){
//     this.data = _dataSet;
//     this.title = _title;
//     this.left = _leftAxis;
//     this.right = _rightAxis;
//     this.svgT = _svgTtitle;

//     this.innitVis();
// }
// innitVis(){
//   let vis = this;
//   vis.margin = {top:50, right: 50, bottom: 50, left: 50, tooltipPadding: .2};
//   vis.layer = {width: 150 + vis.margin.right + vis.margin.left, height:100 + vis.margin.bottom + vis.margin.top};

//   vis.svg = d3.select(vis.svgT).append('svg').attr("width", vis.layer.width+ vis.margin.right+ vis.margin.left).attr("height", vis.layer.height+vis.margin.top+ vis.margin.bottom + 140);

//   vis.svg.append("g").append("text").text(vis.title).attr("x", vis.margin.left).attr("y", 30).attr("text-anchor", "left");

// // Label for x Axis
// vis.svg.append("g").append("text")
// .attr("transform", "translate(" + (vis.layer.width/2) + " ," + (vis.layer.height+195) + ")")
// .style("text-anchor", "middle")
// .text(vis.right);

// // Label for y Axis
// vis.svg.append("g").append("text")
// .attr("transform", "rotate(-90)")
// .attr("x", -((vis.layer.height + vis.margin.top)/2))
// .attr("y", (10))
// .style("text-anchor", "middle")
// .text(vis.left);

// vis.background = d3.select(vis.svgT).append('svg').attr("width", vis.layer.width-20).attr("height", vis.layer.height+140).attr("transform",`translate(-${vis.layer.width+ vis.margin.right},-${vis.margin.top})`);
// vis.yCartesian = vis.svg.append("g")
// .attr("transform", `translate(${vis.margin.right},${vis.margin.top})`);;
// vis.xCartesian = vis.svg.append("g")
// .attr("transform", `translate(${vis.margin.right},${vis.layer.height-vis.margin.top})`).selectAll("text")  
// .style("text-anchor", "end")
// .attr("dx", "-.8em")
// .attr("dy", ".15em")
// .attr("transform", "rotate(-65)" );

// }
// updateVis(data){
//   let vis = this;
//   vis.data = data;

//   vis.yScale = d3.scaleLog()
// .domain([d3.max(vis.data, d => d.value), 1]).range([1, vis.layer.height]);

// //const xScale = d3.scaleBand().domain(starArr, d => d.stars).range([0, layer.width]).paddingInner(0.05);
// vis.xScale = d3.scaleBand().domain(vis.data.map(d => d.key)).range([1, vis.layer.width]).padding(0.2);
// vis.yAxis = d3.axisLeft(vis.yScale);
// vis.xAxis = d3.axisBottom(vis.xScale);


//  // vis.bars = vis.background.selectAll("rect").data(vis.data).enter().append("g");

// vis.rec = vis.background.selectAll("rect").data(vis.data).join("rect")
// .attr("width", vis.xScale.bandwidth())
// .attr("height", function(d) {return vis.layer.height - vis.yScale(d.value)})
// .attr("x", function(d){return vis.xScale(d.key)})
// .attr("y", function(d){return vis.yScale(d.value)});

// vis.rec.append("text").text(function(d) {return d => d.value});

// vis.rec.on('mouseover', (event,d) => {

// //console.log(event); (event.pageX + vis.margin.tooltipPadding)
// //console.log(event.pageY, event.pageX); (event.pageY + vis.margin.tooltipPadding)
// d3.select('body').select('#tooltip')
//   .style('display', 'block')
//   .style('left', (event.pageX + 10) + 'px')   
//   .style('top', (event.pageY + 10) + 'px')
//   .html(`
//     <div><h>${vis.title}<h><div>
//     <div>${vis.left} : ${d.key}</div>
//     <div> Number of Exoplanets: ${d.value}</div>
//   `).attr("class", "tooltip")
//   .style("background-color", "white")
//   .style("border", "solid")
//   .style("border-width", "2px")
//   .style("border-radius", "5px")
//   .style("padding", "5px")
//   .style("position", "absolute");
// })
// .on('mouseleave', () => {
// d3.select('#tooltip').style('display', 'none');
// });


// vis.yCartesian
// .call(vis.yAxis);

// vis.xCartesian
// .call(vis.xAxis);

// }


// }