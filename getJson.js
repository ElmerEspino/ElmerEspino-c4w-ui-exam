function ImportJSon() {
  var JsonData = "https://api.myjson.com/bins/19tzfh";
  $.ajax({
    url: JsonData,
    dataType: 'json',
    success: function(data) {
      if (!$.trim(data)) {
        alert('Not found! Please check your json file.');
      } else {
        for (var i = 0; i < data.length; i++) {
          var row = $('<tr><td>' + data[i].name + '</td><td>' + data[i].gender + '</td><td>' + data[i].company + '</td><td>' + data[i].email + '</td><td>' + data[i].registered + '</td><td>' + data[i].greeting + '</td></tr>');
          $('#myTable').append(row);
        }
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
  });
}