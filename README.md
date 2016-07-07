# CSVtoJSON
Transform CSV data to JSON

## HOW TO ##

1.include jQuery and CSVtoJSON.min.js

<pre>
&lt;script src="https://code.jquery.com/jquery-3.0.0.min.js"&gt;&lt;/script&gt;
&lt;script src="CSVtoJSON.min.js"&gt;&lt;/script&gt;
</pre>

2.call csvToJSON method , put header column count and text content

<pre>
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.csv",
        dataType: "text",
        success: function(data) {
        	console.log(csvToJSON(13,data));
        }
     });
});
</pre>