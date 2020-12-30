
var openFile = function (event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        if (reader.result) {
            //显示文件内容
            $("#output").html(reader.result);
            var subwayInfoStr = reader.result.split("\n");
            var lineAmount = subwayInfoStr[0];
            var linesInfoStr = subwayInfoStr.slice(1);

            debugger;
        }
        reader.readAsText(input.files[0]);
    };
};
var edge = new Edge(1, 2, 3);
