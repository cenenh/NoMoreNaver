$(function() {
  $( "#datepicker1" ).datepicker({
    onSelect: function(date) {
      console.log("datepicker1 : " + date);
    },
    dateFormat: 'yy-mm-dd'
  });
});
