    //22
    const draw = n => {
        var printedRow = '';
        for(var i = n; i > 0; i--) {
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
