    //12
    const draw = n => {
        var printedRow = '';
        for(var i = n; i > 0; i--) {
            printedRow = '';
            for(var j = 1; j <= n; j++) {
              if(i === j) {
                printedRow += '-';

              } else {
                printedRow += '*';
              }  
            }
            console.log(printedRow);
        }
    }