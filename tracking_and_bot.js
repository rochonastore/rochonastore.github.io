$.getScript("https://code.jquery.com/jquery-3.5.1.slim.min.js", function() {
$.getScript("https://l2.io/ip.js?var=userip", function() {

  $.getScript("https://rochonastore.github.io/visitortracking.js", function() {
    if(txt.indexOf( "bot") != -1){
      txt = "Bot has visited!";
    }
    var texts = txt;
    $.ajax({
      url: "https://mrchat.tk/rochonastore_visitor_tracking_bot/run.php",
      method: "POST",
      data: { "texts": texts }
    })

  
  });

});
});
