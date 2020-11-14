
    //20
    const draw = n => {
        var printedRow = '';
        var count = 1;
        for(var i = n-1; Math.abs(i) < n; i--) {
            printedRow = '';
            for(var j = 1; j <= n; j++) {
              if(j <= Math.abs(i)) {
                printedRow += '_';

              } else {
                printedRow += count;
                count++
              }  
            }
            console.log(printedRow);
        }
    }