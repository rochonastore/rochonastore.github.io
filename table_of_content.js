function mbtTOC() {
    var mbtTOC = 0;
    var i = 0;
    var headlength = 0;
    var gethead = 0;
    var tempTOC = 0;
    
    
    if(document.getElementById("mbtTOCc").style.display == 'block'){
        document.getElementById("mbtTOCc").style.display = 'none';
    }
    else {
        document.getElementById("mbtTOCc").style.display = 'block';
    }
    
    
    headlength = document.getElementById("post-toc").getElementsByTagName("h4").length;
    //headlength = 5;
    /*for (i = 0; i < headlength; i++) {
        gethead = document.getElementById("post-toc").getElementsByTagName("h4")[i].textContent;
        document.getElementById("post-toc").getElementsByTagName("h4")[i].setAttribute("id", "point" + i);
        mbtTOC = document.getElementById("mbtTOCc");
        tempTOC = "<li><a href='#point" + i + "'>" + gethead + "</a></li>";
        mbtTOC += tempTOC;
    }*/
    
    document.getElementById("mbtTOCc").textContent = ""
    
    for (i = 0; i < headlength; i++) {
        gethead = document.getElementById("post-toc").getElementsByTagName("h4")[i].textContent;
        document.getElementById("post-toc").getElementsByTagName("h4")[i].setAttribute("id", "point" + i);
        //mbtTOC = document.getElementById("mbtTOCc");
        
        
        
        
        var li = document.createElement('li');
        li.setAttribute("id", "a-s_in_list"+i);

        
        var a = document.createElement('a');
        a.setAttribute("href", "#point" + i);
        a.textContent = gethead;
        
        
        document.getElementById("mbtTOCc").appendChild(li);
        document.getElementById("a-s_in_list"+i).appendChild(a);
        if(i == 0){
            document.getElementById("toc").style.display = 'none';
        }
        else{
            document.getElementById("loading").style.display = 'none';
        }
    }
    
}

//const button = document.getElementById('toc_butt');
//button.addEventListener('click', () => {
    

    /*function mbtToggle() {
        var mbt = document.getElementById('mbtTOCc');
        if (mbt.style.display === 'none') {
            mbt.style.display = 'block';
        } else {
            mbt.style.display = 'none';
        }
    }*/

    
    /*const h1 = document.createElement('h1');
    h1.textContent = 'Hello World!';
    document.body.appendChild(h1);*/
    
    mbtTOC();
    
//});
