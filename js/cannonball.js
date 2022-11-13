class CannonBall{

constructor(x,y){
this.r=30
var options={isStatic:true}
this.body=Bodies.circle(x,y,this.r,options)
this.image=loadImage("./assets/cannonball.png")

World.add(world,this.body)



}

shoot(){
    var newAngle=cannon.angle-28;
    newAngle=newAngle*(3.14/180);
    var velocity=p5.Vector.fromAngle(newAngle)
    velocity.mult(0.5)
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
      
    }

display(){
var pos=this.body.position
push()
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.r,this.r)
pop()


}



}