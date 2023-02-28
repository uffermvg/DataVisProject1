//<script src="zdog-demo.js"></script>

// create illo
const TAU = Zdog.TAU;
const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.illo',
    dragRotate: true,
    rotate: {x: -TAU/8},
  });



const head = new Zdog.Shape({
    addTo: illo,
    stroke:200,
    translate: { y: -38},
    color: "#EA0",
    

});

// const eye = new Zdog.Ellipse({
//     addTo: head,
//     diameter: 10,
//     quarters: 4,
//     translate: {y: 4, x: 8, z: 18},
//     rotate: {z: -TAU/4 },
//     stroke: 2,
//     color: '#636',
//     backface: false,
// });

// eye.copy({
//     translate: {y: 4, x: -8, z: 18},
// });

// const smile = new Zdog.Ellipse({
//     addTo: head,
//     diameter: 12,
//     quarters: 2,
//     translate: {y: 10, z: 18},
//     rotate: {z: TAU/4 },
//     closed: true,
//     color: '#FED',
//     stroke: 2,
//     fill: true,
//     backface: false,
// });

function animate(){
    illo.rotate.y += 0.03;
    illo.rotate.x += 0.05;
    illo.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()


  