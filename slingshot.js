class Slingshot
{
    constructor(bodyA, pointB)
    {
        var options = {bodyA : bodyA, pointB : pointB, stiffness : 0.02, length : 100}
        this.pointB = pointB;
        this.Slingshot = Constraint.create(options)
        World.add(world, this.Slingshot)
    }

    fly()
    {
        this.Slingshot.bodyA = null;
    }

    display()
    {
        if(this.Slingshot.bodyA)
        {
       var pointA = this.Slingshot.bodyA.position;
       var pointB = this.pointB;

       strokeWeight(2);
       line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
}