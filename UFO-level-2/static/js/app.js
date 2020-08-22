// from data.js
var tableData = data;

// YOUR CODE HERE!

// --------------------------------------------------

// Connect dropdown items to respective columns
var dropDown = d3.select("#column-selection");

dropDown.on("click", funX);

function funX() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputSelection = d3.select("#column-selection");

    // Get the value property of the input element
    var inputColumn = inputSelection.property("value");
    var columnSelect = d3.select("#ufo-table>table-head").text();


    if (inputColumn === columnSelect) {
        result = 'positive';} 
        else {
            result = 'NOT positive';
        }
    return result;

    // console.log(inputColumn);

    // var chooseColumn = tableData.filter(dropDownOutput); 
    
    // function dropDownOutput(){
    //     var columnSelect = d3.select("#ufo-table>table-head").text();

    //     columnSelect === chooseColumn;
    //     console.log("columnSelect");
    //     console.log("--------------------------------------");
    // };
    

};


// --------------------------------------------------

