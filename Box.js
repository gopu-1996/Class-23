class Box{

    constructor(x,y,w,h){

        var option ={
            restitution: 1.0
        }
    

        this.body = Bodies.rectangle(x,y,w,h,option);
        this.width=w;
        this.height=h;

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}