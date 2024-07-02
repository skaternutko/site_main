function Reticle(x,y, r) {
    var options ={
        isStatic: true
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    
    // add all of the bodies to the world
    Composite.add(world, this.body);
    
}

Reticle.prototype.show = function(){
    push();
    fill(120, 0, 0);
    stroke(255);
    var pos = this.body.position;
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2)
    pop();
}