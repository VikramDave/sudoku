(function($module) {

    checkRow(rowVal){
        var a[10];
        for(var i = 0; i < 9 ; i ++){
            if (a[arr[i][colVal]] === true){
                // Change arr[rowVal][i] box to red;
                return false;
            } else {
                a[arr[i][colVal]] = true;
            }   
            return true;         
        }
    }

    checkCol(colVal){
        var a[10];
        for(var i = 0; i < 9 ; i ++){
            if (a[arr[i][colVal]] === true){
                // Change arr[i][colVal] box to red;
                 return false;
            } else {
                a[arr[i][colVal]] = true;
            }       
            return true;       
        }
    }

    checkBox(rowVal, colVal){
        var startRowIndex, stopRowIndex, startcolIndex, stopColIndex;
        switch(rowVal) {
            case rowVal < 3:
            startRowIndex = 0, 
            stopRowIndex = 2;
            break;

            case 2 < rowVal < 6:
            startRowIndex = 3, 
            stopRowIndex = 5;
            break;

            case rowVal > 5:
            startRowIndex = 6, 
            stopRowIndex = 8;
            break;

            default:
            console.log("Unidentified row val");

        }

        switch(colVal) {
            case colVal < 3:
            startcolIndex = 0, 
            stopColIndex = 2;
            break;

            case 2 < colVal < 6:
            startcolIndex = 3, 
            stopColIndex = 5;
            break;

            case colVal > 5:
            startcolIndex = 6, 
            stopColIndex = 8;
            break;

            default:
            console.log("Unidentified col val");

        }

        var a[10];

        for(var i = startRowIndex; i =< stopRowIndex ; i ++){
            for(var j = startcolIndex; j =< stopColIndex ; j ++)
                if (a[arr[i][j]] === true){
                    // Change arr[i][colVal]  to red;
                     return false;
                } else {
                    a[arr[i][j]] = true;
                }   
            return true;      
        }
    }


    checkBox(boxVal){
        var startRowIndex, stopRowIndex, startcolIndex, stopColIndex;
        switch(boxVal) {
            case 1,4,7:
            startRowIndex = 0, 
            stopRowIndex = 2;
            break;

            case 2,5,8:
            startRowIndex = 3, 
            stopRowIndex = 5;
            break;

            case 3,6,9:
            startRowIndex = 6, 
            stopRowIndex = 8;
            break;

            default:
            console.log("Unidentified row val");
            return;

        }

        switch(colVal) {
            case 1,4,7:
            startcolIndex = 0, 
            stopColIndex = 2;
            break;

            case 2,5,8:
            startcolIndex = 3, 
            stopColIndex = 5;
            break;

            case 3,6,9:
            startcolIndex = 6, 
            stopColIndex = 8;
            break;

            default:
            console.log("Unidentified col val");

        }

        var a[10];

        for(var i = startRowIndex; i =< stopRowIndex ; i ++){
            for(var j = startcolIndex; j =< stopColIndex ; j ++)
                if (a[arr[i][j]] === true){
                    // Change arr[i][colVal]  to red;
                     return false;
                } else {
                    a[arr[i][j]] = true;
                }  
            return true;   
        }
    }


    $module.checker = checker;
})(checker);
