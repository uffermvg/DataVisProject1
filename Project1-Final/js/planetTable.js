class planetTable{
    constructor(_data){
        this.data = _data;
        this.newData = _data;
      
        this.innitVis();

    }
    innitVis(){
        let vis = this;
        vis.table = new Tabulator("#example-table", {
            data: vis.data,
            height: "300px",
            selectable: 1,
            layout:"fitDataTable",
            columns:[
              {title: "Name", field: "pl_name", hozAlign:"center"},
              {title: "System Name", field: "sys_name", hozAlign: "center"},
              {title: "Star Type", field: "st_spectype", hozAlign: "center"},
            ],
      
          });
        
    }
    updateVis(data){
        let vis = this;

        vis.data = data;

        this.table.replaceData(data);

        vis.table.on("rowClick", function(e, d){
            d3.select('#Info').html(`
            <div> <h>Planet Name: <h>${d.getData().pl_name}</div>
              <div><i><h> System Name: <h>${d.getData().sys_name}</i></div>
              <ul>
                <li> Mass: ${d.getData().pl_bmasse} Earth Mass</li>
                <li> Radius: ${d.getData().rade} Earth Radius</li>
              </ul>
              <ul>
                <li> Discovery type: ${d.getData().discoverymethod}</li>
                <li> Discovery Year: ${d.getData().disc_year} </li>
              </ul>
              <ul>
                <li> Orbital Period: ${d.getData().pl_orbper} days</li>
                <li> Orbit Semi-Major Axis: ${d.getData().pl_orbsmax} AU</li>
                <li> Orbit Eccentricity; ${d.getData().orbeccen} <li>
              </ul>
          `);

        });



    }
}

