class Tree {
    constructor(x,y){
     var options={
         isStatic:true
     }
     this.x=x
     this.y=y
     this.width=450
     this.height=550
     this.thickness=10
     this.image=loadImage("Images/tree.png")
     this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
     this.leftBody=Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height,options);
     this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,options);
    
     World.add(world,this.bottomBody);
     World.add(world,this.leftBody);
     World.add(world,this.rightBody);
    }
    display(){
        push()
        translate(this.bottomBody.position.x,this.bottomBody.position.y);
        imageMode(CENTER);
        fill("grey");
        image(this.image,0,-this.height/2,this.width,this.height);
        pop();
    }
}