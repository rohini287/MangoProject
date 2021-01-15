class stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
       this.r=r
        this.x=x
        this.y=y;
        this.image=loadImage("Images/stone.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);

       imageMode(CENTER)
       image(this.image,0,0, this.r,this.r);
       pop();
    }
}