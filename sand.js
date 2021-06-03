class sand
{
	constructor(x, y, radius,  option)
	{
		this.body=Bodies.circle(x, y, radius, option);
        World.add(world,this.body);
        this.radius = radius;
        

    }
    
    display()
    {
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x ,pos.y+6, this.radius);

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
    }

}
