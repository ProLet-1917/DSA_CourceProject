import { Edge } from "./edge";
import Station from "./station";


export class StationsGraph {
    //顶点
    private stationArray: (Station)[] = [];
    //无向图
    constructor() {}
    
    StationAdd(stationNew : Station) : boolean {
        if(this.stationArray.includes(stationNew))
            return false;
        else {
            this.stationArray.push(stationNew);
            return true;
        }
    }
    StationGet(stationName: string | number): Station | undefined {
        // for(let i = 0; i < this.stationArray.length; i++) {
        //     if(this.stationArray[i].name == stationName)
        //         return this.stationArray[i];
        // }
        this.stationArray.forEach(element => {
            if(element.name = stationName)
                return element;
                
        });
        return undefined;
    }
    StationGetIndex(stationName: string | number): number {
        for(let i = 0; i < this.stationArray.length; i++) {
            if(this.stationArray[i].name == stationName)
                return i;
        }
        return -1;
    }
    EdgeWeightGet(from: string | number, to: string | number): number {
        let index = this.StationGetIndex(from);
        //找到该顶点
        if(index != -1) {
            let stationFrom = this.stationArray[index];
            let edge = stationFrom.toEdge;
            //该顶点无边
            if(edge == null)
                return Number.MAX_SAFE_INTEGER;
            //有边
            else {
                while (edge?.next != null) {
                    if(edge.from == from && edge.to == to)
                        return edge.weight;
                    else
                        edge = edge?.next;
                }
            }
            //但是找不到输入的那条
            return Number.MAX_SAFE_INTEGER;
        }
        //没这个点
        else
            return Number.MAX_SAFE_INTEGER; 
    }
    EdgeAdd(from: string | number, to: string | number,  weight: number): boolean {
        let index = this.StationGetIndex(from);
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
    
    Floyd()
    {
        
    }
    Dijkstra()
    {
        
    }
    /*Dijkstra(from: string | number): number
    {

        let shortestLength = Number.MAX_SAFE_INTEGER;
        let dist: Station[] = [];
        //init
        this.stationArray.forEach(element => {
            if(element.name == from) {
                element.distance = 0;
                dist.push(element);
            }
            else {
                element.distance = Number.MAX_SAFE_INTEGER;
            }
            element.isVisited = false;
        });
        while(dist.length != 0) {
            let curSrc = dist[0]; dist.pop();
            if(curSrc.isVisited) continue;
            curSrc.isVisited = true;

            let edge = curSrc?.toEdge;
            while(edge != undefined) {
                let curDest = this.StationGet(edge.to);
                if(curDest?.isVisited == false && curDest.distance > curSrc.distance + edge.weight) {
                    curDest.distance = curSrc.distance + edge.weight;
                    shortestLength = curDest.distance;
                    dist.push(curDest);
                }
                edge = edge?.next;
            }
        }
        return shortestLength;
    }*/

}