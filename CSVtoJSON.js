function csvToJSON(column_count,allText){
    var allTextLines = allText.split(/\r\n|\n/);
    if(allTextLines.length == 1){
        return readWithoutLineBreaks(column_count,allTextLines);
    }else if(allTextLines.length > 1){
        return readWithLineBreaks(allTextLines);
    }else{
        return null;
    }
}


function readWithoutLineBreaks(column_count,allTextLines){
    var record_num = column_count;
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr[headings[j]] = entries.shift();
        }
        lines.push(tarr);
    }
    return lines;
}

function readWithLineBreaks(allTextLines){
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr[headers[j]] = data[j];
            }
            lines.push(tarr);
        }
    }
    return lines;
}