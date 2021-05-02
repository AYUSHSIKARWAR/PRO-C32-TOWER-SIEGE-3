class Block2 {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':1.0,
        }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    this.visibility = 255
    World.add(world, this.body)
}
display(){
    console.log(this.body.speed)
    if (this.body.speed<4.4) {
        var angle = this.body.angle;
        var pos = this.body.position
    
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill("red")
    rect(0,0,this.width,this.height)
    pop()
    }else{
    World.remove(world,this.body)
    push()
    this.visibility = this.visibility -5
    pop()
    }
}
score(){
    if (this.visibility<0 && this.visibility>-105) {
        score++
    }
}
}