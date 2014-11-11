
    function checkRow(row, val){
        for(var i = 0; i < 9 ; i ++){
            if (data[row][i] === val){
                // Change arr[rowVal][i] box to red;
                return false;
            }                    
        }
        return true;   
    }


    function  checkCol(col, val){
        for(var i = 0; i < 9 ; i ++){
            if (data[i][col] === val){
                // Change arr[i][colVal] box to red;
                 return false;
            }       
        }
        return true;   
    }


    function checkBox(rowVal, colVal, val){
        var startRowIndex, stopRowIndex, startcolIndex, stopColIndex;
        if(rowVal < 3) {
            startRowIndex = 0, 
            stopRowIndex = 2;
        } else if (rowVal < 6){
            startRowIndex = 3, 
            stopRowIndex = 5;
        } else {
            startRowIndex = 6, 
            stopRowIndex = 8;
        }

        if (colVal < 3) {
            startcolIndex = 0, 
            stopColIndex = 2;
        } else if (colVal < 6) {
            startcolIndex = 3, 
            stopColIndex = 5;
        } else {
            startcolIndex = 6, 
            stopColIndex = 8;

        }

        for(var i = startRowIndex; i <= stopRowIndex ; i ++){
            for(var j = startcolIndex; j <= stopColIndex ; j ++)
                if (data[i][j] === val){
                    // Change arr[i][colVal]  to red;
                     return false;
                }   
            return true;      
        }
    }


    function checkValue(e) {
        e.preventDefault();
        e.stopPropagation();
        var val = e.keyCode;
        var id = e.target.getAttribute("id");
        //console.log(val);

        if((val <= 48)||(val >= 58)){
               return;          
        } 
        val = val - 48;
        
        var row = parseInt(id.substring(0,1));
        var col = parseInt(id.substring(2));

        if(!checkRow(row, val)){
            return;
        }

        if(!checkCol(col, val)){
            return;
        }
        if(!checkBox(row, col, val)){
            return;
        }

        e.target.value = "" + val;
        data[row][col] = val;

    }

