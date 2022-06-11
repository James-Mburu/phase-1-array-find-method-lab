// code your solution here
function superbowlWin(records){
    var year
    var record = records.find(function(record) {
        if (record.result === "W")
            return record
    });
    if (record){
        return record.year
    }
}
