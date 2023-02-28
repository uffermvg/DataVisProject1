
d3.csv('data/exoplanets.csv')
  .then(data => {  //ARROW function - pass data as a parameter into this anonymous function
  	console.log(data); //here it is!! Look in the console to see what it looks like
    data.forEach(d => {

      d.pl_rade = +d.pl_rade;

      //d.disc_year = +d.disc_year;

      d.pl_bmasse = +d.pl_bmasse;
      d.pl_orbsmax = +d.pl_orbsmax;

      d.sy_dist = +d.sy_dist;
      //console.log("first");

    });

    //Set up data for number of suns in system
    
    let sortedArr = setSunData(data);
    sunChart = new Barchart("Number of Stars in System", "Number of exoplanets", "Number of stars in System", '#numStars', sortedArr );
    sunChart.updateVis(sortedArr);

    //Set up data for number of planets
    
    let sortedPlanet = setPlanetData(data);
    planetChart = new Barchart("Number of Planets in System", "Number of exoplanets", "Number of planets in system", '#numPlanets', sortedPlanet);
    planetChart.updateVis(sortedPlanet);
    
    //Set up data for discovery type
    
    let sortedDiscov = setDiscovData(data);
    discovChart = new Discovchart("Prevelance of Discovery Type", "Number of exoplanets", "Discovery Type", '#discoveries', sortedDiscov);
    discovChart.updateVis(sortedDiscov);
   // discovChart.xCartesian.attr("transform", "rotate(-65)" );

    //Set up data for Orbit chart
    let orbitData = setStarType(data);
    orbitTypeChart = new Barchart("Type of Star a Planet Orbits", "Number of exoplanets", "Star Type", '#orbits', orbitData);
    orbitTypeChart.updateVis(orbitData);
    
    //There are only one scatter plot and one line chart so the data doesnt need to be prepared
    massScatterChart = new Scatterplot(data);
    massScatterChart.updateVis(data);

    //Set up habitiable distance data
    let HabitArr = setHabitData(data);
    habitableChart = new Barchart("Habitability of Exoplanets", "Number of habitable exoplanets", "Sun Type", '#habitable', HabitArr);
    habitableChart.updateVis(HabitArr);


    //Get distance from earth in intervals of 100


    let distsDatas = setDistData(data);
    circleChart = new distanceCircles('#dist',distsDatas);
    circleChart.updateVis(distsDatas);

    //Get discovery year data
    let sortedyears = setYearData(data);

    lineChart = new Line(sortedyears);
  
//call table
    table = new planetTable(data);
    table.updateVis(data);

    let dat = data;


    let sunf = [0,0,0,0];
    sunChart.rec.on('click',(event, d)=>{

      

     // sunChart.rec.select('rect').style("fill", "#1282A2");

      console.log("this is it: ",d);
      if(sunf[d.key] == 0){
        sunf[d.key] = 1;
        sunChart.color = "#1282A2";
      let filtered = filterSunData(d.key, data);

      let sun = setSunData(data);
      sunChart.updateVis(sun);

      let planet = setPlanetData(filtered)
      planetChart.updateVis(planet, 0);
      console.log('Event', filtered, "planet:", planetChart.data);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);

      let habit = setHabitData(filtered);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(filtered);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);

      massScatterChart.updateVis(filtered);



      }
      else{
        sunf[d.key] = 0;
        console.log("OLLD")
        sunChart.color = '#36454F';

        let sun = setSunData(data)
        sunChart.updateVis(sun);

      let planet = setPlanetData(data)
      planetChart.updateVis(planet);

      let dist = setDistData(data);
      circleChart.updateVis(dist);

      let habit = setHabitData(data);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(data);
      discovChart.updateVis(discov);

      let star = setStarType(data);
      orbitTypeChart.updateVis(star);

      table.updateVis(data);

      massScatterChart.updateVis(data);

      }
      
      
      
    } );

    let planf = [0,0,0,0, 0, 0, 0, 0];
    planetChart.rec.on('click',(event, d)=>{
      
      console.log("this is it: ",d);
      if(planf[d.key] == 0){
        planf[d.key] = 1;

        planetChart.color = "#1282A2";
      let filtered = filterSunData(d.key, data);
      let planet = setPlanetData(data)
      planetChart.updateVis(planet);

      let sun = setSunData(filtered)
      sunChart.updateVis(sun);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);

      let habit = setHabitData(filtered);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(filtered);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);
      massScatterChart.updateVis(filtered);

      }
      else{
        planf[d.key] = 0;

        planetChart.color = '#36454F';
        let planet = setPlanetData(data)
      planetChart.updateVis(planet);

      let sun = setSunData(data)
      sunChart.updateVis(sun);

      let dist = setDistData(data);
      circleChart.updateVis(dist);

      let habit = setHabitData(data);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(data);
      discovChart.updateVis(discov);

      let star = setStarType(data);
      orbitTypeChart.updateVis(star);

      table.updateVis(data);
      massScatterChart.updateVis(data);

      }
      
      
      
    } );

   // let starf = Array.from(star, function(d) {return{key: d[0], value: d[1]};} );

    let starf = [0, 0, 0, 0, 0]
    orbitTypeChart.rec.on('click',(event, d)=>{



        if(d.key == 'A' &&  starf[0] == 0){
       // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
       starf[0] = 1;
       orbitTypeChart.color = "#1282A2";
       let filtered = filterStarData(d.key, data);
       let planet = setPlanetData(filtered)
       planetChart.updateVis(planet);
 
       let sun = setSunData(filtered)
       sunChart.updateVis(sun);
 
       let dist = setDistData(filtered);
       circleChart.updateVis(dist);
 
       let habit = setHabitData(filtered);
       habitableChart.updateVis(habit);
 
       let discov = setDiscovData(filtered);
       discovChart.updateVis(discov);
 
       let star = setStarType(data);
       orbitTypeChart.updateVis(star);
 
       table.updateVis(filtered);
       massScatterChart.updateVis(filtered);
  
        }
        else if(d.key == 'A' &&  starf[0] == 1){
          // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
          starf[0] = 0;
          //orbitTypeChart.
          orbitTypeChart.color = '#36454F';
          let planet = setPlanetData(data)
        planetChart.updateVis(planet);
  
        let sun = setSunData(data)
        sunChart.updateVis(sun);
  
        let dist = setDistData(data);
        circleChart.updateVis(dist);
  
        let habit = setHabitData(data);
        habitableChart.updateVis(habit);
  
        let discov = setDiscovData(data);
        discovChart.updateVis(discov);
  
        let star = setStarType(data);
        orbitTypeChart.updateVis(star);
  
        table.updateVis(data);
        massScatterChart.updateVis(data);
 
 
         }
        else if(d.key == 'F' &&  starf[1] == 0){
          // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
          starf[1] = 1;
          orbitTypeChart.color = "#1282A2";
       let filtered = filterStarData(d.key, data);
       let planet = setPlanetData(filtered)
       planetChart.updateVis(planet);
 
       let sun = setSunData(filtered)
       sunChart.updateVis(sun);
 
       let dist = setDistData(filtered);
       circleChart.updateVis(dist);
 
       let habit = setHabitData(filtered);
       habitableChart.updateVis(habit);
 
       let discov = setDiscovData(filtered);
       discovChart.updateVis(discov);
 
       let star = setStarType(data);
       orbitTypeChart.updateVis(star);
 
       table.updateVis(filtered);
       massScatterChart.updateVis(filtered);
     
           }
           else if(d.key == 'F' &&  starf[1] == 1){
            // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
            starf[1] = 0;
            orbitTypeChart.color = '#36454F';
            let planet = setPlanetData(data)
          planetChart.updateVis(planet);
    
          let sun = setSunData(data)
          sunChart.updateVis(sun);
    
          let dist = setDistData(data);
          circleChart.updateVis(dist);
    
          let habit = setHabitData(data);
          habitableChart.updateVis(habit);
    
          let discov = setDiscovData(data);
          discovChart.updateVis(discov);
    
          let star = setStarType(data);
          orbitTypeChart.updateVis(star);
    
          table.updateVis(data);
          massScatterChart.updateVis(data);
   
   
           }

           else if(d.key == 'G' &&  starf[2] == 0){
            // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
            starf[2] = 1;
            orbitTypeChart.color = "#1282A2";
       let filtered = filterStarData(d.key, data);
       let planet = setPlanetData(filtered)
       planetChart.updateVis(planet);
 
       let sun = setSunData(filtered)
       sunChart.updateVis(sun);
 
       let dist = setDistData(filtered);
       circleChart.updateVis(dist);
 
       let habit = setHabitData(filtered);
       habitableChart.updateVis(habit);
 
       let discov = setDiscovData(filtered);
       discovChart.updateVis(discov);
 
       let star = setStarType(data);
       orbitTypeChart.updateVis(star);
 
       table.updateVis(filtered);
       massScatterChart.updateVis(filtered);
       
             }
             else if(d.key == 'G' &&  starf[2] == 1){
              // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
              starf[2] = 0;
              orbitTypeChart.color = '#36454F';
              let planet = setPlanetData(data)
            planetChart.updateVis(planet);
      
            let sun = setSunData(data)
            sunChart.updateVis(sun);
      
            let dist = setDistData(data);
            circleChart.updateVis(dist);
      
            let habit = setHabitData(data);
            habitableChart.updateVis(habit);
      
            let discov = setDiscovData(data);
            discovChart.updateVis(discov);
      
            let star = setStarType(data);
            orbitTypeChart.updateVis(star);
      
            table.updateVis(data);
            massScatterChart.updateVis(data);
     
     
             }

             else if(d.key == 'K' &&  starf[3] == 0){
              // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
              starf[3] = 1;
              orbitTypeChart.color = "#1282A2";
       let filtered = filterStarData(d.key, data);
       let planet = setPlanetData(filtered)
       planetChart.updateVis(planet);
 
       let sun = setSunData(filtered)
       sunChart.updateVis(sun);
 
       let dist = setDistData(filtered);
       circleChart.updateVis(dist);
 
       let habit = setHabitData(filtered);
       habitableChart.updateVis(habit);
 
       let discov = setDiscovData(filtered);
       discovChart.updateVis(discov);
 
       let star = setStarType(data);
       orbitTypeChart.updateVis(star);
 
       table.updateVis(filtered);
       massScatterChart.updateVis(filtered);
         
               }
               else if(d.key == 'K' &&  starf[3] == 1){
                // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
                starf[3] = 0;
                orbitTypeChart.color = '#36454F';
                let planet = setPlanetData(data)
              planetChart.updateVis(planet);
        
              let sun = setSunData(data)
              sunChart.updateVis(sun);
        
              let dist = setDistData(data);
              circleChart.updateVis(dist);
        
              let habit = setHabitData(data);
              habitableChart.updateVis(habit);
        
              let discov = setDiscovData(data);
              discovChart.updateVis(discov);
        
              let star = setStarType(data);
              orbitTypeChart.updateVis(star);
        
              table.updateVis(data);
              massScatterChart.updateVis(data);
       
       
               }
               else if(d.key == 'M' &&  starf[4] == 0){
                // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
                starf[4] = 1;
                orbitTypeChart.color = "#1282A2";
       let filtered = filterStarData(d.key, data);
       let planet = setPlanetData(filtered)
       planetChart.updateVis(planet);
 
       let sun = setSunData(filtered)
       sunChart.updateVis(sun);
 
       let dist = setDistData(filtered);
       circleChart.updateVis(dist);
 
       let habit = setHabitData(filtered);
       habitableChart.updateVis(habit);
 
       let discov = setDiscovData(filtered);
       discovChart.updateVis(discov);
 
       let star = setStarType(data);
       orbitTypeChart.updateVis(star);
 
       table.updateVis(filtered);
       massScatterChart.updateVis(filtered);
           
                 }
                 else if(d.key == 'M' &&  starf[4] == 1){
                  // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
                  starf[4] = 0;
                  orbitTypeChart.color = '#36454F';
                  let planet = setPlanetData(data)
                planetChart.updateVis(planet);
          
                let sun = setSunData(data)
                sunChart.updateVis(sun);
          
                let dist = setDistData(data);
                circleChart.updateVis(dist);
          
                let habit = setHabitData(data);
                habitableChart.updateVis(habit);
          
                let discov = setDiscovData(data);
                discovChart.updateVis(discov);
          
                let star = setStarType(data);
                orbitTypeChart.updateVis(star);
          
                table.updateVis(data);
                massScatterChart.updateVis(data);
         
         
                 }
      
      
      
    } );



   // let starf = Array.from(star, function(d) {return{key: d[0], value: d[1]};} );

   let habitf = [0, 0, 0, 0, 0]
   habitableChart.rec.on('click',(event, d)=>{



       if(d.key == 'A' &&  habitf[0] == 0){
      // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
      habitf[0] = 1;
      habitableChart.color = "#1282A2";
      let cor = filterStarData(d.key, data);
      let filtered = filterHabitData(8.5,12.5, cor);
      let planet = setPlanetData(filtered)
      planetChart.updateVis(planet);

      let sun = setSunData(filtered)
      sunChart.updateVis(sun);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);

      let habit = setHabitData(data);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(filtered);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);
      massScatterChart.updateVis(filtered);
 
       }
       else if(d.key == 'A' &&  habitf[0] == 1){
         // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
         habitf[0] = 0;
         //orbitTypeChart.
         habitableChart.color = '#36454F';
         let planet = setPlanetData(data)
       planetChart.updateVis(planet);
 
       let sun = setSunData(data)
       sunChart.updateVis(sun);
 
       let dist = setDistData(data);
       circleChart.updateVis(dist);
 
       let habit = setHabitData(data);
       habitableChart.updateVis(habit);
 
       let discov = setDiscovData(data);
       discovChart.updateVis(discov);
 
       let star = setStarType(data);
       orbitTypeChart.updateVis(star);
 
       table.updateVis(data);
       massScatterChart.updateVis(data);


        }
       else if(d.key == 'F' &&  habitf[1] == 0){
         // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
         habitf[1] = 1;
         habitableChart.color = "#1282A2";
         let cor = filterStarData(d.key, data);
         let filtered = filterHabitData(1.5,2.2, cor);
      let planet = setPlanetData(filtered)
      planetChart.updateVis(planet);

      let sun = setSunData(filtered)
      sunChart.updateVis(sun);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);

      let habit = setHabitData(filtered);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(filtered);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);
      massScatterChart.updateVis(filtered);
    
          }
          else if(d.key == 'F' &&  habitf[1] == 1){
           // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
           habitf[1] = 0;
           habitableChart.color = '#36454F';
           let planet = setPlanetData(data)
         planetChart.updateVis(planet);
   
         let sun = setSunData(data)
         sunChart.updateVis(sun);
   
         let dist = setDistData(data);
         circleChart.updateVis(dist);
   
         let habit = setHabitData(data);
         habitableChart.updateVis(habit);
   
         let discov = setDiscovData(data);
         discovChart.updateVis(discov);
   
         let star = setStarType(data);
         orbitTypeChart.updateVis(star);
   
         table.updateVis(data);
         massScatterChart.updateVis(data);
  
  
          }

          else if(d.key == 'G' &&  habitf[2] == 0){
           // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
           habitf[2] = 1;
           habitableChart.color = "#1282A2";
           let cor = filterStarData(d.key, data);
           let filtered = filterHabitData(0.95,1.4, cor);
      let planet = setPlanetData(filtered)
      planetChart.updateVis(planet);

      let sun = setSunData(filtered)
      sunChart.updateVis(sun);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);
      let habit = setHabitData(filtered);
      habitableChart.updateVis(habit);
     

      let discov = setDiscovData(filtered);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);
      massScatterChart.updateVis(filtered);
      
            }
            else if(d.key == 'G' &&  habitf[2] == 1){
             // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
             habitf[2] = 0;
             habitableChart.color = '#36454F';
             let planet = setPlanetData(data)
           planetChart.updateVis(planet);
     
           let sun = setSunData(data)
           sunChart.updateVis(sun);
     
           let dist = setDistData(data);
           circleChart.updateVis(dist);
     
           let habit = setHabitData(data);
           habitableChart.updateVis(habit);
     
           let discov = setDiscovData(data);
           discovChart.updateVis(discov);
     
           let star = setStarType(data);
           orbitTypeChart.updateVis(star);
     
           table.updateVis(data);
           massScatterChart.updateVis(data);
    
    
            }

            else if(d.key == 'K' &&  habitf[3] == 0){
             // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
             habitf[3] = 1;
             habitableChart.color = "#1282A2";
             let cor = filterStarData(d.key, data);
             let filtered = filterHabitData(0.35,0.56, cor);
      let planet = setPlanetData(filtered)
      planetChart.updateVis(planet);

      let sun = setSunData(filtered)
      sunChart.updateVis(sun);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);

      let habit = setHabitData(filtered);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(filtered);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);
      massScatterChart.updateVis(filtered);
        
              }
              else if(d.key == 'K' &&  habitf[3] == 1){
               // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
               habitf[3] = 0;
               habitableChart.color = '#36454F';
               let planet = setPlanetData(data)
             planetChart.updateVis(planet);
       
             let sun = setSunData(data)
             sunChart.updateVis(sun);
       
             let dist = setDistData(data);
             circleChart.updateVis(dist);
       
             let habit = setHabitData(data);
             habitableChart.updateVis(habit);
       
             let discov = setDiscovData(data);
             discovChart.updateVis(discov);
       
             let star = setStarType(data);
             orbitTypeChart.updateVis(star);
       
             table.updateVis(data);
             massScatterChart.updateVis(data);
      
      
              }
              else if(d.key == 'M' &&  habitf[4] == 0){
               // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
               habitf[4] = 1;
               habitableChart.color = "#1282A2";
               let cor = filterStarData(d.key, data);
               let filtered = filterHabitData(0.08,0.12, cor);
      let planet = setPlanetData(filtered)
      planetChart.updateVis(planet);

      let sun = setSunData(filtered)
      sunChart.updateVis(sun);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);

      let habit = setHabitData(filtered);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(filtered);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);
      massScatterChart.updateVis(filtered);
          
                }
                else if(d.key == 'M' &&  habitf[4] == 1){
                 // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
                 habitf[4] = 0;
                 habitableChart.color = '#36454F';
                 let planet = setPlanetData(data)
               planetChart.updateVis(planet);
         
               let sun = setSunData(data)
               sunChart.updateVis(sun);
         
               let dist = setDistData(data);
               circleChart.updateVis(dist);
         
               let habit = setHabitData(data);
               habitableChart.updateVis(habit);
         
               let discov = setDiscovData(data);
               discovChart.updateVis(discov);
         
               let star = setStarType(data);
               orbitTypeChart.updateVis(star);
         
               table.updateVis(data);
               massScatterChart.updateVis(data);
        
        
                }
     
     
     
   } );

   let discovf = [0, 0, 0, 0, 0]
   discovChart.rec.on('click',(event, d)=>{



       if(discovf[0] == 0){
      // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
      discovf[0] = 1;
      discovChart.color = "#1282A2";
      let filtered = filterDiscovData(d.key, data);
      let planet = setPlanetData(filtered)
      planetChart.updateVis(planet);

      let sun = setSunData(filtered)
      sunChart.updateVis(sun);

      let dist = setDistData(filtered);
      circleChart.updateVis(dist);

      let habit = setHabitData(filtered);
      habitableChart.updateVis(habit);

      let discov = setDiscovData(data);
      discovChart.updateVis(discov);

      let star = setStarType(filtered);
      orbitTypeChart.updateVis(star);

      table.updateVis(filtered);
      massScatterChart.updateVis(filtered);
 
       }
       else if( discovf[0] == 1){
         // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
         discovf[0] = 0;
         //orbitTypeChart.
         discovChart.color = '#36454F';
         let planet = setPlanetData(data)
       planetChart.updateVis(planet);
 
       let sun = setSunData(data)
       sunChart.updateVis(sun);
 
       let dist = setDistData(data);
       circleChart.updateVis(dist);
 
       let habit = setHabitData(data);
       habitableChart.updateVis(habit);
 
       let discov = setDiscovData(data);
       discovChart.updateVis(discov);
 
       let star = setStarType(data);
       orbitTypeChart.updateVis(star);
 
       table.updateVis(data);
       massScatterChart.updateVis(data);


        }
      //  else if(d.key == 'F' &&  discovf[1] == 0){
      //    // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
      //    discovf[1] = 1;
      //    discovChart.color = "#1282A2";
      // let filtered = filterDiscovData(d.key, data);
      // let planet = setPlanetData(filtered)
      // planetChart.updateVis(planet);

      // let sun = setSunData(filtered)
      // sunChart.updateVis(sun);

      // let dist = setDistData(filtered);
      // circleChart.updateVis(dist);

      // let habit = setHabitData(data);
      // habitableChart.updateVis(habit);

      // let discov = setDiscovData(filtered);
      // discovChart.updateVis(discov);

      // let star = setStarType(filtered);
      // orbitTypeChart.updateVis(star);

      // table.updateVis(filtered);
      // massScatterChart.updateVis(filtered);
    
      //     }
      //     else if(d.key == 'F' &&  discovf[1] == 1){
      //      // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
      //      discovf[1] = 0;
      //      discovChart.color = '#36454F';
      //      let planet = setPlanetData(data)
      //    planetChart.updateVis(planet);
   
      //    let sun = setSunData(data)
      //    sunChart.updateVis(sun);
   
      //    let dist = setDistData(data);
      //    circleChart.updateVis(dist);
   
      //    let habit = setHabitData(data);
      //    habitableChart.updateVis(habit);
   
      //    let discov = setDiscovData(data);
      //    discovChart.updateVis(discov);
   
      //    let star = setStarType(data);
      //    orbitTypeChart.updateVis(star);
   
      //    table.updateVis(data);
      //    massScatterChart.updateVis(data);
  
  
      //     }

      //     else if(d.key == 'G' &&  discovf[2] == 0){
      //      // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
      //      discovf[2] = 1;
      //      discovChart.color = "#1282A2";
      // let filtered = filterDiscovData(d.key, data);
      // let planet = setPlanetData(filtered)
      // planetChart.updateVis(planet);

      // let sun = setSunData(filtered)
      // sunChart.updateVis(sun);

      // let dist = setDistData(filtered);
      // circleChart.updateVis(dist);

      // let habit = setHabitData(data);
      // habitableChart.updateVis(habit);

      // let discov = setDiscovData(filtered);
      // discovChart.updateVis(discov);

      // let star = setStarType(filtered);
      // orbitTypeChart.updateVis(star);

      // table.updateVis(filtered);
      // massScatterChart.updateVis(filtered);
      
      //       }
      //       else if(d.key == 'G' &&  discovf[2] == 1){
      //        // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
      //        discovf[2] = 0;
      //        discovChart.color = '#36454F';
      //        let planet = setPlanetData(data)
      //      planetChart.updateVis(planet);
     
      //      let sun = setSunData(data)
      //      sunChart.updateVis(sun);
     
      //      let dist = setDistData(data);
      //      circleChart.updateVis(dist);
     
      //      let habit = setHabitData(data);
      //      habitableChart.updateVis(habit);
     
      //      let discov = setDiscovData(data);
      //      discovChart.updateVis(discov);
     
      //      let star = setStarType(data);
      //      orbitTypeChart.updateVis(star);
     
      //      table.updateVis(data);
      //      massScatterChart.updateVis(data);
    
    
      //       }

      //       else if(d.key == 'K' &&  discovf[3] == 0){
      //        // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
      //        discovf[3] = 1;
      //        discovChart.color = "#1282A2";
      // let filtered = filterDiscovData(d.key, data);
      // let planet = setPlanetData(filtered)
      // planetChart.updateVis(planet);

      // let sun = setSunData(filtered)
      // sunChart.updateVis(sun);

      // let dist = setDistData(filtered);
      // circleChart.updateVis(dist);

      // let habit = setHabitData(data);
      // habitableChart.updateVis(habit);

      // let discov = setDiscovData(filtered);
      // discovChart.updateVis(discov);

      // let star = setStarType(filtered);
      // orbitTypeChart.updateVis(star);

      // table.updateVis(filtered);
      // massScatterChart.updateVis(filtered);
        
      //         }
      //         else if(d.key == 'K' &&  habitf[3] == 1){
      //          // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
      //          habitf[3] = 0;
      //          habitableChart.color = '#36454F';
      //          let planet = setPlanetData(data)
      //        planetChart.updateVis(planet);
       
      //        let sun = setSunData(data)
      //        sunChart.updateVis(sun);
       
      //        let dist = setDistData(data);
      //        circleChart.updateVis(dist);
       
      //        let habit = setHabitData(data);
      //        habitableChart.updateVis(habit);
       
      //        let discov = setDiscovData(data);
      //        discovChart.updateVis(discov);
       
      //        let star = setStarType(data);
      //        orbitTypeChart.updateVis(star);
       
      //        table.updateVis(data);
      //        massScatterChart.updateVis(data);
      
      
      //         }
      //         else if(d.key == 'M' &&  habitf[4] == 0){
      //          // window.location.href = "https://en.wikipedia.org/wiki/A-type_main-sequence_star";
      //          habitf[4] = 1;
      //          habitableChart.color = "#1282A2";
      //          let cor = filterStarData(d.key, data);
      //          let filtered = filterHabitData(0.08,0.12, cor);
      // let planet = setPlanetData(filtered)
      // planetChart.updateVis(planet);

      // let sun = setSunData(filtered)
      // sunChart.updateVis(sun);

      // let dist = setDistData(filtered);
      // circleChart.updateVis(dist);

      // let habit = setHabitData(filtered);
      // habitableChart.updateVis(habit);

      // let discov = setDiscovData(filtered);
      // discovChart.updateVis(discov);

      // let star = setStarType(filtered);
      // orbitTypeChart.updateVis(star);

      // table.updateVis(filtered);
      // massScatterChart.updateVis(filtered);
          
      //           }
      //           else if(d.key == 'M' &&  habitf[4] == 1){
      //            // window.location.href = "https://en.wikipedia.org/wiki/F-type_main-sequence_star";
      //            habitf[4] = 0;
      //            habitableChart.color = '#36454F';
      //            let planet = setPlanetData(data)
      //          planetChart.updateVis(planet);
         
      //          let sun = setSunData(data)
      //          sunChart.updateVis(sun);
         
      //          let dist = setDistData(data);
      //          circleChart.updateVis(dist);
         
      //          let habit = setHabitData(data);
      //          habitableChart.updateVis(habit);
         
      //          let discov = setDiscovData(data);
      //          discovChart.updateVis(discov);
         
      //          let star = setStarType(data);
      //          orbitTypeChart.updateVis(star);
         
      //          table.updateVis(data);
      //          massScatterChart.updateVis(data);
        
        
      //           }
     
     
     
   } );


   
  })
  .catch(error => console.error(error));

  function setYearData(data){
    let discYears = d3.rollup(data, v => v.length, d => d.disc_year);
    console.log(discYears);

    const yearArr = Array.from(discYears, function(d){return{key: d[0], value: d[1]};});
    console.log(yearArr);

    let sortedyears = yearArr.slice().sort((a,b) => d3.ascending(a.key, b.key));
    console.log("Years " ,sortedyears);
    return sortedyears;

  }
  function filterSunData(dat, data){

    let filtered = data.filter(function(d) {return d.sy_snum == dat; });

    return filtered;
  }
  function setSunData(data){
    let starsGraphData = d3.rollup(data, v => v.length, d => d.sy_snum);
    console.log(starsGraphData);

    const starArr = Array.from(starsGraphData, function(d){return{key: d[0], value: d[1]};});
    console.log(starArr);

    let sortedArr = starArr.slice().sort((a,b) => d3.ascending(a.key, b.key));
    console.log("Sun: ",sortedArr);
    return starArr;

  }
  function filterPlanetData(dat, data){

    let filtered = data.filter(function(d) {return d.sy_pnum == dat; });

    return filtered;
  }
  function setPlanetData(data){
    let planetData = d3.rollup(data, v => v.length, d => d.sy_pnum);
    console.log(planetData);

    const planetArr = Array.from(planetData, function(d){return{key: d[0], value: d[1]};});
    console.log(planetArr);

    let sortedPlanet = planetArr.slice().sort((a,b) => d3.ascending(a.key, b.key));
    console.log("Planets: ",sortedPlanet);
    return sortedPlanet;

  }
  function filterDistData(dat, data){

    let filtered = data.filter(function(d) {return d.sy_dist == dat; });

    return filtered;
  }
  function setDistData(data){
    
    let distData = d3.rollup(data, v => v.length, d => d.sy_dist);
    console.log(distData);

    const distArr = Array.from(distData, function(d){return{key: d[0], value: d[1]};});
    console.log(distArr);

    let sortedDist = distArr.slice().sort((a,b) => d3.ascending(a.key, b.key));
    console.log(sortedDist);

    var Dists = new Map();
    var v = 0;
    let c = 100;

    for (i=0; i< sortedDist.length;i++){
        if(sortedDist[i].key <= c){

          v = sortedDist[i].value + v;

            Dists.set(c, v);

        }
        else{
          v = sortedDist[i].value;
          c = (sortedDist[i].key + 100);
          Dists.set(c, v);

        }


      }

    const distsDatas = Array.from(Dists, function(d){return{key: d[0], value: d[1]};});
    console.log( "dists data", distsDatas);
    return distsDatas;

  }
  function filterHabitData(min,max, data){

    let filtered = data.filter(function(d) {return (d.pl_orbsmax > min && d.pl_orbsmax < max); });

    return filtered;
  }
  function setHabitData(data){
    let habitData = d3.group(data, d=>d.st_spectype);
    console.log("specType", habitData);
    let habits = new Map();
    let nonhabits = new Map();

    var ah =0;
    var fh= 0;
    var gh =0;
    var kh = 0;
    var mh =0;
    var an = 0;
    var fn = 0;
    var gn = 0;
    var kn = 0;
    var mn = 0;
    data.forEach(d =>{
      if(d.st_spectype.startsWith("A")){
        if(d.pl_orbsmax < 12.5 && d.pl_orbsmax > 8.5){
          ah = ah + 1;

        }
          else{
            an = an + 1;
          }
      }
      else if(d.st_spectype.startsWith("F")){
        if(d.pl_orbsmax < 2.2 && d.pl_orbsmax > 1.5){
          fh = fh + 1;

        }
          else{
            fn = fn + 1;
          }
      }
      else if(d.st_spectype.startsWith("G")){
        if(d.pl_orbsmax < 1.4 && d.pl_orbsmax > .95 ){
          gh = gh + 1;

        }
          else{
            gn = gn + 1;
          }
      }
      else if(d.st_spectype.startsWith("K")){
        if(d.pl_orbsmax <  .56 && d.pl_orbsmax > .35){
          kh = kh + 1;

        }
          else{
            kn = kn + 1;
          }
      }
      else if(d.st_spectype.startsWith("M")){
        if(d.pl_orbsmax > .08 && d.pl_orbsmax < .12){
          mh = mh + 1;

        }
          else{
            mn = mn + 1;
          }
      }

    });

    habits.set('A', ah);
    nonhabits.set('A', an);
    habits.set('F', fh);
    nonhabits.set('F', fn);
    habits.set('G', gh);
    nonhabits.set('G', gn);
    habits.set('K', kh);
    nonhabits.set('K', kn);
    habits.set('M', mh);
    nonhabits.set('M', mn);

    const HabitArr = Array.from(habits, function(d){return{key: d[0], value: d[1]};});
    console.log("orbit habitable", HabitArr);
    return HabitArr;

  }
  function filterDiscovData(dat, data){

    let filtered = data.filter(function(d) {return d.discoverymethod == dat; });

    return filtered;
  }
  function setDiscovData(data){
    let discoveryData = d3.rollup(data, v => v.length, d => d.discoverymethod);
    console.log(discoveryData);

    const discovArr = Array.from(discoveryData, function(d){return{key: d[0], value: d[1]};});
    console.log(discovArr);

    let sortedDiscov = discovArr.slice().sort((a,b) => d3.descending(a.value, b.value));
    console.log("DiscoveryType: ",sortedDiscov);
    return sortedDiscov;

  }
  function filterStarData(dat, data){

    let filtered = data.filter(function(d) {return d.st_spectype.startsWith(dat); });

    return filtered;
  }
  function setStarType(data){
    let discovery = d3.rollup(data, v => v.length, d => d.st_spectype);
    console.log(discovery);

    const discovAr = Array.from(discovery, function(d){return{discov: d[0], planets: d[1]};});
    console.log(discovAr);

    let SortedData = discovAr.slice().sort((a,b) => d3.ascending(a.discov, b.discov));
    let map = new Map();
    var a =0;
    var f= 0;
    var g =0;
    var k = 0;
    var m =0;
    SortedData.forEach(d =>{
      if(d.discov.startsWith("A")){
          a = a + d.planets;
      }
      else if(d.discov.startsWith("F")){
        f = f + d.planets;
      }
      else if(d.discov.startsWith("G")){
        g = g + d.planets;
      }
      else if(d.discov.startsWith("K")){
        k = k + d.planets;
      }
      else if(d.discov.startsWith("M")){
        m = m + d.planets;
      }

    });

    map.set('A', a);
    map.set('F', f);
    map.set('G', g);
    map.set('K', k);
    map.set('M', m);


    const orbitData = Array.from(map, function(d){return{key: d[0], value: d[1]};});
    console.log("orbit", orbitData);
    return orbitData;

  }








 