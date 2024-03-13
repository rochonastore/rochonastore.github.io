var ampsocs = document.getElementsByClassName("ampsoc");
if(ampsocs.length > 2){
    for (var i = 0; i < ampsocs.length; i++) {
        ampsocs[i].style.display = "none";
    }
}

var related_posts = document.getElementsByClassName("related-post-amp");
if(related_posts.length > 1){
    for (var i = 0; i < related_posts.length; i++) {
        related_posts[i].style.display = "none";
    }
}
