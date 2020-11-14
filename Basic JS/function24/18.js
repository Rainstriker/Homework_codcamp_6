    //18
    const draw = n => {
        var printedRow = '';
        for(var i = 1; i <= n; i++) {
            printedRow = '';
            for(var j = 1; j <= n; j++) {
              if(i > j) {
                printedRow += '-';

              } else {
                printedRow += '*';
              }  
            }
            console.log(printedRow);
        }
    }
