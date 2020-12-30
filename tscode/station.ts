import { Edge } from "./edge";

export default class Station {
    //public index: number;
    
    public name: string | number;
    public line: number = -1;
    public preNode: Station | undefined;//求得最短路径中的前驱节点
    public location: number[] = [0];
    public toEdge: Edge | undefined = undefined;
    public isTransfer: boolean = false;

    //用于求最短路径
    public isVisited: boolean = false;
    public distance: number = Number.MAX_SAFE_INTEGER;
    
    constructor(name: string | number) {
        //this.index = index;
        this.name = name;
        //this.line = line;
        //this.location = location;
        //this.isTransfer = transfer;
    }
}