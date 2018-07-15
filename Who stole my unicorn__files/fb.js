$(function(){
  var iOS = ( navigator.userAgent.match(/(iPhone)/g) ? true : false );
  if (iOS){
    $(".fb-link").click(function(){
      var open_in_app = confirm("Do you want to open the link in Facebook App?");
      if (open_in_app == true){
        var href= $(".fb-link").attr("href");
        var res = href.split("=");
        var username = res[res.length - 1];

        //$(".fb-link").attr("href", "fb://profile/" + username);

        window.open("fb://profile/" + username, "_blank");
        return false;
      }
      
    });
    
  }
});