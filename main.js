window.saveDataAcrossSessions = false;
promptMessage = true;


var gazeData, gazeTime;
var previewHeight, previewWidth;


window.onload = function() {

    webgazer.setGazeListener(function(data, elapsedTime) {
        if(data == null) {
            if(promptMessage) alert("No data stored from previous sesion. Click to start");
            promptMessage = false;
            return;
        }
        gazeData = data;
        gazeTime = elapsedTime;

    }).begin();

    previewWidth = webgazer.params.videoViewerWidth; // 240
    previewHeight = webgazer.params.videoViewerHeight; // 320
}



window.onbeforeunload = function() {
    if(window.saveDataAcrossSessions) {
        webgazer.end();
    }
    else {
        localforage.clear();
    }
}