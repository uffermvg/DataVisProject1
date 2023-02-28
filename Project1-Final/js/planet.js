


// let ringGroup;
// let rings = [];
// let ringCount = 70;
// let ringDiameter = 350;
// let starGroup;
// let stars = [];
// let starCount = 100;
// let starRange = 200;

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
    color: "#034078",
    

});

let shape = new Zdog.Ellipse({
    addTo: head,
    diameter:   200 ,
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random() * 30) },
    color: "#1282A2",
    quarters: Math.floor(Math.random() * 3),

});

shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
    color: "#034078",
});
shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
    color: "#034078",
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
});

shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
    color: "#034078",
});
shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Zdog.TAU) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
});

shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
    color: "#034078",
});
shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
    color: "#034078",
});
shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) *  Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * 30) },
    quarters: Math.floor(Math.random() * 3),
    color: "#034078",
});
shape.copy({
    translate: { z: -Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) * Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
});
shape.copy({
    translate: { z: Math.floor(Math.random() * 60)},
    rotate: { z: Math.floor(Math.random(Zdog.TAU) *  Math.floor(Math.random() * 30)) },
    quarters: Math.floor(Math.random() * 3),
});




// function addRings(){
//     for(let i = 0; i < 70; i++) {
//         let p = i / (69);
//         let shape = new Zdog.Ellipse({
//             addTo: head,
//             diameter: Math.sin(p * Zdog.TAU / 2) * 250 / 2,
//             translate: { z: Math.cos(p * Zdog.TAU / 2) * 250 / 4 },
//             rotate: { z: Math.rand(Zdog.TAU) },
//             color: "#E4500",
//             quarters: Math.floor(Math.random() * 3),

//         });
//     }


// }

// addRings()

function animate(){
    illo.rotate.z += 0.03;
    //illo.rotate.x += 0.05;
    illo.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()

// ringGroup = new Zdog.Group({ addTo: illo });
// starGroup = new Zdog.Group({ addTo: illo });

// ringGroup.render = function(ctx) {
//   ctx.globalCompositeOperation = 'screen';
//   Zdog.Group.prototype.render.apply(this, arguments);
// };

// for(let i = 0; i < ringCount; i++) {
//   let p = i / (ringCount - 1);
//   rings.push({
//     shape: new Zdog.Ellipse({
//       addTo: ringGroup,
//       diameter: Math.sin(p * Zdog.TAU / 2) * ringDiameter / 2,
//       translate: { z: Math.cos(p * Zdog.TAU / 2) * ringDiameter / 4 },
//       rotate: { z: Calc.rand(Zdog.TAU) },
//       color: `hsla(${Calc.map(p, 0, 1, 180, 360)}, 90%, 50%, 1)`,
//       quarters: Calc.randInt(1, 3)
//     }),
//     spin: Calc.rand(0.001, 0.03)
//   });
// }

// for(let i = 0; i < starCount; i++) {
//   stars.push({
//     shape: new Zdog.Ellipse({
//       addTo: starGroup,
//       diameter: 0,
//       translate: {
//         x: Calc.rand(-starRange, starRange),
//         y: Calc.rand(-starRange, starRange),
//         z: Calc.rand(-starRange, starRange),
//       },
//       stroke: Calc.rand(0.5, 2),
//       color: `hsla(0, 0%, 100%, ${Calc.rand(0.1, 1)})`,
//     })
//   });
// }

// function animate() {
//   ringGroup.rotate.y -= 0.003;
//   ringGroup.rotate.x += 0.003;

//   starGroup.rotate.y += 0.0005;
//   starGroup.rotate.x -= 0.0007;
//   starGroup.rotate.z -= 0.0009;
  
//   for(let i = 0, len = rings.length; i < len; i++) {
//     let ring = rings[i].shape;
//     ring.stroke = Calc.map(Math.sin(Date.now() * 0.005 + i * 0.2), -1, 1, 1, 3);
//     ring.rotate.z += rings[i].spin;
//   }
  
//   for(let i = 0, len = stars.length; i < len; i++) {
//     let star = stars[i].shape;
//     star.stroke = Calc.map(Math.sin(Date.now() * 0.002 + i * 0.4), -1, 1, 0.5, 2);
//   }

//   illo.updateRenderGraph();
//   window.requestAnimationFrame(animate);
// }

// animate();