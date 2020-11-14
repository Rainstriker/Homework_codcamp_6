    //11
    const draw = n => {
        var printedRow = '';
        for(var i = n; i > 0; i--) {
            printedRow = '';
            for(var j = n; j > 0; j--) {
              if(i === j) {
                printedRow += '-';

              } else {
                printedRow += '*';
              }  
            }
            console.log(printedRow);
        }
    }