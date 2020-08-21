// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach(function(ufoReport) {
      console.log(ufoReport);
      var row = tbody.append("tr");

      Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
});


      // grab references to the input form and the output button
      var form = d3.select(".form-control");
      var button = d3.select("#filter-btn");

      // Create event handlers for clicking the button or pressing the enter key
      form.on("submit", runEnter);
      button.on("click", runEnter);


      // Create the function to run for both events
      function runEnter() {

            // Prevent the page from refreshing
            d3.event.preventDefault();

            // Select the input element and get the raw HTML node
            var inputElement = d3.select("#datetime");

            // Get the value property of the input element
            var inputValue = inputElement.property("value");

            console.log(inputValue);
            console.log(tableData);

            var filteredData = tableData.filter(dateOutput => dateOutput.datetime === inputValue);

            console.log(filteredData);


            // Display filtered data 
            filteredData.forEach(function(filteredReport) {
                  console.log(filteredReport);
                  var row = tbody.append("tr");

                  Object.entries(filteredReport).forEach(function([key, value]) {
                        console.log(key, value);
                        var cell = row.append("td");
                        cell.text(value);
                  });   
            });
      };


      