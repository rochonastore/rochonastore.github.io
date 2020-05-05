window.addEventListener('message', event => {
    // IMPORTANT: check the origin of the data! 
    if (event.origin.startsWith('https://testblogmsjs.blogspot.com/')) { 
        // The data was sent from your site.
        // Data sent with postMessage is stored in event.data:
        console.log(event.data); 
    } else {
        // The data was NOT sent from your site! 
        // Be careful! Do not use it. This else branch is
        // here just for clarity, you usually shouldn't need it.
        return; 
    } 
}); 

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
