class hammer
{
    constructor(x,y,width,height, option)
    {
        // this.option={
        //     // 'restitution' : 0.8,
        //     //  "isStatic": true
        // }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;

        this.image = loadImage("sprites/Hammer.png");
        // this.image.scale = 1;
        this.body.angle = -20;
    }
    
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);    
        this.positionX = mouseX;
        this.positionX = mouseX;

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 10, 0, 150, 40);
        pop();
    }

    
}