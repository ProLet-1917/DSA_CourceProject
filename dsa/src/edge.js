class Edge {
    constructor(from, to, weight) {
        this.nextEdge = undefined; //指向邻接表中的下一条边
        this.from = from; 
        this.to = to;
        this.weight = weight;
    }
}