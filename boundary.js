function Boundary(x,y,w,h) {
    var options ={
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    // add all of the bodies to the world
    Composite.add(world, this.body);
    
}

Boundary.prototype.show = function(){
    push();
    fill(0);
    stroke(0);
    var pos = this.body.position;
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
}