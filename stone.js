class stone
{
    constructor(x,y,width,height, option)
    {
       
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;

        this.image = loadImage("sprites/Stone.png");

    }
    
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);    
        this.positionX = mouseX;
        this.positionX = mouseX;

        // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, -40, 0, 150, 70);
        pop();
    }

}