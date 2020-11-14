    //6
    const draw = n => {
        var printedRow = '';
        var count = 1;
        for(var i = 1; i <= n; i++) {
            printedRow = '';
            for(var j = 1; j <= n; j++) {
                printedRow += count.toString();
                count++;
            }
            console.log(printedRow);
        }
    }