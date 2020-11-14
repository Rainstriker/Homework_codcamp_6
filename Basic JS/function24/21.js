    //21
    const draw = n => {
        var printedRow = '';
        for(var i = 1; i <= n; i++) {
            printedRow = '';
            for(var j = n - 1; Math.abs(j) < n; j--) {
              if(i <= Math.abs(j)) {
                printedRow += '_';

              } else {
                printedRow += '*';
              }  
            }
            console.log(printedRow);
        }
    }
