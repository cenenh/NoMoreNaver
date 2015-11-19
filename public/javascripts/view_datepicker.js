$(function() {
  $( "#datepicker" ).datepicker({

    onSelect: function(date) {
      console.log("datepicker : " + date);
    },
    dateFormat: 'yy-mm-dd'
  });
});
