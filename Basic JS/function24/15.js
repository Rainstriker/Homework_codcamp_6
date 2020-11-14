    //15
    const draw = n => {
        var printedRow = '';
        for(var i = n-1; Math.abs(i) < n; i--) {
            printedRow = '';
            for(var j = n; j > 0; j--) {
              if(j <= Math.abs(i)) {
                printedRow += '-';

              } else {
                printedRow += '*';
              }  
            }
            console.log(printedRow);
        }
    }
