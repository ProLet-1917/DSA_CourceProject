
class Station  {
    constructor (name) {
        this.name = name;
        this.lines = [];
        //this.location = [0];
        this.toEdge = undefined;
        //this.isTransfer = false;
        //用于求最短路径
        this.preStation = undefined;
        this.isVisited = false;
        this.distance = Number.MAX_SAFE_INTEGER;
        this.fare = Number.MAX_SAFE_INTEGER;

    }
    FareGet() {
        if (this.distance < 6) return 3;
        else if (this.distance < 12) return 4;
        else if (this.distance < 22) return 5;
        else if (this.distance < 32) return 6;
        else if (this.distance < 52) return 7;
        else if (this.distance < 72) return 8;
        else return 9;
    }

}