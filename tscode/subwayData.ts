import { Station } from "d:/download/beijing-subway-fare-query-master/src/datahandler";

class SubwayData {
    StationController: {};
    allLines: any[];
    lineInfo: any[];
    adjList: {};

    /*
        @constructor
        处理数据的类
        @param
        {Dict} StationController 存储所有站的信息，每个信息对应的是一个Station对象
        {Array{string}} allLines 存所有线路的原始信息，注意名字没有去掉\r
        {Array{Array}} lineInfo 二位数组，0存线路名称，1存站点数
        {Dict} adjList 地铁线路邻接表
    */
    constructor() {
        this.StationController = { };
        this.allLines = [];
        this.lineInfo = [];

    }

    /*
        @function cutLine
        用于把地铁各站间的数据分开，提取对应站点、线路
        @param
        {Array} txtArr 读入后被分割的txt数组 注意要保留地铁线路数
        {string} spliter 分割符，不填入默认为中文逗号
    */
    cutLine(txtArr, spliter) {
        var real_spliter = undefined;
        if (arguments.length < 2) real_spliter = "，";
        else real_spliter = spliter;
        var linesCounts = txtArr[0];
        for (var i = 1; i <= linesCounts; i++) {
            var tempLine = txtArr[i].split(real_spliter);
            this.allLines.push(tempLine);                         /* 添加线路信息 */
            var lineStationCnts = parseInt(tempLine[2]);         /* 地铁线路总站数 */
            var lineName = tempLine[1];                          /* 地铁线路名称 {string} */
            this.lineInfo.push([lineName, lineStationCnts]);     /* 线路信息，站点名称-站点数量 */
            /* 对于每一条线，遍历每个站 */
            for (var j = 3; j < tempLine.length; j += 2) {
                // 名字必须要去掉 \r 等回车换行符
                var stationName = tempLine[j].replace(/[\r\n]/g, "");
                var nextStationName = undefined;    /* 下一站的名称 */
                if (j !== (tempLine.length - 1)) nextStationName = tempLine[j + 2].replace(/[\r\n]/g, "");    /* 如果不是最后一站，则建立和下一站的边 */

                if (this.StationController.hasOwnProperty(stationName)) {           /* 已经遍历过的站 */
                    this.StationController[stationName].onLine.add(lineName);
                }
                else {  /* 如果这是没有遍历过的点 */
                    this.StationController[stationName] = new Station(stationName);
                    this.StationController[stationName].onLine.add(lineName);
                }

        

            }
        }
    }

};

export default SubwayData;