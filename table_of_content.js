const button = document.getElementById('toc_butt');
button.addEventListener('click', () => {
    
    function mbtTOC() {
        var mbtTOC = 0;
        var i = 0;
        var headlength = 0;
        var gethead = 0;
        var tempTOC = 0;
        
        headlength = document.getElementById("post-toc").getElementsByTagName("h4").length;
        
        /*for (i = 0; i < headlength; i++) {
            gethead = document.getElementById("post-toc").getElementsByTagName("h4")[i].textContent;
            document.getElementById("post-toc").getElementsByTagName("h4")[i].setAttribute("id", "point" + i);
            mbtTOC = document.getElementById("mbtTOCc");
            tempTOC = "<li><a href='#point" + i + "'>" + gethead + "</a></li>";
            mbtTOC += tempTOC;
        }*/
        
        for (i = 0; i < headlength; i++) {
            gethead = document.getElementById("post-toc").getElementsByTagName("h4")[i].textContent;
            document.getElementById("post-toc").getElementsByTagName("h4")[i].setAttribute("id", "point" + i);
            //mbtTOC = document.getElementById("mbtTOCc");
            var li = document.createElement('h6');
            li.textContent = gethead;
            document.body.appendChild(li);
        }
        
    }

    /*function mbtToggle() {
        var mbt = document.getElementById('mbtTOCc');
        if (mbt.style.display === 'none') {
            mbt.style.display = 'block';
        } else {
            mbt.style.display = 'none';
        }
    }*/

    mbtTOC();
});
