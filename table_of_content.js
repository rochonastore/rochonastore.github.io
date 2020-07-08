function mbtTOC() {
    var mbtTOC = 0;
    var i = 0;
    var headlength = 0;
    var gethead = 0;
    headlength = document.getElementById("post-toc").getElementsByTagName("h4").length;
    for (i = 0; i < headlength; i++) {
        gethead = document.getElementById("post-toc").getElementsByTagName("h4")[i].textContent;
        document.getElementById("post-toc").getElementsByTagName("h4")[i].setAttribute("id", "point" + i);
        mbtTOC = "<li><a href='#point" + i + "'>" + gethead + "</a></li>";
        document.getElementById("mbtTOC") = document.getElementById("mbtTOC") + mbtTOC;
    }
}

function mbtToggle() {
    var mbt = document.getElementById('mbtTOC');
    if (mbt.style.display === 'none') {
        mbt.style.display = 'block';
    } else {
        mbt.style.display = 'none';
    }
}

mbtTOC();
