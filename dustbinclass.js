class DustBinClass {
    constructor(x, y) {
        var options = {
            isStatic: true,
            'restitution': 0.3,
            'density': 1.2
        }

        this.x = x
        this.y = y
        this.width = 200
        this.height = 213
        this.thickness = 20
        this.angle = 0
        this.image = loadImage("dustbingreen.png")

        this.bottom = Bodies.rectangle(this.x, this.y, this.width, this.thickness, { isStatic: true })
        World.add(world, this.bottom)

        this.left = Bodies.rectangle(this.x - this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: true })
        Matter.Body.setAngle(this.left, this.angle)
        World.add(world, this.left)
       
        this.right = Bodies.rectangle(this.x + this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: true })
        Matter.Body.setAngle(this.right, -1 * this.angle)
        World.add(world, this.right)

    }
    display() {
        var pos1 = this.bottom.position
        var pos2 = this.left.position
        var pos3 = this.right.position

        push();
        translate(pos1.x, pos1.y);
        angleMode(RADIANS)
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0,-this.height/2,this.width,this.height);
        // strokeWeight(4);
        // stroke("red")
        // fill(255);
        //rect(0, 0, this.width, this.thickness);
        pop();

        push();
        translate(pos2.x, pos2.y);
        angleMode(RADIANS)
        rotate(this.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("yellow")
        fill(255);
        //rect(0, 0, this.thickness, this.height);
        pop();
        
        push();
        translate(pos3.x, pos3.y);
        angleMode(RADIANS)
        rotate(-1 * this.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue")
        fill(255);
       // rect(0, -200, this.thickness, this.height);
        pop();

    }
}
