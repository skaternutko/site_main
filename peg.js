function Peg(x,y,r) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.body.label = "peg";
    // add all of the bodies to the world
    Composite.add(world, this.body);
    
}

Peg.prototype.show = function(){
    push();
    fill(255);
    stroke(0, 125, 0);
    strokeWeight(3);
    var pos = this.body.position;
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2)
    pop();
}