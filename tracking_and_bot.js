$.getScript("https://l2.io/ip.js?var=userip", function() {

  $.getScript("https://sab1t.me/visitortracking.js", function() {
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
