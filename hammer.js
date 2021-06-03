class hammer
{   
    constructor(x, y) 
    {
        var options = 
        { 
            'density':2,
            'friction': 1.0,
            'restitution':0.5 
        };
        
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 100;
        this.height = 40;
        World.add(world, this.body);
        
        // this.image = loadImage("sprites/Hammer.png");
        // this.body.angle = 2;
    }

    display()
    { 
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white');
        fill('orange');
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();

        // imageMode(CENTER);
        // image(this.image, pos.x, pos.y, 150, 40);
    }

}
