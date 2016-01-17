$(document).ready(function(){
  var range = $('input[type=range]');
  range.on('change', function(){
    var rangeVal = $(this).val();
    $('p').html("Current: " + rangeVal);
  });






});
