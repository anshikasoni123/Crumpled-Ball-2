class Paper
{
    constructor(x, y, radius)
    {
        var options = {restitution : 0.8, density : 0.8, friction : 0.5}

        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;

        World.add(world, this.body)

        this.image = loadImage("paper.png")
    }

    display()
    {
        imageMode(CENTER)
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.radius, this.radius)
    }
}