   //5
   const draw = n => {
    var printedRow = '';
    for(var i = n; i > 0; i--) {
        printedRow = '';
        for(var j = 1; j <= n; j++) {
            printedRow += i.toString();
        }
        console.log(printedRow);
    }
}