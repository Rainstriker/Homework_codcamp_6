    //10
    const draw = n => {
        var printedRow = '';
        var count = 1;
        for(var i = 1; i < n + 1; i++) {
            printedRow = '';
            for(var j = 1; j <= n; j++) {
                count = i * j;
                printedRow += count.toString();
            }
            console.log(printedRow);
        }
    }