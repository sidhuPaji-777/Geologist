class Ball
{
    constructor(x, y, radius,  option)
    {
        // this.option={
        //     // 'restitution' : 0.8,
        //     //  "isStatic": true
        // }
        this.body=Bodies.circle(x, y, radius, option);
        World.add(world,this.body);
        this.radius = radius;
        
        this.image = loadImage("sprites/Ball.png");
    }
    
    display()
    {
        var pos=this.body.position;
        // ellipseMode(CENTER);
        ellipse(pos.x ,pos.y+25, this.radius);

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, -5, 15, 80, 80);
        pop();

    }

    
}