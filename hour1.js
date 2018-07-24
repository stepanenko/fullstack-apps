jQuery('document').ready(function () {
  jQuery('body').append('<a href="http://google.com">Go to Google</a>')

  jQuery("button").on('click', function() {

    var value1, value2, value3;
    value1 = jQuery("#val1").val();
    value2 = jQuery("#val2").val();
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = value1 + value2;
    //alert('value 1 + value 2 = ' + value3);
    document.write(typeof value3);



  })
})
