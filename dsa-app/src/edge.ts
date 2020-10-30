export class Edge {
    public next: Edge | undefined = undefined; 
    public from: string | number;
    public to: string | number;
    public weight: number | undefined;

    constructor(from: string | number, to: string | number,  weight: number, private hasWeight = true) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }; 

} 