async function mbtTOC() {
    var mbtTOC = 0;
    var i = 0;
    var headlength = 0;
    var gethead = 0;


    headlength = document.getElementById("post-toc").getElementsByTagName("h4").length;

    document.getElementById("mbtTOCc").textContent = ""

    for (i = 0; i < headlength; i++) {
        gethead = document.getElementById("post-toc").getElementsByTagName("h4")[i].textContent.trim();

        // if last character is a colon, remove it
        if (gethead.charAt(gethead.length - 1) == ":") {
            gethead = gethead.slice(0, -1);
        }

        document.getElementById("post-toc").getElementsByTagName("h4")[i].setAttribute("id", "point" + i);


        var li = document.createElement('li');
        li.setAttribute("id", "a-s_in_list" + i);


        var a = document.createElement('a');
        a.setAttribute("href", "#point" + i);
        a.textContent = gethead;


        document.getElementById("mbtTOCc").appendChild(li);
        document.getElementById("a-s_in_list" + i).appendChild(a);

    }

    if (i == 0) {
        document.getElementById("toc1").style.display = 'none';
    } else {
        document.getElementById("loading").style.display = 'none';
    }

}
console.log("mbtTOC");
// try{
//     mbtTOC();
// }
// catch(e){
//     console.log(e);
// }
try {
    new Promise(r => setTimeout(mbtTOC, 1000));
} catch (e) {
    console.log(e);
}
