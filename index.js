class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    //calculate diameter
    get diameter () {
        return this.radius * 2;
    }
    //calculate circumference
    get circumference () {
        return (this.radius * 2) * Math.PI;
    }
    //calculate area
    get area () {
        return (this.radius ** 2) * Math.PI;
    }
    //set diameter
    set diameter (diameter) {
        this.radius = diameter / 2;
    }
    //set circumference
    set circumference (circumference) {
        this.radius = circumference/(Math.PI * 2);
    }
    //set area
    set area (area) {
        this.radius = Math.sqrt(area/Math.PI);
    }
}