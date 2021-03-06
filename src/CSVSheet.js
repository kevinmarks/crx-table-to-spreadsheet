var CSVSheet = (function () {
    function CSVSheet() {
    }

    CSVSheet.prototype.vend = function (data) {
        var csvText = new CSV(data).encode();

        return {
            contents: csvText,
            contentType: "text/csv",
            filename: "table.csv"
        };
    };

    return CSVSheet;
}());

if(typeof process !== "undefined" && process.env && process.env.NODE_ENV === 'test') {
   exports.CSVSheet = CSVSheet;
}
