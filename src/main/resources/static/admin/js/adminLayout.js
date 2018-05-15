$('#viewAirplanes').click(function(e) {
e.preventDefault();
   $.get('airplanes/index.html', function(data) {
       $('#content-box-hear').html(data);
   });
});