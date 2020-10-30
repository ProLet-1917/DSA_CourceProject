import { Edge } from "./edge";

export default class Station {
    public name: string;
    public line: number = -1;
    public location: number[];
    public toEdge: Edge | undefined = undefined;
    public isTransfer: boolean = false;
    
    constructor(name: string, line: number, location: number[], transfer: boolean) {
        this.name = name;
        this.line = line;
        this.location = location;
        this.isTransfer = transfer;
    }
}