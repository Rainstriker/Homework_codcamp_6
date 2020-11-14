    //2
    const draw = n => {
        var printedRow = '';
        for(var i = n; i > 0; i--) {
            printedRow = '';
            for(var j = n; j > 0; j--) {
                printedRow += '*';
            }
            console.log(printedRow);
        }
    }
