
class SubwayData {

    constructor() {
        this.graph = new StationsGraph();
        this.allLines = [];
        this.lineInfo = [];
    };
    ReadLines(reader) {
        var subwayInfoArray = reader.result.split("\n");
        var lineAmount = subwayInfoArray[0];
        //var subwayInfoArray = subwayInfoArray.slice(1).toString();

        //切割并读入每一条线
        for (let i = 1; i <= lineAmount; i++) {
            //读入lineInfo
            let lineInfoArray = subwayInfoArray[i].toString().split(",");
            this.lineInfo.push([lineInfoArray[0], lineInfoArray[1]], lineInfoArray[2]); //编号 线路名称 线站点数
            //读入Stations
            for (let j = 3; j < lineInfoArray.length; j += 2) {
                let stationNew = this.graph.StationAdd(lineInfoArray[j], lineInfoArray[1]);//自带检测
                if (j > 3) {  //若当前添加的站点不是最后一站，建立与上一站的双向边
                    this.graph.EdgeAdd(lineInfoArray[j - 2], lineInfoArray[j], lineInfoArray[j - 1]);
                    this.graph.EdgeAdd(lineInfoArray[j], lineInfoArray[j - 2], lineInfoArray[j - 1]);
                    debugger;
                }

            }
        }
    }
}
    /*
    @function cutLine
    用于把地铁各站间的数据分开，提取对应站点、线路
    @param
    {Array} txtArr 读入后被分割的txt数组 注意要保留地铁线路数
    {string} spliter 分割符，不填入默认为中文逗号
*/
    // SubwayData.prototype.cutLine = function (txtArr, spliter) {
    //     var real_spliter = undefined;
    //     if (arguments.length < 2)
    //         real_spliter = ",";
    //     else
    //         real_spliter = spliter;
    //     var linesCounts = txtArr[0];
    //     for (var i = 1; i <= linesCounts; i++) {
    //         var tempLine = txtArr[i].split(real_spliter);
    //         this.allLines.push(tempLine); /* 添加线路信息 */
    //         var lineStationCnts = parseInt(tempLine[2]); /* 地铁线路总站数 */
    //         var lineName = tempLine[1]; /* 地铁线路名称 {string} */
    //         this.lineInfo.push([lineName, lineStationCnts]); /* 线路信息，站点名称-站点数量 */
    //         /* 对于每一条线，遍历每个站 */
    //         for (var j = 3; j < tempLine.length; j += 2) {
    //             // 名字必须要去掉 \r 等回车换行符
    //             var stationName = tempLine[j].replace(/[\r\n]/g, "");
    //             var nextStationName = undefined; /* 下一站的名称 */
    //             if (j !== (tempLine.length - 1))
    //                 nextStationName = tempLine[j + 2].replace(/[\r\n]/g, ""); /* 如果不是最后一站，则建立和下一站的边 */
    //             if (this.StationController.hasOwnProperty(stationName)) { /* 已经遍历过的站 */
    //                 this.StationController[stationName].onLine.add(lineName);
    //             }
    //             else { /* 如果这是没有遍历过的点 */
    //                 this.StationController[stationName] = new station_1["default"](stationName);
    //                 this.StationController[stationName].onLine.add(lineName);
    //             }
    //         }
    //     }
    // };
