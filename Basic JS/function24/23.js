    //23
    const draw = n => {
        var printedRow = '';
        var range = 0;
        for(var i = n - 1; Math.abs(i) < n; i--) {
            printedRow = '';
             range = (n - 1) - Math.abs(i);
            for(var j = n - 1; Math.abs(j) < n; j--) {
              if(Math.abs(j) <= range) {
                printedRow += '*';
              } else {
                printedRow += '_';
              }
            }
            console.log(printedRow);
        }
    }