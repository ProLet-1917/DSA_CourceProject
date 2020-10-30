import EdgesTable from "./dictionary";
import { Edge } from "./edge";
import Station from "./station";


export class StationsGraph {
    //顶点
    private stationArray: (Station)[] = [];
    //边
    private adjList: Edge[] = [];
    //无向图
    constructor(private isDirected = false) {}
    
    stationAdd(stationNew : Station) : boolean {
        if(this.stationArray.includes(stationNew))
            return false;
        else {
            this.stationArray.push(stationNew);
            return true;
        }
    }
    stationGetIndex(stationName: string | number): number {
        for(let i = 0; i < this.stationArray.length; i++) {
            if(this.stationArray[i].name == stationName)
                return i;
        }
        return -1;
    }
    edgeGet(from: string | number, to: string | number): Edge | undefined {
        let index = this.stationGetIndex(from);
        //找到该顶点
        if(index != -1) {
            let stationFrom = this.stationArray[index];
            let edge = stationFrom.toEdge;
            //该顶点无边
            if(edge == undefined)
                return undefined;
            //有边
            else {
                while (edge?.next != undefined) {
                    if(edge.from == from && edge.to == to)
                        return edge;
                    else
                        edge = edge?.next;
                }
            }
            //但是找不到输入的那条
            return undefined;
        }
        //没这个点
        else
            return undefined; 
    }
    edgeAdd(from: string | number, to: string | number,  weight: number): boolean {
        let index = this.stationGetIndex(from);
        //找到该顶点
        if(index != -1) {
            let stationFrom = this.stationArray[index];
            let edge = stationFrom.toEdge;
            //该顶点无边
            if(edge == undefined) {
                stationFrom.toEdge = new Edge(from, to, weight);
                return true;
            }
            //该顶点已经有边
            else {
                while (edge?.next != undefined) {
                    edge = edge?.next;
                }
                edge.next = new Edge(from, to, weight);
                return true;
            }
        }
        //找不到该顶点
        else 
            return false;
    }
    
}