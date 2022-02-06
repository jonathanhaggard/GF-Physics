!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);



window.addEventListener('load', function() {

  //Fetch our canvas
  var canvas = document.getElementById('world');
  var cannyw = window.innerWidth/2;
  var cannyh = window.innerHeight;
  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Common = Matter.Common,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Vertices = Matter.Vertices,
      Svg = Matter.Svg,
      Bodies = Matter.Bodies;
  function percentX(percent) {
    return Math.round(percent/100 * window.innerWidth)/2;
  }
  function percentY(percent) {
    return Math.round(percent/100 * window.innerHeight);
  }
  var scaler = percentY(100/1000);
  var Svg = Matter.Svg;
  //Setup Matter JS
  var engine = Matter.Engine.create();
  var world = engine.world;
  var render = Matter.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: cannyw,
      height: cannyh,
      background: '#078E56',
      wireframes: false,
      showAngleIndicator: false
    }
  });

  engine.world.gravity.y = -0.00002;
  engine.world.gravity.x = 0.00001;


  var branding = Matter.Bodies.rectangle(percentX(25), percentY(10), percentX(15), percentX(2), {
    density: 1.04,
    friction: .01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
      sprite: {
        texture: './svg/header/Branding.svg',
        xScale: percentX(1)/10,
        yScale: percentX(1)/10
      }
    }
  });

  var strategy = Matter.Bodies.rectangle(percentX(75), percentY(90), percentX(14), percentX(2), {
    density: 1.04,
    friction: .01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
      sprite: {
        texture: './svg/header/Strategy.svg',
        xScale: percentX(1)/10,
        yScale: percentX(1)/10
      }
    }
  });

  var webdesign = Matter.Bodies.rectangle(percentX(50), percentY(50), percentX(18), percentX(2), {
    density: 1.04,
    friction: .01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
      sprite: {
        texture: './svg/header/WebDesign.svg',
        xScale: percentX(1)/10,
        yScale: percentX(1)/10
      }
    }
  });

  var userexperience = Matter.Bodies.rectangle(percentX(25), percentY(28), percentX(20), percentX(2), {
    density: 1.04,
    friction: .01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
      sprite: {
        texture: './svg/header/userexperience.svg',
        xScale: percentX(1)/10,
        yScale: percentX(1)/10
      }
    }
  });

  var development = Matter.Bodies.rectangle(percentX(75), percentY(25), percentX(18), percentX(2), {
    density: 1.04,
    friction: .01,
    frictionAir: 0.00001,
    restitution: 0.8,

    render: {
      sprite: {
        texture: './svg/header/development.svg',
        xScale: percentX(1)/10,
        yScale: percentX(1)/10
      }
    }
  });



  Matter.Body.setVelocity( branding, {x:-1, y: 5});
  Matter.Body.setVelocity( strategy, {x: 0, y: -5});
  Matter.Body.setVelocity( webdesign, {x: 2, y: -1});
  Matter.Body.setVelocity( development, {x: -1, y: 1});

  Matter.World.add(world, [branding, strategy, webdesign, userexperience, development]);

  Matter.World.add(world, [

    // x, y, w, h
      Matter.Bodies.rectangle(window.innerWidth/2, -5, window.innerWidth, 9, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }), //top
      Matter.Bodies.rectangle(window.innerWidth/2, window.innerHeight+5, window.innerWidth, 9, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }), //bottom
      Matter.Bodies.rectangle(window.innerWidth/2+5, window.innerHeight/2, 9, window.innerHeight, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }), //right
      Matter.Bodies.rectangle(-5, window.innerHeight/2, 9, window.innerHeight, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }) //left
  ]);


  //Make interactive
  var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
    element: canvas,
    constraint: {
      render: {
            visible: false
        },
        stiffness:0.8
      }
  });
  mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
  Matter.World.add(world, mouseConstraint);

  //Start the engine
  Matter.Engine.run(engine);
  Matter.Render.run(render);
});

/////////NOISE
