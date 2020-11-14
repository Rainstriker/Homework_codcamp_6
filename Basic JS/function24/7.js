    //7
    const draw = n => {
        var printedRow = '';
        var numMulti = n * n;
        for(var i = 1; i <= n; i++) {
            printedRow = '';
            for(var j = 1; j <= n; j++) {
                printedRow += numMulti.toString();
                numMulti--;
            }
            console.log(printedRow);
        }
    }