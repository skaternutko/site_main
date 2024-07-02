function Ball(x,y, r) {
    this.hue = random(360);
    var options ={
        friction: 0.2,
        //elasticity
        restitution: 0.7,
        density: 1
    }
    this.body = Bodies.circle(x, y, r, options);
    this.body.label = "ball";
    this.r = r;
    
    // add all of the bodies to the world
    Composite.add(world, this.body);
    
}
Ball.prototype.isOffScreen = function() {
    var x = this.body.position.x;
    var y = this.body.position.x;
    return (x < -50 || x > width + 50 || y > height + 50);    
}

Ball.prototype.show = function(){
    push();
    fill(this.hue, 255, 255);
    stroke(255);
    var pos = this.body.position;
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2)
    pop();
}