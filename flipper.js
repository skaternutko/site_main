function Flipper(x,y,w,h) {
    var options ={
        angle: 0,
        isStatic: true,
        friction: 0.0,
        restitution: 0.0,
        inertia: Infinity,// setting inertia to infinty will prevent rotation upon collision
        rotationSpeed: 1 // Optional
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    // add all of the bodies to the world
    Composite.add(world, this.body);
    
}

Flipper.prototype.show = function(){
    push();
    fill(0);
    stroke(0);
    var pos = this.body.position;
    var angle = this.body.angle;
    rotate(angle);
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
}