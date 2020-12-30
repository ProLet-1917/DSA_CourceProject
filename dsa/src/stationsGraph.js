class StationsGraph {
    //无向图
    constructor() {
        //顶点
        this.stationArray = [];
    }
    StationAdd(stationName, lineNumber) {
        for (let element of this.stationArray) {
            if (element.name == stationName) {
                element.lines.push(lineNumber);
                element.isTransfer = true;
                return element;
            }
        };

        let stationNew = new Station(stationName);
        stationNew.lines.push(lineNumber);
        this.stationArray.push(stationNew);
        return stationNew;
    };
    StationGet(stationName) {
        for (const iterator of this.stationArray) {
            if (iterator.name == stationName) return iterator;

        }
        return undefined;
      
    };
    StationGetIndex(stationName) {
        for (let i = 0; i < this.stationArray.length; i++) {
            if (this.stationArray[i].name == stationName)
                return i;
        }
        return -1;
    };
    EdgeWeightGet(from, to) {
        let index = this.StationGetIndex(from);
        //找到该顶点
        if (index != -1) {
            let stationFrom = this.stationArray[index];
            let edge = stationFrom.toEdge;
            //该顶点无边
            if (edge == null)
                return Number.MAX_SAFE_INTEGER;
            //有边
            else {
                while ((edge === null || edge === void 0 ? void 0 : edge.nextEdge) != null) {
                    if (edge.from == from && edge.to == to)
                        return edge.weight;
                    else
                        edge = edge === null || edge === void 0 ? void 0 : edge.nextEdge;
                }
            }
            //但是找不到输入的那条
            return Number.MAX_SAFE_INTEGER;
        }
        //没这个点
        else
            return Number.MAX_SAFE_INTEGER;
    };
    EdgeAdd(from, to, weight) {
        let index = this.StationGetIndex(from);
        //找到该顶点
        if (index != -1) {
            let stationFrom = this.stationArray[index];
            let edge = stationFrom.toEdge;
            //该顶点无边
            if (edge == undefined) {
                stationFrom.toEdge = new Edge(from, to, weight);
                return true;
            }
            //该顶点已经有边
            else {
                while ((edge === null || edge === void 0 ? void 0 : edge.nextEdge) != undefined) {
                    edge = edge === null || edge === void 0 ? void 0 : edge.nextEdge;
                }
                edge.nextEdge = new Edge(from, to, weight);
                return true;
            }
        }
        //找不到该顶点
        else
            return false;
    };

    Dijkstra(from) {

        //init
        this.stationArray.forEach((element) => {
            if (element.name == from) {
                element.distance = 0;
            }
            else {
                element.distance = Number.MAX_SAFE_INTEGER;

            }
            element.isVisited = false;
            element.preStation = undefined;

        });
        let curSrc = this.StationGet(from);
        //理论上可以更新所有, 只要有未被访问的点，就不停下循环

        do {
            if (curSrc.isVisited == true) continue;
            curSrc.isVisited = true;
            let edge = curSrc.toEdge;

            while (edge != undefined) {
                let curDest = this.StationGet(edge.to);
                if ((curDest.isVisited) == false && curDest.distance > curSrc.distance + edge.weight) {
                    //更新最短距离
                    curDest.distance = (curSrc.distance + edge.weight).toFixed(3); //保留三位小数
                    curDest.distance = Number(curDest.distance);
                    curDest.preStation = curSrc.name;

                }
                edge = edge.nextEdge;
            }
            //更新cursrc,找到distance最小，且isvisited = false的最近邻接点
            var nextSrc = new Station("default");   //default 标志结束循环
            nextSrc.distance = Number.MAX_SAFE_INTEGER;
            for (const iter of this.stationArray) {
                if (iter.isVisited == false)
                    nextSrc = nextSrc.distance > iter.distance ? iter : nextSrc;
            }

            //更新当前遍历的节点
            curSrc.fare = curSrc.FareGet();
            curSrc = nextSrc;

        }
        while (curSrc.name != "default");//default 标志结束循环
    }

};
